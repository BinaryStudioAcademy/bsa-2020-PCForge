import { toNumber } from 'lodash';
import { createUUID } from '../../helpers/uuid.helper';
import { PromisedRedis, PromisedRedisClient } from '../../infrastructure/redis/interfaces';
import { Message, MessageType, WebSocketService } from '../socket/websocket.service';

export const notificationServiceFactory = async (
  redis: PromisedRedis,
  ws: WebSocketService
): Promise<NotificationService> => {
  const notificationService = new NotificationService(redis, ws);
  await notificationService.initialize();
  return notificationService;
};

export class NotificationService {
  private readonly CHANNEL_NOTIFICATIONS_LIMIT = 50;
  private publisher: PromisedRedisClient;
  constructor(private redis: PromisedRedis, private ws: WebSocketService) {}

  public async initialize(): Promise<void> {
    this.publisher = await this.redis.createClient();
    this.ws.on('newConnection', async ({ id: userId }) => {
      const notifications = await this.getNotifications(userId);
      const notificationsString = JSON.stringify(notifications);
      await this.ws.sendMessage(userId, new Message(notificationsString, MessageType.INITIAL_NOTIFICATIONS));
      await this.notifyUserById(userId, new Notification('info', NotificationType.INFO));
      await this.notifyUserById(userId, new Notification('error', NotificationType.ERROR));
      await this.notifyUserById(userId, new Notification('success', NotificationType.SUCCESS));
      await this.notifyUserById(userId, new Notification('warning', NotificationType.WARNING));
    });
  }

  public async notifyUserById(userId: string | number, notification: Notification): Promise<void | never> {
    const notificationsString = JSON.stringify(notification);
    await this.ws.sendMessage(toNumber(userId), new Message(notificationsString));
    await this.pushNotification(toNumber(userId), notification);
  }

  private async pushNotification(userId: string | number, notification: Notification): Promise<void | never> {
    const stringifiedNotification = notification.toString();
    this.publisher.rpush(userId.toString(), stringifiedNotification);
    const notificationsCount = await this.publisher.llen(userId.toString());
    if (notificationsCount > this.CHANNEL_NOTIFICATIONS_LIMIT) {
      this.publisher.lpop(userId.toString());
    }
  }

  private async getNotifications(userId: string | number): Promise<Notification[] | never> {
    const notificationJsonStrings = await this.publisher.lrange(userId.toString(), 0, -1);
    const notifications = notificationJsonStrings.map((notification) => Notification.fromJSON(notification));
    return notifications;
  }
}

export enum NotificationType {
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  WARNING = 'WARNING',
}

export class Notification {
  public readonly id: string;
  constructor(public readonly text: string, public readonly type: NotificationType = NotificationType.INFO) {
    this.id = createUUID();
  }
  public toString(): string {
    return JSON.stringify({ type: this.type, text: this.text });
  }
  public static fromJSON(json: string): Notification | never {
    const obj = JSON.parse(json);
    if (typeof obj.text !== 'string')
      throw new Error(`Notification text must be string type, got: [${typeof obj.text}](${obj.text})`);
    if (typeof obj.type !== 'string' || !Object.keys(NotificationType).find((type) => type === obj.type))
      throw new Error(`Notification type must be string NotificationType, got: [${typeof obj.type}](${obj.type})`);
    const notification = new Notification(obj.text, obj.type);
    return notification;
  }
}

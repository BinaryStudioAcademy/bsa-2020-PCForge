import { toNumber } from 'lodash';
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
    });
  }

  public async notifyUserById(userId: string | number, notifications: Notification[]): Promise<void | never> {
    const notificationsString = JSON.stringify(notifications);
    await this.ws.sendMessage(toNumber(userId), new Message(notificationsString));
    await this.pushNotification(toNumber(userId), notifications);
  }

  private async pushNotification(userId: string | number, notifications: Notification[]): Promise<void | never> {
    const stringifiedNotifications = notifications.map((notification) => notification.toString());
    this.publisher.rpush(userId.toString(), stringifiedNotifications);
    this.publisher.ltrim(userId.toString(), 0, this.CHANNEL_NOTIFICATIONS_LIMIT);
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
  constructor(public readonly value: string, public readonly type: NotificationType = NotificationType.INFO) {}
  public toString(): string {
    return JSON.stringify({ type: this.type, value: this.value });
  }
  public static fromJSON(json: string): Notification | never {
    const obj = JSON.parse(json);
    if (typeof obj.value !== 'string')
      throw new Error(`Notification value must be string type, got: [${typeof obj.value}](${obj.value})`);
    if (typeof obj.type !== 'string' || !Object.keys(NotificationType).find((type) => type === obj.type))
      throw new Error(`Notification type must be string NotificationType, got: [${typeof obj.type}](${obj.type})`);
    const notification = new Notification(obj.value, obj.type);
    return notification;
  }
}

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
      this.registerInboundMessageHandlers();
      const notifications = await this.getNotifications(userId);
      const notificationsString = JSON.stringify(notifications);
      await this.ws.sendMessage(userId, new Message(notificationsString, MessageType.INITIAL_NOTIFICATIONS));
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

  public async deleteNotification(userId: string, notificationId: string): Promise<void | never> {
    const notifications = await this.publisher.lrange(userId, 0, -1);
    const notification = notifications
      .map((notification) => Notification.fromJSON(notification))
      .find((notification) => notification.id === notificationId);
    if (notification) await this.publisher.lrem(userId, 1, notification.toString());
  }

  private registerInboundMessageHandlers = () => {
    this.ws.on('inboundMessage', async (message) => {
      const handleDeleteNotification = async (message: Message): Promise<void> => {
        if (typeof message.payload === 'string') return;
        if (message.payload.userId && message.payload.notificationId) {
          const { userId, notificationId } = message.payload;
          await this.deleteNotification(userId as string, notificationId as string);
        }
      };

      switch (message.type) {
        case MessageType.DELETE_NOTIFICATION: {
          return handleDeleteNotification(message);
        }
      }
    });
  };
}

export enum NotificationType {
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  WARNING = 'WARNING',
}

export class Notification {
  constructor(
    public readonly text: string,
    public readonly type: NotificationType = NotificationType.INFO,
    public readonly id: string = createUUID()
  ) {}
  public toString(): string {
    return JSON.stringify({ type: this.type, text: this.text, id: this.id });
  }
  public static fromJSON(json: string): Notification | never {
    const obj = JSON.parse(json);
    if (typeof obj.text !== 'string')
      throw new Error(`Notification text must be string type, got: [${typeof obj.text}](${obj.text})`);
    if (typeof obj.type !== 'string' || !Object.keys(NotificationType).find((type) => type === obj.type))
      throw new Error(`Notification type must be string NotificationType, got: [${typeof obj.type}](${obj.type})`);
    if (typeof obj.id !== 'string')
      throw new Error(`Notification id must be string type, got: [${typeof obj.id}](${obj.id})`);
    const notification = new Notification(obj.text, obj.type, obj.id);
    return notification;
  }
}

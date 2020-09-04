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
  private readonly CHANNEL_NOTIFICATIONS_LIMIT = 5;
  private publisher: PromisedRedisClient;
  constructor(private redis: PromisedRedis, private ws: WebSocketService) {}

  public async initialize(): Promise<void> {
    this.publisher = await this.redis.createClient();
    this.ws.on('newConnection', async ({ id: userId }) => {
      this.registerInboundMessageHandlers();
      const notifications = await this.getNotifications(userId);
      const notificationsString = JSON.stringify(notifications);
      await this.ws.sendMessage(userId, new Message(notificationsString, MessageType.INITIAL_NOTIFICATIONS));
      await this.notifyUserById(userId, new Notification({ text: new Date().toISOString() }));
      await this.notifyUserById(userId, new Notification({ text: new Date().toISOString() }));
      await this.notifyUserById(userId, new Notification({ text: new Date().toISOString() }));
    });
  }

  public async notifyUserById(userId: string | number, notification: Notification): Promise<void | never> {
    const notificationsString = JSON.stringify(notification);
    await this.pushNotification(toNumber(userId), notification);
    await this.ws.sendMessage(toNumber(userId), new Message(notificationsString));
  }

  private async pushNotification(userId: string | number, notification: Notification): Promise<void | never> {
    const stringifiedNotification = notification.toString();
    this.publisher.rpush(userId.toString(), stringifiedNotification);
    const notificationsCount = await this.publisher.llen(userId.toString());
    if (notificationsCount > this.CHANNEL_NOTIFICATIONS_LIMIT) {
      let notifications = await this.getNotifications(userId);
      notifications.sort(
        (notification1, notification2) => notification1.createdAt.getTime() - notification2.createdAt.getTime()
      );
      this.publisher.ltrim(userId.toString(), -1, 0); //clear list
      notifications = notifications.slice(0, this.CHANNEL_NOTIFICATIONS_LIMIT);
      console.log(notifications.length);
      notifications.forEach((_notification) => this.publisher.rpush(userId.toString(), JSON.stringify(_notification)));
    }
  }

  private async getNotifications(userId: string | number): Promise<Notification[] | never> {
    const notificationJsonStrings = await this.publisher.lrange(userId.toString(), 0, -1);
    const notifications = notificationJsonStrings.map((notification) => Notification.fromJSON(notification));
    return notifications;
  }

  private async getNotification(userId: string, notificationId: string): Promise<Notification | null | never> {
    const notifications = await this.publisher.lrange(userId, 0, -1);
    const notification = notifications
      .map((notification) => Notification.fromJSON(notification))
      .find((notification) => notification.id === notificationId);
    return notification;
  }

  private async getNotificationIndex(userId: string, notificationId: string): Promise<number | null | never> {
    const notifications = await this.publisher.lrange(userId, 0, -1);
    const index = notifications
      .map((notification) => Notification.fromJSON(notification))
      .findIndex((notification) => notification.id === notificationId);
    return index;
  }

  public async deleteNotification(userId: string, notificationId: string): Promise<void | never> {
    const notification = await this.getNotification(userId, notificationId);
    if (notification) await this.publisher.lrem(userId, 1, notification.toString());
  }

  private async readNotification(userId: string, notificationId: string): Promise<void | never> {
    const notification = await this.getNotification(userId, notificationId);
    const notificationIndex = await this.getNotificationIndex(userId, notificationId);
    if (notificationIndex > 0 && notification) {
      notification.readAt = new Date();
      await this.publisher.lset(userId, notificationIndex, notification.toString());
      await this.ws.sendMessage(
        parseInt(userId),
        new Message(notification.toString(), MessageType.UPDATE_NOTIFICATION)
      );
    }
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

      const handleReadNotification = async (message: Message): Promise<void> => {
        if (typeof message.payload === 'string') return;
        if (message.payload.userId && message.payload.notificationId) {
          const { userId, notificationId } = message.payload;
          await this.readNotification(userId as string, notificationId as string);
        }
      };

      switch (message.type) {
        case MessageType.DELETE_NOTIFICATION: {
          return handleDeleteNotification(message);
        }
        case MessageType.READ_NOTIFICATION: {
          return handleReadNotification(message);
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

interface INotificationWithLinkPayload {
  type: 'link';
  value: string;
}

export type INotificationPayload = INotificationWithLinkPayload;

export class Notification {
  public readonly text: string;
  public readonly type: NotificationType;
  public readonly id: string;
  public readonly createdAt: Date;
  public readAt: Date | null;
  public readonly payload: INotificationPayload;
  constructor({
    text,
    type,
    id,
    createdAt,
    readAt,
    payload,
  }: {
    text: string;
    type?: NotificationType;
    id?: string;
    createdAt?: Date;
    readAt?: Date;
    payload?: INotificationPayload;
  }) {
    this.text = text;
    this.type = type || NotificationType.INFO;
    this.id = id || createUUID();
    this.createdAt = createdAt || new Date();
    this.readAt = readAt || null;
    this.payload = payload;
  }
  public toString(): string {
    return JSON.stringify({
      type: this.type,
      text: this.text,
      id: this.id,
      createdAt: this.createdAt,
      readAt: this.readAt,
      payload: this.payload,
    });
  }
  public static fromJSON(json: string): Notification | never {
    const obj = JSON.parse(json);
    console.log(json);
    if (typeof obj.text !== 'string')
      throw new Error(`Notification text must be string type, got: [${typeof obj.text}](${obj.text})`);
    if (typeof obj.type !== 'string' || !Object.keys(NotificationType).find((type) => type === obj.type))
      throw new Error(`Notification type must be string NotificationType, got: [${typeof obj.type}](${obj.type})`);
    if (typeof obj.id !== 'string')
      throw new Error(`Notification id must be string type, got: [${typeof obj.id}](${obj.id})`);
    if (typeof obj.createdAt !== 'string')
      throw new Error(
        `Notification createdAt must be string(Date) type, got: [${typeof obj.createdAt}](${obj.createAt})`
      );
    const notification = new Notification(obj);
    return notification;
  }
}

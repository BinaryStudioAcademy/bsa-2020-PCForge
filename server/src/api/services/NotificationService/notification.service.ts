import { PromisedRedis, PromisedRedisClient } from '../../../infrastructure/redis/interfaces';
import { Message, MessageType } from '../../socket/message';
import { WebSocketService } from '../../socket/websocket.service';
import { Notification } from './notification';

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
    this.registerInboundMessageHandlers();
    this.ws.on('newConnection', async ({ id: userId }) => {
      const notifications = await this.getNotifications(userId);
      await this.ws.sendMessage(
        userId,
        new Message({
          type: MessageType.INITIAL_NOTIFICATIONS,
          payload: notifications,
        })
      );
      await this.notifyUserById(userId, new Notification({ text: new Date().toISOString() }));
    });
  }

  public async notifyUserById(userId: string | number, notification: Notification): Promise<void | never> {
    await this.pushNotification(Number(userId), notification);
    await this.ws.sendMessage(
      Number(userId),
      new Message({
        type: MessageType.NEW_NOTIFICATION,
        payload: notification,
      })
    );
  }

  private async pushNotification(userId: string | number, notification: Notification): Promise<void | never> {
    const stringifiedNotification = notification.toString();
    this.publisher.rpush(userId.toString(), stringifiedNotification);
    const notificationsCount = await this.publisher.llen(userId.toString());
    if (notificationsCount > this.CHANNEL_NOTIFICATIONS_LIMIT) {
      let notifications = await this.getNotifications(userId);
      notifications.sort(
        (notification1, notification2) => notification2.createdAt.getTime() - notification1.createdAt.getTime()
      );
      const lastNotification = notifications[notifications.length - 1];
      await this.ws.sendMessage(
        Number(userId),
        new Message({
          type: MessageType.DELETE_NOTIFICATION,
          payload: lastNotification,
        })
      );
      this.publisher.ltrim(userId.toString(), -1, 0); //clear list
      notifications = notifications.slice(0, this.CHANNEL_NOTIFICATIONS_LIMIT);
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

  public async deleteNotification({
    userId,
    notificationId,
  }: {
    userId: string;
    notificationId: string;
  }): Promise<void | never> {
    const notification = await this.getNotification(userId, notificationId);
    if (!notification) return;
    await this.publisher.lrem(userId, 1, notification.toString());
    await this.ws.sendMessage(
      Number(userId),
      new Message({
        type: MessageType.DELETE_NOTIFICATION,
        payload: notification,
      })
    );
  }

  private async readNotification({
    userId,
    notificationId,
  }: {
    userId: string;
    notificationId: string;
  }): Promise<void | never> {
    const notification = await this.getNotification(userId, notificationId);
    const notificationIndex = await this.getNotificationIndex(userId, notificationId);
    if (notificationIndex > -1 && notification) {
      notification.readAt = new Date();
      await this.publisher.lset(userId, notificationIndex, notification.toString());
      await this.ws.sendMessage(
        Number(userId),
        new Message({
          type: MessageType.READ_NOTIFICATION,
          payload: notification,
        })
      );
    }
  }

  private registerInboundMessageHandlers = () => {
    this.ws.on('inboundMessage', async (message) => {
      switch (message.content.type) {
        case MessageType.DELETE_NOTIFICATION_REQUEST: {
          return await this.deleteNotification(message.content.payload);
        }
        case MessageType.READ_NOTIFICATION_REQUEST: {
          return await this.readNotification(message.content.payload);
        }
      }
    });
  };
}

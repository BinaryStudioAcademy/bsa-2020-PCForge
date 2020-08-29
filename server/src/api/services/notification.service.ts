import { PromisedRedis, PromisedRedisClient } from '../../infrastructure/redis/interfaces';
import { parseInt } from '../../helpers/global.helper';

export const notificationServiceFactory = async (redis: PromisedRedis): Promise<NotificationService> => {
  const notificationService = new NotificationService(redis);
  await notificationService.create();
  return notificationService;
};

export class NotificationService {
  private readonly CHANNEL_NOTIFICATIONS_LIMIT = 50;
  private publisher: PromisedRedisClient;
  constructor(private redis: PromisedRedis) {}

  public async create(): Promise<void> {
    this.publisher = await this.redis.createClient();
  }

  public async notifyUserById(userId: string | number, notification: Notification): Promise<void | never> {
    // send via socket
    await this.pushNotification(parseInt(userId), notification);
  }

  private async pushNotification(channelId: string, notification: Notification): Promise<void | never> {
    const stringifiedNotification = notification.toString();
    this.publisher.rpush(channelId, stringifiedNotification);
    this.publisher.ltrim(channelId, 0, this.CHANNEL_NOTIFICATIONS_LIMIT);
  }
}

export enum NotificationType {
  STRING,
}

export class Notification<T extends NotificationType = NotificationType.STRING> {
  readonly value: string;
  constructor(readonly type: T, _value: unknown) {
    switch (type) {
      case NotificationType.STRING: {
        this.value = (_value as unknown) as string;
        return;
      }
    }
  }
  public toString(): string {
    return JSON.stringify(this);
  }
}

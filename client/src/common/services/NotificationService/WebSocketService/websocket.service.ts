import { INotification } from '../notification';
import { NotificationService } from '../notification.service';
import { IMessage, MessageType } from './message';

export class WebSocketService {
  constructor(private readonly ws: WebSocket, private readonly notificationService: NotificationService) {}

  public handleMessage(messageJSON: string): void {
    const message = JSON.parse(messageJSON) as IMessage;
    console.log('ws message:', message);
    switch (message.type) {
      case MessageType.INITIAL_NOTIFICATIONS:
        return this.handleInitialMessage(message.payload);
      case MessageType.NEW_NOTIFICATION:
        return this.handleNewMessage(message.payload);
      case MessageType.DELETE_NOTIFICATION:
        return this.handleDeleteNotificationMessage(message.payload);
      case MessageType.READ_NOTIFICATION:
        return this.handleReadNotificationMessage(message.payload);
    }
  }

  public deleteNotification(userId: string, notification: INotification): void {
    const message = JSON.stringify({
      type: MessageType.DELETE_NOTIFICATION_REQUEST,
      payload: {
        userId,
        notificationId: notification.id,
      },
    });
    this.ws.send(message);
    console.log('ws send message', message);
  }

  public readNotification(userId: string, notification: INotification): void {
    const message = JSON.stringify({
      type: MessageType.READ_NOTIFICATION_REQUEST,
      payload: {
        userId,
        notificationId: notification.id,
      },
    });
    this.ws.send(message);
    console.log('ws send message', message);
  }

  private handleDeleteNotificationMessage(notification: INotification) {
    this.notificationService.deleteNotification(notification);
  }

  private handleInitialMessage(notifications: INotification[]) {
    this.notificationService.setNotifications(notifications);
  }

  private handleNewMessage(notification: INotification) {
    this.notificationService.addNotification(notification);
  }

  private handleReadNotificationMessage(notification: INotification) {
    this.notificationService.readNotification(notification);
  }
}

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
        return this.handleInitialMessage(message);
      case MessageType.NEW_NOTIFICATION:
        return this.handleNewMessage(message);
      case MessageType.DELETE_NOTIFICATION:
        return this.handleDeleteNotificationMessage(message);
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

  private handleDeleteNotificationMessage(message: IMessage) {
    this.notificationService.deleteNotification(message.payload as INotification);
  }

  private handleInitialMessage(message: IMessage) {
    this.notificationService.setNotifications(message.payload as INotification[]);
  }

  private handleNewMessage(message: IMessage) {
    return this.notificationService.addNotification(message.payload as INotification);
  }
}

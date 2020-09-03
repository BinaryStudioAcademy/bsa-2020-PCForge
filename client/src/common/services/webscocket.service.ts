import { INotification } from './notification.service';
import { NotificationService } from './notification.service';

enum MessageType {
  INITIAL_NOTIFICATIONS = 'INITIAL_NOTIFICATIONS',
  NEW_NOTIFICATION = 'NEW_NOTIFICATION',
  DELETE_NOTIFICATION = 'DELETE_NOTIFICATION',
}

interface IMessage {
  type: MessageType;
  payload: unknown;
}

export class WebSocketService {
  constructor(private readonly ws: WebSocket, private readonly notificationService: NotificationService) {}

  public handleMessage(messageJSON: string): void {
    const message = JSON.parse(messageJSON) as IMessage;
    message.payload = JSON.parse(message.payload as string);
    console.log('ws message:', message);
    switch (message.type) {
      case MessageType.INITIAL_NOTIFICATIONS:
        return this.handleInitialMessage(message);
      case MessageType.NEW_NOTIFICATION:
        return this.handleNewMessage(message);
    }
  }

  public deleteNotification(userId: string, notificationId: string): void {
    const message = JSON.stringify({
      type: MessageType.DELETE_NOTIFICATION,
      payload: {
        userId,
        notificationId,
      },
    });
    this.ws.send(message);
    console.log('ws send message', message);
  }

  private handleInitialMessage(message: IMessage) {
    if (message.type !== MessageType.INITIAL_NOTIFICATIONS) return;
    this.notificationService.setNotifications(message.payload as INotification[]);
  }

  private handleNewMessage(message: IMessage) {
    if (message.type !== MessageType.NEW_NOTIFICATION) return;
    this.notificationService.addNotification(message.payload as INotification);
  }
}

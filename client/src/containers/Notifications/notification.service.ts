import { INotification } from './interfaces';

interface IActions {
  setNotifications: (notifications: INotification[]) => void;
  addNotification: (notification: INotification) => void;
  deleteNotification: (notificationId: string) => void;
}

enum MessageType {
  INITIAL_NOTIFICATIONS = 'INITIAL_NOTIFICATIONS',
  NEW_NOTIFICATION = 'NEW_NOTIFICATION',
}

interface IMessage {
  type: MessageType;
  payload: unknown;
}

export class NotificationService {
  constructor(private readonly reduxActions: IActions) {}

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

  private handleInitialMessage(message: IMessage) {
    if (message.type !== MessageType.INITIAL_NOTIFICATIONS) return;
    this.reduxActions.setNotifications(message.payload as INotification[]);
  }

  private handleNewMessage(message: IMessage) {
    if (message.type !== MessageType.NEW_NOTIFICATION) return;
    this.reduxActions.addNotification(message.payload as INotification);
  }
}

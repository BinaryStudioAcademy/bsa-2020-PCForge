import { INotification } from './interfaces';

interface IActions {
  setNotifications: (notifications: INotification[]) => void;
  addNotification: (notification: INotification) => void;
  deleteNotification: (notificationId: string) => void;
}

export class NotificationService {
  constructor(private readonly reduxActions: IActions) {}

  public handleMessage(messageJSON: string): void {
    const message = JSON.parse(messageJSON);
    console.log('New message:', message);
  }

  public addNotification(notificationJSON: string): void {
    const notification = JSON.parse(notificationJSON);
  }
}

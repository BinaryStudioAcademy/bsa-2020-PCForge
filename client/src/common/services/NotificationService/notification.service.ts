import { INotification } from './notification';

interface IActions {
  setNotifications: (notifications: INotification[]) => void;
  addNotification: (notification: INotification) => void;
  deleteNotification: (notification: INotification) => void;
  updateNotification: (notification: INotification) => void;
}

export class NotificationService {
  constructor(private readonly reduxActions: IActions) {}

  public setNotifications(notifications: INotification[]): void {
    this.reduxActions.setNotifications(notifications);
  }

  public addNotification(notification: INotification): void {
    this.reduxActions.addNotification(notification);
  }

  public deleteNotification(notification: INotification): void {
    this.reduxActions.deleteNotification(notification);
  }

  public readNotification(notification: INotification): void {
    this.reduxActions.updateNotification(notification);
  }
}

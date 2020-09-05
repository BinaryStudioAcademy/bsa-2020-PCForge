import { createUUID } from 'common/helpers/uuid.helper';
import { INotification, NotificationType } from './notification';

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

export const createNotification = ({ text, type }: { text: string; type: NotificationType }): INotification => ({
  id: createUUID(),
  text,
  type,
  createdAt: new Date(),
  readAt: null,
});

export const createInfoNotification = (text: string): INotification =>
  createNotification({
    text,
    type: NotificationType.INFO,
  });

export const createErrorNotification = (text: string): INotification =>
  createNotification({
    text,
    type: NotificationType.ERROR,
  });

export const createWarningNotification = (text: string): INotification =>
  createNotification({
    text,
    type: NotificationType.WARNING,
  });

export const createSuccessNotification = (text: string): INotification =>
  createNotification({
    text,
    type: NotificationType.SUCCESS,
  });

export const info = (text: string): INotification =>
  createNotification({
    text,
    type: NotificationType.INFO,
  });

export const error = (text: string): INotification =>
  createNotification({
    text,
    type: NotificationType.ERROR,
  });

export const warning = (text: string): INotification =>
  createNotification({
    text,
    type: NotificationType.WARNING,
  });

export const success = (text: string): INotification =>
  createNotification({
    text,
    type: NotificationType.SUCCESS,
  });

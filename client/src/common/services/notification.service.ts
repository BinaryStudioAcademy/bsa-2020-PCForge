import { createUUID } from 'common/helpers/uuid.helper';

export enum NotificationType {
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  WARNING = 'WARNING',
}

export interface INotification {
  id: string;
  type: NotificationType;
  text: string;
}

interface IActions {
  setNotifications: (notifications: INotification[]) => void;
  addNotification: (notification: INotification) => void;
  deleteNotification: (notificationId: string) => void;
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
    this.reduxActions.addNotification(notification);
  }
}

export const createInfoNotification = (text: string): INotification => ({
  id: createUUID(),
  text,
  type: NotificationType.INFO,
});

export const createErrorNotification = (text: string): INotification => ({
  id: createUUID(),
  text,
  type: NotificationType.ERROR,
});

export const createWarningNotification = (text: string): INotification => ({
  id: createUUID(),
  text,
  type: NotificationType.WARNING,
});

export const createSuccessNotification = (text: string): INotification => ({
  id: createUUID(),
  text,
  type: NotificationType.SUCCESS,
});

export const info = (text: string): INotification => ({
  id: createUUID(),
  text,
  type: NotificationType.INFO,
});

export const error = (text: string): INotification => ({
  id: createUUID(),
  text,
  type: NotificationType.ERROR,
});

export const warning = (text: string): INotification => ({
  id: createUUID(),
  text,
  type: NotificationType.WARNING,
});

export const success = (text: string): INotification => ({
  id: createUUID(),
  text,
  type: NotificationType.SUCCESS,
});

import { INotification } from '../interfaces';

export enum NotificationsActionTypes {
  SET_NOTIFICATIONS = 'Notifications/SET_NOTIFICATIONS',
  ADD_NOTIFICATION = 'Notifications/ADD_NOTIFICATION',
  DELETE_NOTIFICATION = 'Notifications/DELETE_NOTIFICATION',
  CLOSE_NOTIFICATION = 'Notifications/CLOSE_NOTIFICATION',
}

interface ISetNotificationsAction {
  type: NotificationsActionTypes.SET_NOTIFICATIONS;
  payload: {
    notifications: INotification[];
  };
}

interface IAddNotificationAction {
  type: NotificationsActionTypes.ADD_NOTIFICATION;
  payload: {
    notification: INotification;
  };
}

interface IDeleteNotificationAction {
  type: NotificationsActionTypes.DELETE_NOTIFICATION;
  payload: {
    notificationId: string;
  };
}

interface ICloseNotificationAction {
  type: NotificationsActionTypes.CLOSE_NOTIFICATION;
  payload: {
    notificationId: string;
  };
}

export type NotificationsActions =
  | ISetNotificationsAction
  | IAddNotificationAction
  | IDeleteNotificationAction
  | ICloseNotificationAction;

export interface NotificationsState {
  notifications: INotification[];
  activeNotifications: INotification[];
}

import { INotification } from '../interfaces';
import { NotificationsActionTypes, NotificationsActions } from './actionTypes';

export const setNotifications = (notifications: INotification[]): NotificationsActions => ({
  type: NotificationsActionTypes.SET_NOTIFICATIONS,
  payload: {
    notifications,
  },
});

export const addNotification = (notification: INotification): NotificationsActions => ({
  type: NotificationsActionTypes.ADD_NOTIFICATION,
  payload: {
    notification,
  },
});

export const deleteNotification = (notificationId: string): NotificationsActions => ({
  type: NotificationsActionTypes.DELETE_NOTIFICATION,
  payload: {
    notificationId,
  },
});

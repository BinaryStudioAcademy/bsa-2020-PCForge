import { INotification } from 'common/services/notification.service';
import { NotificationService } from 'common/services/notification.service';
import { WebSocketService } from 'common/services/webscocket.service';
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

export const closeNotification = (notificationId: string): NotificationsActions => ({
  type: NotificationsActionTypes.CLOSE_NOTIFICATION,
  payload: {
    notificationId,
  },
});

export const setNotificationService = (notificationService: NotificationService): NotificationsActions => ({
  type: NotificationsActionTypes.SET_NOTIFICATION_SERVICE,
  payload: {
    notificationService,
  },
});

export const setWebSocketService = (webSocketService: WebSocketService): NotificationsActions => ({
  type: NotificationsActionTypes.SET_WEBSOCKET_SERVICE,
  payload: {
    webSocketService,
  },
});

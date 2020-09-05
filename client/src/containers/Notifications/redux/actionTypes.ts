import { INotification } from 'common/services/NotificationService/notification';
import { NotificationService } from 'common/services/NotificationService/notification.service';
import { WebSocketService } from 'common/services/NotificationService/WebSocketService/notification.service';

export enum NotificationsActionTypes {
  SET_NOTIFICATIONS = 'Notifications/SET_NOTIFICATIONS',
  ADD_NOTIFICATION = 'Notifications/ADD_NOTIFICATION',
  DELETE_NOTIFICATION = 'Notifications/DELETE_NOTIFICATION',
  CLOSE_NOTIFICATION = 'Notifications/CLOSE_NOTIFICATION',
  SET_NOTIFICATION_SERVICE = 'Notifications/SET_NOTIFICATION_SERVICE',
  SET_WEBSOCKET_SERVICE = 'Notifications/SET_WEBSOCKET_SERVICE',
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

interface ISetNotificationServiceAction {
  type: NotificationsActionTypes.SET_NOTIFICATION_SERVICE;
  payload: {
    notificationService: NotificationService;
  };
}

interface ISetWebSocketServiceAction {
  type: NotificationsActionTypes.SET_WEBSOCKET_SERVICE;
  payload: {
    webSocketService: WebSocketService;
  };
}

export type NotificationsActions =
  | ISetNotificationsAction
  | IAddNotificationAction
  | IDeleteNotificationAction
  | ICloseNotificationAction
  | ISetNotificationServiceAction
  | ISetWebSocketServiceAction;

export interface NotificationsState {
  notifications: INotification[];
  activeNotifications: INotification[];
  NotificationService: NotificationService | null;
  WebSocketService: WebSocketService | null;
}

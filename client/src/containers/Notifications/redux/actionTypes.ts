import { INotification } from 'common/services/NotificationService/notification';
import { NotificationService } from 'common/services/NotificationService/notification.service';
import { WebSocketService } from 'common/services/NotificationService/WebSocketService/websocket.service';

export enum NotificationsActionTypes {
  SET_NOTIFICATIONS = 'Notifications/SET_NOTIFICATIONS',
  ADD_NOTIFICATION = 'Notifications/ADD_NOTIFICATION',
  UPDATE_NOTIFICATION = 'Notifications/UPDATE_NOTIFICATION',
  DELETE_NOTIFICATION = 'Notifications/DELETE_NOTIFICATION',
  SET_NOTIFICATION_SERVICE = 'Notifications/SET_NOTIFICATION_SERVICE',
  SET_WEBSOCKET_SERVICE = 'Notifications/SET_WEBSOCKET_SERVICE',
}

interface ISetNotificationsAction {
  type: NotificationsActionTypes.SET_NOTIFICATIONS;
  payload: {
    notifications: INotification[];
  };
}

export interface IAddNotificationAction {
  type: NotificationsActionTypes.ADD_NOTIFICATION;
  payload: {
    notification: INotification;
  };
}

export interface IDeleteNotificationAction {
  type: NotificationsActionTypes.DELETE_NOTIFICATION;
  payload: {
    notification: INotification;
  };
}

export interface IUpdateNotificationAction {
  type: NotificationsActionTypes.UPDATE_NOTIFICATION;
  payload: {
    notification: INotification;
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
  | IUpdateNotificationAction
  | ISetNotificationServiceAction
  | ISetWebSocketServiceAction;

export interface NotificationsState {
  notifications: INotification[];
  NotificationService: NotificationService | null;
  WebSocketService: WebSocketService | null;
}

import { MessageSeverity } from './../components/Message';

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

export interface showNotification {
  type: typeof SHOW_NOTIFICATION;
  payload: {
    message: string;
    notificationType: MessageSeverity;
    icon?: string;
  };
}

export interface hideNotification {
  type: typeof HIDE_NOTIFICATION;
}

export type NotificationActionTypes = showNotification | hideNotification;

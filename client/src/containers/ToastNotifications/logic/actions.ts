import { NotificationActionTypes, SHOW_NOTIFICATION, HIDE_NOTIFICATION } from './actionTypes';
import { MessageSeverity } from '../components/Message';

export const showSuccess = (message: string, icon?: string): NotificationActionTypes => ({
  type: SHOW_NOTIFICATION,
  payload: {
    message,
    notificationType: MessageSeverity.success,
    icon,
  },
});

export const showError = (message: string, icon?: string): NotificationActionTypes => ({
  type: SHOW_NOTIFICATION,
  payload: {
    message,
    notificationType: MessageSeverity.error,
    icon,
  },
});

export const showWarning = (message: string, icon?: string): NotificationActionTypes => ({
  type: SHOW_NOTIFICATION,
  payload: {
    message,
    notificationType: MessageSeverity.warning,
    icon,
  },
});

export const showInfo = (message: string, icon?: string): NotificationActionTypes => ({
  type: SHOW_NOTIFICATION,
  payload: {
    message,
    notificationType: MessageSeverity.info,
    icon,
  },
});

export const hideNotification = (): NotificationActionTypes => ({
  type: HIDE_NOTIFICATION,
});

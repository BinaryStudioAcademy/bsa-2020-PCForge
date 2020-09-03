import { NotificationsActions, NotificationsActionTypes, NotificationsState } from './actionTypes';

const initialState: NotificationsState = {
  notifications: [],
  activeNotifications: [],
  NotificationService: null,
};

export function NotificationsReducer(state = initialState, action: NotificationsActions): NotificationsState {
  switch (action.type) {
    case NotificationsActionTypes.SET_NOTIFICATIONS: {
      return {
        ...state,
        notifications: action.payload.notifications,
      };
    }

    case NotificationsActionTypes.ADD_NOTIFICATION: {
      return {
        ...state,
        notifications: [...state.notifications, action.payload.notification],
        activeNotifications: [...state.activeNotifications, action.payload.notification],
      };
    }

    case NotificationsActionTypes.DELETE_NOTIFICATION: {
      return {
        ...state,
        notifications: state.notifications.filter((notification) => notification.id !== action.payload.notificationId),
        activeNotifications: state.activeNotifications.filter(
          (notification) => notification.id !== action.payload.notificationId
        ),
      };
    }

    case NotificationsActionTypes.CLOSE_NOTIFICATION: {
      return {
        ...state,
        activeNotifications: state.activeNotifications.filter(
          (notification) => notification.id !== action.payload.notificationId
        ),
      };
    }

    case NotificationsActionTypes.SET_NOTIFICATION_SERVICE: {
      return {
        ...state,
        NotificationService: action.payload.notificationService,
      };
    }

    default:
      return state;
  }
}
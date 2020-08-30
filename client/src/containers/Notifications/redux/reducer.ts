import { NotificationsActions, NotificationsActionTypes, NotificationsState } from './actionTypes';

const initialState: NotificationsState = {
  notifications: [],
  activeNotifications: [],
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

    default:
      return state;
  }
}

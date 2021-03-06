import { NotificationsActions, NotificationsActionTypes, NotificationsState } from './actionTypes';

const initialState: NotificationsState = {
  notifications: [],
  NotificationService: null,
  WebSocketService: null,
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
      };
    }

    case NotificationsActionTypes.DELETE_NOTIFICATION: {
      return {
        ...state,
        notifications: state.notifications.filter((notification) => notification.id !== action.payload.notification.id),
      };
    }

    case NotificationsActionTypes.UPDATE_NOTIFICATION: {
      return {
        ...state,
        notifications: state.notifications.map((notification) =>
          notification.id === action.payload.notification.id ? action.payload.notification : notification
        ),
      };
    }

    case NotificationsActionTypes.SET_NOTIFICATION_SERVICE: {
      return {
        ...state,
        NotificationService: action.payload.notificationService,
      };
    }

    case NotificationsActionTypes.SET_WEBSOCKET_SERVICE: {
      return {
        ...state,
        WebSocketService: action.payload.webSocketService,
      };
    }

    default:
      return state;
  }
}

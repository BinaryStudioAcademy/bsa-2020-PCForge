import { NotificationActionTypes, SHOW_NOTIFICATION, HIDE_NOTIFICATION } from './actionTypes';
import { MessageSeverity } from './../components/Message';

export interface INotificationState {
  open: boolean;
  message: string;
  notificationType: MessageSeverity;
  icon?: string;
}

const initialState: INotificationState = {
  open: false,
  message: '',
  notificationType: MessageSeverity.success,
  icon: '',
};

function NotificationReducer(state = initialState, action: NotificationActionTypes): INotificationState {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        ...state,
        open: true,
        message: action.payload.message,
        notificationType: action.payload.notificationType,
        icon: action.payload.icon,
      };
    case HIDE_NOTIFICATION:
      return initialState;
    default:
      return state;
  }
}

export default NotificationReducer;

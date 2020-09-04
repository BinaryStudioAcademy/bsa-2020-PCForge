import store from 'redux/store';
import { showSuccess, showWarning, showInfo, showError } from 'containers/ToastNotifications/logic/actions';

export const success = (message: string, icon?: string): void => {
  store.dispatch(showSuccess(message, icon));
};

export const warning = (message: string, icon?: string): void => {
  store.dispatch(showWarning(message, icon));
};

export const info = (message: string, icon?: string): void => {
  store.dispatch(showInfo(message, icon));
};

export const error = (message: string, icon?: string): void => {
  store.dispatch(showError(message, icon));
};

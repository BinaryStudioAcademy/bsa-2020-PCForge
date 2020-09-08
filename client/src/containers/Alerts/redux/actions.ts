import { IAlert } from 'common/services/AlertService/alert';
import { AlertsActionTypes, AlertsActions } from './actionTypes';

export const addAlert = (alert: IAlert): AlertsActions => ({
  type: AlertsActionTypes.ADD_ALERT,
  payload: {
    alert,
  },
});

export const closeAlert = (alert: IAlert): AlertsActions => ({
  type: AlertsActionTypes.CLOSE_ALERT,
  payload: {
    alert,
  },
});

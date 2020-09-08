import { IAlert } from 'common/services/AlertService/alert';

export enum AlertsActionTypes {
  ADD_ALERT = 'Alerts/ADD_ALERT',
  CLOSE_ALERT = 'Alerts/CLOSE_ALERT',
}

export interface IAddAlertAction {
  type: AlertsActionTypes.ADD_ALERT;
  payload: {
    alert: IAlert;
  };
}

export interface ICloseAlertAction {
  type: AlertsActionTypes.CLOSE_ALERT;
  payload: {
    alert: IAlert;
  };
}

export type AlertsActions = IAddAlertAction | ICloseAlertAction;

export interface AlertsState {
  alerts: IAlert[];
}

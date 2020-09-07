import { createUUID } from 'common/helpers/uuid.helper';
import { IAlert, AlertType } from './alert';

interface IActions {
  setAlerts: (alert: IAlert[]) => void;
  addAlert: (alert: IAlert) => void;
  deleteAlert: (alert: IAlert) => void;
  updateAlert: (alert: IAlert) => void;
}

export class AlertService {
  constructor(private readonly reduxActions: IActions) {}

  public setAlerts(alerts: IAlert[]): void {
    this.reduxActions.setAlerts(alerts);
  }

  public addAlert(alert: IAlert): void {
    this.reduxActions.addAlert(alert);
  }

  public deleteAlert(alert: IAlert): void {
    this.reduxActions.deleteAlert(alert);
  }

  public readAlert(alert: IAlert): void {
    this.reduxActions.updateAlert(alert);
  }
}

export const createAlert = ({ text, type }: { text: string; type: AlertType }): IAlert => ({
  id: createUUID(),
  text,
  type,
});

export const createInfoAlert = (text: string): IAlert =>
  createAlert({
    text,
    type: AlertType.INFO,
  });

export const createErrorAlert = (text: string): IAlert =>
  createAlert({
    text,
    type: AlertType.ERROR,
  });

export const createWarningAlert = (text: string): IAlert =>
  createAlert({
    text,
    type: AlertType.WARNING,
  });

export const createSuccessAlert = (text: string): IAlert =>
  createAlert({
    text,
    type: AlertType.SUCCESS,
  });

export const info = (text: string): IAlert =>
  createAlert({
    text,
    type: AlertType.INFO,
  });

export const error = (text: string): IAlert =>
  createAlert({
    text,
    type: AlertType.ERROR,
  });

export const warning = (text: string): IAlert =>
  createAlert({
    text,
    type: AlertType.WARNING,
  });

export const success = (text: string): IAlert =>
  createAlert({
    text,
    type: AlertType.SUCCESS,
  });

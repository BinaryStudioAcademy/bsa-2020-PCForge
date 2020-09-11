import { put, all, takeLatest } from 'redux-saga/effects';
import { addAlert, closeAlert } from 'containers/Alerts/redux/actions';
import {
  IAddNotificationAction,
  IUpdateNotificationAction,
  IDeleteNotificationAction,
  NotificationsActionTypes,
} from './actionTypes';
import { AlertType, IAlert } from 'common/services/AlertService/alert';

function* addNewNotificationAlert(action: IAddNotificationAction) {
  const alert: IAlert = {
    id: action.payload.notification.id,
    text: action.payload.notification.text,
    type: AlertType.INFO,
  };
  yield put(addAlert(alert));
}

function* watchNewNotification() {
  yield takeLatest(NotificationsActionTypes.ADD_NOTIFICATION, addNewNotificationAlert);
}

function* readOrDeleteNotificationAlert(action: IUpdateNotificationAction | IDeleteNotificationAction) {
  const alert: IAlert = {
    id: action.payload.notification.id,
    text: action.payload.notification.text,
    type: AlertType.INFO,
  };
  yield put(closeAlert(alert));
}

function* watchReadNotification() {
  yield takeLatest(NotificationsActionTypes.UPDATE_NOTIFICATION, readOrDeleteNotificationAlert);
}

function* watchDeleteNotification() {
  yield takeLatest(NotificationsActionTypes.DELETE_NOTIFICATION, readOrDeleteNotificationAlert);
}

export default function* NotificationsSagas() {
  yield all([watchNewNotification(), watchReadNotification(), watchDeleteNotification()]);
}

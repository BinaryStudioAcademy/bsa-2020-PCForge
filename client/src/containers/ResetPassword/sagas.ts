import { authService } from 'api/services/auth.service';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { setError, setResetPasswordRequestSuccess, setResetPasswordSuccess } from './actions';
import {
  ResetPasswordActionTypes,
  IFetchResetPasswordRequestAction,
  IFetchResetPasswordRequestRequestAction,
} from './actionTypes';

function* sendResetPasswordRequest(action: IFetchResetPasswordRequestRequestAction) {
  try {
    yield call(authService.resetPasswordRequest, action.payload.email);
    yield put(setResetPasswordRequestSuccess());
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* watchSendResetPasswordRequest() {
  yield takeLatest(ResetPasswordActionTypes.FETCH_RESET_PASSWORD_REQUEST_REQUEST, sendResetPasswordRequest);
}

function* sendResetPassword(action: IFetchResetPasswordRequestAction) {
  try {
    yield call(authService.resetPassword, action.payload);
    yield put(setResetPasswordSuccess());
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* watchSendResetPassword() {
  yield takeLatest(ResetPasswordActionTypes.FETCH_RESET_PASSWORD_REQUEST, sendResetPassword);
}

export default function* resetPasswordSagas() {
  yield all([watchSendResetPasswordRequest(), watchSendResetPassword()]);
}

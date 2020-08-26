import { authService } from 'api/services/auth.service';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { setError } from './actions';
import { ResetPasswordActionTypes, IFetchResetPasswordRequestRequestAction } from './actionTypes';

function* sendResetPasswordRequest(action: IFetchResetPasswordRequestRequestAction) {
  try {
    yield call(authService.resetPassword, action.payload.email);
  } catch (error) {
    yield put(setError(error));
  }
}

function* watchSendResetPasswordRequest() {
  yield takeLatest(ResetPasswordActionTypes.FETCH_RESET_PASSWORD_REQUEST, sendResetPasswordRequest);
}

export default function* resetPasswordSagas() {
  yield all([watchSendResetPasswordRequest()]);
}

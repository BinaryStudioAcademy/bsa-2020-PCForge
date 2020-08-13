import { call, put, takeEvery, all } from 'redux-saga/effects';
import { loginRequestAction, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILURE, AUTH_LOGIN_REQUEST } from './actionTypes';
import { authService } from 'api/services/auth.service';
import { User } from 'common/models/user';
import { IAuthPayload } from './interfaces';

function* login(action: loginRequestAction) {
  try {
    const user: User = yield call<(data: IAuthPayload) => void>(authService.login, action.payload);
    yield put({ type: AUTH_LOGIN_SUCCESS, payload: { user } });
  } catch (e) {
    yield put({
      type: AUTH_LOGIN_FAILURE,
      payload: {
        message: e.message,
      },
    });
  }
}

function* watchLogin() {
  yield takeEvery(AUTH_LOGIN_REQUEST, login);
}

export default function* authSagas() {
  yield all([watchLogin()]);
}

import { call, put, takeEvery, all } from 'redux-saga/effects';
import {
  loginRequestAction,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_REQUEST,
  AUTH_LOADING_STATUS,
} from './actionTypes';
import { authService } from 'api/services/auth.service';
import { User } from 'common/models/user';
import { IAuthPayload } from './interfaces';

function* login(action: loginRequestAction) {
  yield put({
    type: AUTH_LOADING_STATUS,
    payload: {
      isLoading: true,
    },
  });
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
  } finally {
    yield put({
      type: AUTH_LOADING_STATUS,
      payload: {
        isLoading: false,
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

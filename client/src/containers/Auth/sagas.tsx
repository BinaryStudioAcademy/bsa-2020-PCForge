import { call, put, takeEvery, all, takeLatest, takeLeading } from 'redux-saga/effects';
import {
  loginRequestAction,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_REQUEST,
  AUTH_REGISTER_REQUEST,
  registerRequestAction,
  googleAuthAction,
  AUTH_GOOGLE_AUTH,
  AUTH_GOOGLE_AUTH_SUCCESS,
  AUTH_GOOGLE_AUTH_FAILURE,
} from './actionTypes';
import { authService } from 'api/services/auth.service';
import { User } from 'common/models/user';
import { IAuthPayload, IRegPayload } from './interfaces';
import { changeLoadingStatus, registered, validationError } from './actions';

function* login(action: loginRequestAction) {
  yield put(changeLoadingStatus(false));
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
    yield put(changeLoadingStatus(false));
  }
}

function* watchLogin() {
  yield takeLatest(AUTH_LOGIN_REQUEST, login);
}

function* register(action: registerRequestAction) {
  const newUser = { ...action.payload };
  try {
    yield put(changeLoadingStatus(true));
    const data: User = yield call(authService.register, newUser);
    yield put(registered(false));
  } catch (error) {
    yield put(validationError(error?.message));
    // yield put({ type: AUTH_REGISTRATION_ERROR, payload: {
    //   message: error.message === 'Bad '
    // }});
  } finally {
    yield put(changeLoadingStatus(false));
  }
}

function* watchRegister() {
  yield takeLatest(AUTH_REGISTER_REQUEST, register);
}

function* googleAuth(action: googleAuthAction) {
  try {
    yield put(changeLoadingStatus(true));
    const user: User = yield call(authService.authGoogle, action.payload);
    yield put({ type: AUTH_GOOGLE_AUTH_SUCCESS, payload: { user } });
  } catch (e) {
    yield put({
      type: AUTH_GOOGLE_AUTH_FAILURE,
      payload: {
        message: e.message,
      },
    });
  } finally {
    yield put(changeLoadingStatus(false));
  }
}

function* watchGoogleAuth() {
  yield takeLeading(AUTH_GOOGLE_AUTH, googleAuth);
}

export default function* authSagas() {
  yield all([watchLogin(), watchRegister(), watchGoogleAuth()]);
}

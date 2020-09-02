import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
  loginRequestAction,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_REQUEST,
  AUTH_REGISTER_REQUEST,
  registerRequestAction,
  AUTH_LOGIN_BY_TOKEN_REQUEST,
  loginByTokenRequestAction,
} from 'containers/Auth/actionTypes';
import { authService } from 'api/services/auth.service';
import { User } from 'common/models/user';
import { IAuthPayload, IRegPayload } from 'containers/Auth/interfaces';
import { changeLoadingStatus, registered, validationError } from 'containers/Auth/actions';
import { clearToken, getToken } from 'helpers/tokenHelper';
import { TypeLoggedUser } from 'common/models/typeLoggedUser';

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
function* loginByToken(action: loginByTokenRequestAction) {
  yield put(changeLoadingStatus(true));
  try {
    const token = yield call(getToken);
    const loggedUser: TypeLoggedUser = yield call(authService.getUserByToken, token);
    const user = loggedUser.user?.id ? loggedUser.user : null;
    yield put({ type: AUTH_LOGIN_SUCCESS, payload: { user } });
  } catch (e) {
    clearToken();
  } finally {
    yield put(changeLoadingStatus(false));
  }
}

function* watchLoginByToken() {
  yield takeLatest(AUTH_LOGIN_BY_TOKEN_REQUEST, loginByToken);
}

function* register(action: registerRequestAction) {
  const newUser = { ...action.payload };
  try {
    yield put(changeLoadingStatus(true));
    const data: User = yield call<(data: IRegPayload) => void>(authService.register, newUser);
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

export default function* authSagas() {
  yield all([watchLogin(), watchLoginByToken(), watchRegister()]);
}

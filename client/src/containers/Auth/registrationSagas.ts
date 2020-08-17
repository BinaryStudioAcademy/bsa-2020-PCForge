import { authService } from 'api/services/auth.service';
import { IRegPayload } from './interfaces';
import { User } from 'common/models/user';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import {
  AUTH_REGISTER_REQUEST,
  AUTH_LOADING_STATUS,
  AUTH_REGISTRATION_SUCCESS,
  AUTH_REGISTRATION_ERROR,
  registerRequestAction,
} from './actionTypes';

export function* registerUser(action: registerRequestAction) {
  const newUser = { ...action.payload };
  console.log(newUser);
  try {
    yield put({ type: AUTH_LOADING_STATUS, payload: { isLoading: true } });
    const data: User = yield call<(data: IRegPayload) => void>(authService.register, newUser);
    yield put({ type: AUTH_REGISTRATION_SUCCESS, payload: { isRegistration: false } });
  } catch (error) {
    yield put({ type: AUTH_REGISTRATION_ERROR, payload: { message: error.message } });
  } finally {
    yield put({ type: AUTH_LOADING_STATUS, payload: { isLoading: false } });
  }
}

function* watchRegisterUser() {
  yield takeEvery(AUTH_REGISTER_REQUEST, registerUser);
}

export default function* registrationSaga() {
  yield all([watchRegisterUser()]);
}

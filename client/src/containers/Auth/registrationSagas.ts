import { authService } from 'api/services/auth.service';
import { IRegPayload } from './interfaces';
import { User } from 'common/models/user';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { AUTH_REGISTER_REQUEST, registerRequestAction } from './actionTypes';
import { changeLoadingStatus, validationError, registered } from './actions';

export function* registerUser(action: registerRequestAction) {
  const newUser = { ...action.payload };
  try {
    yield put(changeLoadingStatus(true));
    const data: User = yield call<(data: IRegPayload) => void>(authService.register, newUser);
    yield put(registered(false));
  } catch (error) {
    yield put(validationError(error));
  } finally {
    yield put(changeLoadingStatus(false));
  }
}

function* watchRegisterUser() {
  yield takeLatest(AUTH_REGISTER_REQUEST, registerUser);
}

export default function* registrationSaga() {
  yield all([watchRegisterUser()]);
}

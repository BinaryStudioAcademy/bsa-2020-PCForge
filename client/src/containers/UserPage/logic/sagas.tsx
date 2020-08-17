import { all, takeEvery, call, put } from 'redux-saga/effects';
import { getUser, updateUser as updateUserService } from 'api/services/userService';
import { uploadImage } from 'api/services/imageService';
import { loadUser as loadUserAction, updateUser as updateUserAction, LOAD_USER, UPDATE_USER } from './actionTypes';
import { showSpinner, hideSpinner, loadUserSuccess, updateUserSuccess } from './actions';

export default function* userSagas() {
  yield all([watchLoadUser(), watchUpdateUser()]);
}

function* watchLoadUser() {
  yield takeEvery(LOAD_USER, loadUser);
}

function* loadUser(action: loadUserAction) {
  yield put(showSpinner());
  try {
    const user = yield call(getUser, action.payload.id);
    yield put(loadUserSuccess(user));
  } catch (error) {
    console.log(error);
  }
  yield put(hideSpinner());
}

function* watchUpdateUser() {
  yield takeEvery(UPDATE_USER, updateUser);
}

function* updateUser(action: updateUserAction) {
  yield put(showSpinner());
  try {
    const data = action.payload.data;
    if (action.payload.avatarData) {
      data.avatar = yield call(uploadImage, action.payload.avatarData);
    }
    const updatedUser = yield call(updateUserService, data);
    yield put(updateUserSuccess(updatedUser));
  } catch (error) {
    console.log(error);
  }
  yield put(hideSpinner());
}

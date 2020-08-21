import { all, takeEvery, call, put } from 'redux-saga/effects';
import { getUser, updateUser as updateUserService } from 'api/services/userService';
import { uploadImage } from 'api/services/imageService';
import { loadUser as loadUserAction, updateUser as updateUserAction, loadSetups as loadSetupsAction, LOAD_USER, UPDATE_USER, LOAD_SETUPS } from './actionTypes';
import { showSpinner, hideSpinner, loadUserSuccess, updateUserSuccess, loadSetupsSuccess } from './actions';
import * as notification from 'common/services/notificationService';
import { getUserSetups, TypeResponseAll } from 'api/services/setupService';

export default function* userSagas() {
  yield all([watchLoadUser(), watchUpdateUser(), watchLoadSetups()]);
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
    notification.success('Your data has been successfully updated');
  } catch (error) {
    console.log(error);
    notification.error('Something went wrong, please try again later');
  }
  yield put(hideSpinner());
}

function* watchLoadSetups() {
  yield takeEvery(LOAD_SETUPS, loadSetups);
}

function* loadSetups(action: loadSetupsAction) {
  yield put(showSpinner());
  try {
    const id = action.payload.id;
    const setups = yield call(getUserSetups, {authorId: id});
    yield put(loadSetupsSuccess((setups as TypeResponseAll).data));
  } catch (error) {
    console.log(error);
  }
  yield put(hideSpinner());
}
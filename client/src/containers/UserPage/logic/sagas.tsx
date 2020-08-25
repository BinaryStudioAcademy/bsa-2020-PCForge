import { all, takeEvery, call, put } from 'redux-saga/effects';
import { getUser, updateUser as updateUserService, getUserGames } from 'api/services/userService';
import { uploadImage } from 'api/services/imageService';
import { loadUser as loadUserAction, loadUserGames as loadUserGamesActionType, updateUser as updateUserAction, LOAD_USER, UPDATE_USER, LOAD_USER_GAMES } from './actionTypes';
import {
  showSpinner,
  hideSpinner,
  loadUserSuccess,
  updateUserSuccess,
  loadUserGames as loadUserGamesAction,
  loadUserGamesSuccess,
} from './actions';
import * as notification from 'common/services/notificationService';

export default function* userSagas() {
  yield all([watchLoadUser(), watchUpdateUser(), watchLoadUserGames()]);
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

function* watchLoadUserGames() {
  yield takeEvery(LOAD_USER_GAMES, loadUserGames)
}

function* loadUserGames(action: loadUserGamesActionType) {
  yield put(showSpinner());
  try{
    const data = yield call(getUserGames, action.payload.id); 
    yield put(loadUserGamesSuccess(data.data));
  } catch (error) {
    console.log(error);
  }
  yield put(hideSpinner());
}
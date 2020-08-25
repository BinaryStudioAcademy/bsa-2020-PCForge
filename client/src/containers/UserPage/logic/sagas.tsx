import { all, takeEvery, call, put } from 'redux-saga/effects';
import { getUser, updateUser as updateUserService, getUserGames } from 'api/services/userService';
import { uploadImage } from 'api/services/imageService';
import {
  loadUser as loadUserAction,
  loadUserGames as loadUserGamesActionType,
  updateUser as updateUserAction,
  loadFilteredGames as loadFilteredGamesActionType,
  addUserGame as addUserGameActionType,
  LOAD_USER,
  UPDATE_USER,
  LOAD_USER_GAMES,
  LOAD_FILTERED_GAMES,
  ADD_USER_GAME,
} from './actionTypes';
import {
  showSpinner,
  hideSpinner,
  loadUserSuccess,
  updateUserSuccess,
  loadUserGames as loadUserGamesAction,
  loadUserGamesSuccess,
  loadFilteredGamesSuceess,
} from './actions';
import * as notification from 'common/services/notificationService';
import { getAllGames } from 'api/services/gamesService';
import { addUserGame as addUserGameService } from 'api/services/userService';

export default function* userSagas() {
  yield all([watchLoadUser(), watchUpdateUser(), watchLoadUserGames(), watchLoadFilteredGames(), watchAddUserGame()]);
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
  yield takeEvery(LOAD_USER_GAMES, loadUserGames);
}

function* loadUserGames(action: loadUserGamesActionType) {
  yield put(showSpinner());
  try {
    const data = yield call(getUserGames, action.payload.id);
    yield put(loadUserGamesSuccess(data.data));
  } catch (error) {
    console.log(error);
  }
  yield put(hideSpinner());
}

function* watchLoadFilteredGames() {
  yield takeEvery(LOAD_FILTERED_GAMES, loadFilteredGames);
}

function* loadFilteredGames(action: loadFilteredGamesActionType) {
  try {
    const data = yield call(getAllGames, { name: action.payload.searchString });
    yield put(loadFilteredGamesSuceess(data.data));
  } catch (error) {
    console.log(error);
  }
}

function* watchAddUserGame() {
  yield takeEvery(ADD_USER_GAME, addUserGame);
}

function* addUserGame(action: addUserGameActionType) {
  yield put(showSpinner());
  try {
    const data = yield call(addUserGameService, action.payload.id, action.payload.gameId);
    if (data.isNew) {
      yield put(loadUserGamesAction(action.payload.id));
      notification.success(`You have added ${data.game.name}`);
    } else {
      notification.warning('Looks like you already have this game');
    }
  } catch (error) {
    notification.error('Something went wrong, please try again later');
  }
  yield put(hideSpinner());
}

import { all, takeEvery, call, put, delay } from 'redux-saga/effects';
import { getUser, updateUser as updateUserService, getUserGames } from 'api/services/userService';
import { setLocalSetup } from 'helpers/setupHelper';
import { uploadImage } from 'api/services/imageService';
import {
  loadUser as loadUserAction,
  loadUserGames as loadUserGamesActionType,
  updateUser as updateUserAction,
  loadSetups as loadSetupsActionType,
  loadFilteredGames as loadFilteredGamesActionType,
  addUserGame as addUserGameActionType,
  deleteUserGame as deleteUserGameActionType,
  deleteUserSetup as deleteUserSetupActionType,
  IEditUserSetup,
  LOAD_USER,
  UPDATE_USER,
  LOAD_SETUPS,
  LOAD_USER_GAMES,
  LOAD_FILTERED_GAMES,
  ADD_USER_GAME,
  DELETE_USER_GAME,
  DELETE_USER_SETUP,
  EDIT_USER_SETUP,
} from './actionTypes';
import {
  showSpinner,
  hideSpinner,
  loadUserSuccess,
  updateUserSuccess,
  loadSetupsSuccess,
  loadSetups as loadSetupsAction,
  loadUserGames as loadUserGamesAction,
  loadUserGamesSuccess,
  loadFilteredGamesSuceess,
  loadUserFailed,
} from './actions';
import * as notification from 'common/services/notificationService';
import { getAllGames } from 'api/services/gamesService';
import { addUserGame as addUserGameService, deleteUserGame as deleteUserGameService } from 'api/services/userService';
import {
  getUserSetups,
  getSetup,
  deleteUserSetup as deleteUserSetupService,
  TypeResponseAll,
} from 'api/services/setupService';
import { TypeSetup } from 'containers/BuilderPage/reducer';
import history from 'browserHistory';
import { Routes } from 'common/enums';

export default function* userSagas() {
  yield all([
    watchLoadUser(),
    watchUpdateUser(),
    watchLoadUserGames(),
    watchLoadFilteredGames(),
    watchAddUserGame(),
    watchDeleteUserGame(),
    watchLoadSetups(),
    watchDeleteUserSetup(),
    watchEditUserSetup(),
  ]);
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
    yield put(loadUserFailed());
  } finally {
    yield put(hideSpinner());
  }
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
    notification.error(error.message || 'Something went wrong, please try again later');
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
    notification.error(error.message || 'Something went wrong, please try again later');
  }
  yield put(hideSpinner());
}

function* watchLoadSetups() {
  yield takeEvery(LOAD_SETUPS, loadSetups);
}

function* loadSetups(action: loadSetupsActionType) {
  yield put(showSpinner());
  try {
    const id = action.payload.authorId;
    const setups = yield call(getUserSetups, { authorId: id });
    yield put(loadSetupsSuccess((setups as TypeResponseAll).data));
  } catch (error) {
    notification.error(error.message || 'Something went wrong, please try again later');
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
    notification.error(error.message || 'Something went wrong, please try again later');
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
    notification.error(error.message || 'Something went wrong, please try again later');
  }
  yield put(hideSpinner());
}

function* watchDeleteUserGame() {
  yield takeEvery(DELETE_USER_GAME, deleteUserGame);
}

function* deleteUserGame(action: deleteUserGameActionType) {
  yield put(showSpinner());
  try {
    const deletedGame = yield call(deleteUserGameService, action.payload.id, action.payload.gameId);
    yield put(loadUserGamesAction(action.payload.id));
    notification.success(`You have deleted ${deletedGame.game.name}`);
  } catch (error) {
    yield put(hideSpinner());
    notification.error(error.message || 'Could not delete the game, try again later');
  }
}

function* watchDeleteUserSetup() {
  yield takeEvery(DELETE_USER_SETUP, deleteUserSetup);
}

function* deleteUserSetup(action: deleteUserSetupActionType) {
  yield put(showSpinner());
  try {
    const deletedSetup = yield call(deleteUserSetupService, action.payload.setupId);
    yield put(loadSetupsAction(action.payload.userId));
    notification.success(`You have deleted "${deletedSetup.title}"`);
  } catch (error) {
    yield put(hideSpinner());
    notification.error(error.message || 'Could not delete the setup, try again later');
  }
}

function* watchEditUserSetup() {
  yield takeEvery(EDIT_USER_SETUP, editUserSetup);
}

function* editUserSetup(action: IEditUserSetup) {
  try {
    const setupToEditFromBack = yield call(getSetup, action.payload.setupId);
    console.log(setupToEditFromBack);
    const setupToEditForBuilder = {
      id: setupToEditFromBack.id,
      title: setupToEditFromBack.title,
      description: setupToEditFromBack.description,
      image: setupToEditFromBack.image,
      cpu: setupToEditFromBack.cpu,
      gpu: setupToEditFromBack.gpu,
      ram: setupToEditFromBack.ram,
      ramCount: setupToEditFromBack.ramCount,
      motherboard: setupToEditFromBack.motherboard,
      powersupply: setupToEditFromBack.powerSupply,
      hdd: setupToEditFromBack.hdd || null,
      ssd: setupToEditFromBack.ssd || null,
    } as TypeSetup;
    yield call(setLocalSetup, setupToEditForBuilder);
    history.push(Routes.BUILDER);
  } catch {
    notification.error('Cannot edit at the moment');
  }
}

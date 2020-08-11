import { all, takeEvery, call, put, select } from 'redux-saga/effects';
// TODO: import api service here
import { loadUser as loadUserAction, LOAD_USER, UPDATE_USER } from './actionTypes';
import { showSpinner, hideSpinner, loadUserSuccess, updateUserSuccess } from './actions';

const apiUrl = 'http://localhost:5001/api/';

export default function* userSagas() {
  yield all([
    watchLoadUser(),
    // watchUpdateUser(),
  ]);
}

function* watchLoadUser() {
  yield takeEvery(LOAD_USER, loadUser);
}

function* loadUser(action: loadUserAction) {
  yield put(showSpinner());
  try {
    const user = yield call(fetch, `${apiUrl}/users/${action.payload.id}`);
    yield put(loadUserSuccess(user));
  } catch(error) {
    console.log(error);
  }
  yield put(hideSpinner());
}

// function* watchUpdateUser() {
//     yield takeEvery(UPDATE_USER, updateUser);
// }

// function* updateUser(action) {
//     // TODO: Implement
//     // const data = await fetch(`/users/${action.id}`);
//     // yield put(updateUserSuccess(data));
// }

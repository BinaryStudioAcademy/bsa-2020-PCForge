import { all, takeEvery, call, put, select } from 'redux-saga/effects';
// TODO: import api service here
import { LOAD_USER, UPDATE_USER } from './actionTypes';
import { loadUserSuccess, updateUserSuccess } from './actions';

export default function* userSagas() {
  yield all([
    // watchLoadUser(),
    // watchUpdateUser(),
  ]);
}

// function* watchLoadUser() {
//     yield takeEvery(LOAD_USER, loadUser);
// }

// function* loadUser(action) {
//     // TODO: Implement
// }

// function* watchUpdateUser() {
//     yield takeEvery(UPDATE_USER, updateUser);
// }

// function* updateUser(action) {
//     // TODO: Implement
//     // const data = await fetch(`/users/${action.id}`);
//     // yield put(updateUserSuccess(data));
// }


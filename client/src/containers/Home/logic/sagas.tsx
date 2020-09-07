import { all, takeEvery, call, put } from 'redux-saga/effects';
import { getTopSetups, TypeResponseAll } from 'api/services/setupService';
import { LOAD_TOP_SETUPS } from './actionTypes';
import { showSpinner, hideSpinner, loadTopSetupsSuccess } from './actions';

export default function* homePageSagas() {
  yield all([watchLoadTopSetups()]);
}

function* watchLoadTopSetups() {
  yield takeEvery(LOAD_TOP_SETUPS, loadTopSetups);
}

function* loadTopSetups() {
  yield put(showSpinner());
  try {
    const topSetups = yield call(getTopSetups, { count: 4 });
    if (topSetups) {
      yield put(loadTopSetupsSuccess((topSetups as TypeResponseAll).data));
    }
  } catch (error) {
    //notification here
  }
  yield put(hideSpinner());
}

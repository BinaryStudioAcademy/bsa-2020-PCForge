import { all, takeEvery, call, put } from 'redux-saga/effects';
import { getTopSetups } from 'api/services/setupService';
import { LOAD_TOP_SETUPS } from './actionTypes';
import { loadTopSetupsSuccess } from './actions';

export default function* homePageSagas() {
  yield all([watchLoadTopSetups()]);
}

function* watchLoadTopSetups() {
  yield takeEvery(LOAD_TOP_SETUPS, loadTopSetups);
}

function* loadTopSetups() {
  try {
    const topSetups = yield call(getTopSetups, { count: 4 });
    if (topSetups) {
      yield put(loadTopSetupsSuccess(topSetups));
    }
  } catch (error) {
    console.log(error);
    //notification here
  }
}

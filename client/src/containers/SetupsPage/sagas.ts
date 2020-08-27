import { getAllSetups } from 'api/services/setupsService';
import { call, put, all, takeEvery } from 'redux-saga/effects';
import { setError, setSetups, setTopsSetups } from './actions';
import { SetupsActions, IFetchSetupsRequest, SetupsActionsTypes, IFetchTopSetupsRequest } from './actionTypes';
import { getTopSetups } from 'api/services/setupService';

function* fetchSetups(action: IFetchSetupsRequest) {
  try {
    const { data: setups } = yield call(getAllSetups);
    yield put(setSetups(setups));
  } catch (error) {
    yield put(setError(error));
  }
}

function* watchFetchSetups() {
  yield takeEvery(SetupsActionsTypes.FETCH_SETUPS_REQUEST, fetchSetups);
}

function* fetchTopSetups(action: IFetchTopSetupsRequest) {
  try {
    const topSetups = yield call(getTopSetups, { count: 5 });
    if (topSetups) {
      yield put(setTopsSetups(topSetups.data));
    }
  } catch (error) {
    yield put(setError(error));
  }
}

function* watchFetchTopSetups() {
  yield takeEvery(SetupsActionsTypes.FETCH_TOP_SETUPS_REQUEST, fetchTopSetups);
}

export default function* setupsSagas() {
  yield all([watchFetchSetups(), watchFetchTopSetups()]);
}

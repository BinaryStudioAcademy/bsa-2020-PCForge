import { getAllSetups } from 'api/services/setupsService';
import { call, put, all, takeEvery } from 'redux-saga/effects';
import { setError, setSetups } from './actions';
import { SetupsActions, IFetchSetupsRequest, SetupsActionsTypes } from './actionTypes';

function* fetchSetups(action: IFetchSetupsRequest) {
  try {
    console.log(3);
    const { data: setups } = yield call(getAllSetups);
    yield put(setSetups(setups));
  } catch (error) {
    yield put(setError(error));
  }
}

function* watchFetchSetups() {
  yield takeEvery(SetupsActionsTypes.FETCH_SETUPS_REQUEST, fetchSetups);
}

export default function* setupsSagas() {
  yield all([watchFetchSetups()]);
}

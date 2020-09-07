import { getAllSetups } from 'api/services/setupsService';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { setError, setSetups, setTopsSetups, showSpinner } from 'containers/SetupsPage/actions';
import { IFetchSetupsRequest, SetupsActionsTypes, IFetchTopSetupsRequest } from 'containers/SetupsPage/actionTypes';
import { getTopSetups } from 'api/services/setupService';

function* fetchSetups(action: IFetchSetupsRequest) {
  try {
    yield put(showSpinner(true));
    const { data: setups, meta: setupsMeta } = yield call(getAllSetups, action.payload);
    yield put(setSetups(setups, setupsMeta.globalCount));
  } catch (error) {
    yield put(setError(error));
  } finally {
    yield put(showSpinner(false));
  }
}

function* watchFetchSetups() {
  yield takeLatest(SetupsActionsTypes.FETCH_SETUPS_REQUEST, fetchSetups);
}

function* fetchTopSetups(action: IFetchTopSetupsRequest) {
  try {
    yield put(showSpinner(true));
    const topSetups = yield call(getTopSetups, { count: 5 });
    if (topSetups) {
      yield put(setTopsSetups(topSetups.data));
    }
  } catch (error) {
    yield put(setError(error));
  } finally {
    yield put(showSpinner(false));
  }
}

function* watchFetchTopSetups() {
  yield takeLatest(SetupsActionsTypes.FETCH_TOP_SETUPS_REQUEST, fetchTopSetups);
}

export default function* setupsSagas() {
  yield all([watchFetchSetups(), watchFetchTopSetups()]);
}

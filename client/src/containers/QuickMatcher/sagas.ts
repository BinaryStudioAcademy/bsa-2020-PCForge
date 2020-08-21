import { getAllGames } from 'api/services/gameService';
import { getPerformance } from 'api/services/performanceService';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { setError, setGames, setPerformance } from './actions';
import { QuickMatcherActionTypes, IFetchGamesRequestAction, IFetchPerformanceRequestAction } from './actionTypes';

function* fetchGames(action: IFetchGamesRequestAction) {
  try {
    const { data: games } = yield call(getAllGames, { name: action.payload.name, from: 0, count: 50 });
    yield put(setGames(games));
  } catch (error) {
    yield put(setError(error));
  }
}

function* watchFetchGames() {
  yield takeLatest(QuickMatcherActionTypes.FETCH_GAMES_REQUEST, fetchGames);
}

function* fetchPerformance(action: IFetchPerformanceRequestAction) {
  try {
    const { cpuId, gpuId, ramSize, gameId } = action.payload;
    const performance = yield call(getPerformance, { cpuId, gpuId, ramSize, gameId, from: 0, count: 50 });
    yield put(setPerformance(performance));
  } catch (error) {
    yield put(setError(error));
  }
}

function* watchFetchPerformance() {
  yield takeLatest(QuickMatcherActionTypes.FETCH_PERFORMANCE_REQUEST, fetchPerformance);
}

export default function* quickMatcherSagas() {
  yield all([watchFetchGames(), watchFetchPerformance()]);
}

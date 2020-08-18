import { getPerformance } from 'api/services/performanceService';
import { getAllTopGames } from 'api/services/topgameService';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { setError, setPerformance, setTopGames } from './actions';
import { IFetchPerformanceRequestAction, IFetchTopGamesRequestAction, SetupChartTypes } from './actionTypes';

function* fetchTopGames(action: IFetchTopGamesRequestAction) {
  try {
    const { data: topGames } = yield call(getAllTopGames, action.payload);
    yield put(setTopGames(topGames));
  } catch (error) {
    yield put(setError(error));
  }
}

function* watchFetchTopGames() {
  yield takeLatest(SetupChartTypes.FETCH_TOP_GAMES_REQUEST, fetchTopGames);
}

function* fetchPerformanceAnalysis(action: IFetchPerformanceRequestAction) {
  try {
    const performance = yield call(getPerformance, action.payload.setupId, action.payload.gameId);
    yield put(setPerformance(performance));
  } catch (error) {
    yield put(setError(error));
  }
}

function* watchFetchPerformanceAnalysis() {
  yield takeLatest(SetupChartTypes.FETCH_PERFORMANCE_REQUEST, fetchPerformanceAnalysis);
}

export default function* setupChartSagas() {
  yield all([watchFetchTopGames(), watchFetchPerformanceAnalysis()]);
}

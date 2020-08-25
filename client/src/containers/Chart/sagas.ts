import { getAllGames } from 'api/services/gameService';
import { getPerformance } from 'api/services/performanceService';
import { getAllTopGames } from 'api/services/topgameService';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { setError, setGames, setPerformance, setTopGames } from './actions';
import {
  IFetchGamesRequestAction,
  IFetchPerformanceRequestAction,
  IFetchTopGamesRequestAction,
  SetupChartTypes,
} from './actionTypes';

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

function* fetchGames(action: IFetchGamesRequestAction) {
  try {
    const { data: games } = yield call(getAllGames, { name: action.payload.name, from: 0, count: 50 });
    yield put(setGames(games));
  } catch (error) {
    yield put(setError(error));
  }
}

function* watchFetchGames() {
  yield takeLatest(SetupChartTypes.FETCH_GAMES_REQUEST, fetchGames);
}

function* fetchPerformanceAnalysis(action: IFetchPerformanceRequestAction) {
  try {
    const performance = yield call(getPerformance, action.payload);
    yield put(setPerformance(performance));
  } catch (error) {
    yield put(setError(error));
  }
}

function* watchFetchPerformanceAnalysis() {
  yield takeLatest(SetupChartTypes.FETCH_PERFORMANCE_REQUEST, fetchPerformanceAnalysis);
}

export default function* setupChartSagas() {
  yield all([watchFetchTopGames(), watchFetchPerformanceAnalysis(), watchFetchGames()]);
}

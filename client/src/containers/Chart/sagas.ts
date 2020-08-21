import { getAllGames } from 'api/services/gameService';
import { getPerformance } from 'api/services/performanceService';
import { getSetup } from 'api/services/setupService';
import { getAllTopGames } from 'api/services/topgameService';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { setError, setGames, setPerformance, setSetup, setTopGames } from './actions';
import {
  IFetchGamesRequestAction,
  IFetchPerformanceRequestAction,
  IFetchSetupRequestAction,
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
    // const performance = yield call(getPerformance, action.payload.setupId, action.payload.gameId);
    // yield put(setPerformance(performance));
  } catch (error) {
    yield put(setError(error));
  }
}

function* watchFetchPerformanceAnalysis() {
  yield takeLatest(SetupChartTypes.FETCH_PERFORMANCE_REQUEST, fetchPerformanceAnalysis);
}

function* fetchSetup(action: IFetchSetupRequestAction) {
  try {
    const setup = yield call(getSetup, action.payload.id);
    yield put(setSetup(setup));
  } catch (error) {
    yield put(setError(error));
  }
}

function* watchFetchSetup() {
  yield takeLatest(SetupChartTypes.FETCH_SETUP_REQUEST, fetchSetup);
}

export default function* setupChartSagas() {
  yield all([watchFetchTopGames(), watchFetchPerformanceAnalysis(), watchFetchSetup(), watchFetchGames()]);
}

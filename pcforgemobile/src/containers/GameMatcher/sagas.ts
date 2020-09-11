import { call, put, all, takeLeading } from 'redux-saga/effects';
import { getAllCpu, TypeResponseAllCpus } from 'api/services/cpuService';
import { getAllGpu, TypeResponseAllGpus } from 'api/services/gpuService';
import { getAllGames, TypeResponseAllGames } from 'api/services/gameService';
import { setCpus, setError, setGames, setGpus } from './actions';
import { MatcherActionTypes, IFetchGamesRequestAction, IFetchCpusRequestAction, IFetchGpusRequestAction, IFetchSetupPerformance } from './actionTypes';
import { getPerformance } from 'api/services/perfomanceService';

function* fetchGames(action: IFetchGamesRequestAction) {
  try {
    const { data: games } = yield call(getAllGames, { name: action.payload.name, from: 0, count: 15 });
    yield put(setGames(games));
  } catch (err) {
    yield put(setError(err));
  }
}

function* watchFetchGames() {
  yield takeLeading(MatcherActionTypes.FETCH_GAMES, fetchGames)
}

function* fetchCpus(action: IFetchCpusRequestAction) {
  try {
    const { data: cpus } = yield call(getAllCpu, { name: action.payload.name, from: 0, count: 50 });
    yield put(setCpus(cpus));
  } catch (err) {
    yield put(setError(err));
  }
}

function* watchFetchCpus() {
  yield takeLeading(MatcherActionTypes.FETCH_CPUS, fetchCpus)
}

function* fetchGpus(action: IFetchGpusRequestAction) {
  try {
    const { data: gpus } = yield call(getAllGpu, { name: action.payload.name, from: 0, count: 50 });
    yield put(setGpus(gpus));
  } catch (err) {
    yield put(setError(err));
  }
}

function* watchFetchGpus() {
  yield takeLeading(MatcherActionTypes.FETCH_GPUS, fetchGpus)
}

function* fetchSetupPerformance(action: IFetchSetupPerformance) {
  try {
    const data = yield call(getPerformance, action.payload);
    yield put({ type: MatcherActionTypes.FETCH_SETUP_PERFORMANCE_SUCCESS, payload: data });
  } catch(err) {
    yield put(setError(err));
  }
}

function* watchFetchSetupPerformance() {
  yield takeLeading(MatcherActionTypes.FETCH_SETUP_PERFORMANCE, fetchSetupPerformance);
};

export default function* matcherSagas() {
  yield all([
    watchFetchGames(),
    watchFetchCpus(),
    watchFetchGpus(),
    watchFetchSetupPerformance(),
  ]);
}

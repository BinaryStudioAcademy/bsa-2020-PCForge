import { call, put, all, takeLeading } from 'redux-saga/effects';
import { getAllCpu, TypeResponseAllCpus } from 'api/services/cpuService';
import { getAllGpu, TypeResponseAllGpus } from 'api/services/gpuService';
import { getAllGames, TypeResponseAllGames } from 'api/services/gameService';
import { setCpus, setError, setGames, setGpus } from './actions';
import { MatcherActionTypes, IFetchGamesRequestAction, IFetchCpusRequestAction, IFetchGpusRequestAction } from './actionTypes';

function* fetchGames(action: IFetchGamesRequestAction) {
  try {
    const { data: games } = yield call(getAllGames, { name: action.payload.name, from: 0, count: 5 });
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


export default function* matcherSagas() {
  yield all([
    watchFetchGames(),
    watchFetchCpus(),
    watchFetchGpus(),
  ]);
}

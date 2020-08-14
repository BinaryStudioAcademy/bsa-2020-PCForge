import { call, put, all, takeLeading } from 'redux-saga/effects';
import { getAllCpu, TypeResponseAllCpus } from 'api/services/cpuService';
import {
  GET_CPUS,
  IGetCpus,
  GET_CPUS_SUCCESS,
  GET_CPUS_FAILURE,
  IGetGpus,
  GET_GPUS_SUCCESS,
  GET_GPUS_FAILURE,
  GET_GPUS,
  IGetRams,
  GET_RAMS_SUCCESS,
  GET_RAMS_FAILURE,
  GET_RAMS,
  IGetGames,
  GET_GAMES_SUCCESS,
  GET_GAMES_FAILURE,
  GET_GAMES,
} from './actionTypes';
import { TypeFilter } from 'common/models/typeFilterBuilder';
import { getAllGpu, TypeResponseAllGpus } from 'api/services/gpuService';
import { getAllRam, TypeResponseAllRams } from 'api/services/ramService';
import { Game } from 'common/models/game';
import { getAllGames } from 'api/services/gamesService';

export function* getGames(action: IGetGames) {
  try {
    const response: Game[] = yield call<(data: TypeFilter) => void>(getAllGames, action.payload);
    yield put({ type: GET_GAMES_SUCCESS, payload: response });
  } catch (e) {
    yield { type: GET_GAMES_FAILURE, payload: e.message };
  }
}

export function* watchGetGames() {
  yield takeLeading(GET_GAMES, getGames);
}

export function* getCpus(action: IGetCpus) {
  try {
    const response: TypeResponseAllCpus = yield call<(data: TypeFilter) => void>(getAllCpu, action.payload);
    yield put({ type: GET_CPUS_SUCCESS, payload: response });
  } catch (e) {
    yield { type: GET_CPUS_FAILURE, payload: e.message };
  }
}

export function* watchGetCpus() {
  yield takeLeading(GET_CPUS, getCpus);
}

export function* getGpus(action: IGetGpus) {
  try {
    const response: TypeResponseAllGpus = yield call<(data: TypeFilter) => void>(getAllGpu, action.payload);
    yield put({ type: GET_GPUS_SUCCESS, payload: response });
  } catch (e) {
    yield { type: GET_GPUS_FAILURE, payload: e.message };
  }
}

export function* watchGetGpus() {
  yield takeLeading(GET_GPUS, getGpus);
}

export function* getRams(action: IGetRams) {
  try {
    const response: TypeResponseAllRams = yield call<(data: TypeFilter) => void>(getAllRam, action.payload);
    yield put({ type: GET_RAMS_SUCCESS, payload: response });
  } catch (e) {
    yield { type: GET_RAMS_FAILURE, payload: e.message };
  }
}

export function* watchGetRams() {
  yield takeLeading(GET_RAMS, getRams);
}

export default function* cpuSagas() {
  yield all([watchGetGames(), watchGetCpus(), watchGetGpus(), watchGetRams()]);
}

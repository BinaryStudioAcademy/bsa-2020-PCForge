import { call, put, takeEvery, all } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import {
  ADD_CPU_TO_SETUP,
  ADD_GPU_TO_SETUP,
  ADD_MOTHERBOARD_TO_SETUP,
  ADD_POWERSUPPLY_TO_SETUP,
  ADD_RAM_TO_SETUP,
  FETCH_CPU_FAILURE,
  FETCH_CPU_SUCCESS,
  FETCH_GPU_FAILURE,
  FETCH_GPU_SUCCESS,
  FETCH_MOTHERBOARD_FAILURE,
  FETCH_MOTHERBOARD_SUCCESS,
  FETCH_POWERSUPPLY_FAILURE,
  FETCH_POWERSUPPLY_SUCCESS,
  FETCH_RAM_FAILURE,
  FETCH_RAM_SUCCESS,
} from './actionTypes';
import { getCpu } from 'api/services/cpuService';
import { getGpu } from 'api/services/gpuService';
import { getRam } from 'api/services/ramService';
import { getMotherboard } from 'api/services/motherboardService';
import { getPowersupplies } from 'api/services/powersupplyService';

export function* fetchCpu(action: AnyAction) {
  try {
    const cpu = yield call(getCpu, action.payload);
    yield put({ type: FETCH_CPU_SUCCESS, payload: cpu });
  } catch (error) {
    yield put({ type: FETCH_CPU_FAILURE, payload: error.message });
  }
}

function* watchAddCpu() {
  yield takeEvery(ADD_CPU_TO_SETUP, fetchCpu);
}

export function* fetchGpu(action: AnyAction) {
  try {
    const gpu = yield call(getGpu, action.payload);
    yield put({ type: FETCH_GPU_SUCCESS, payload: gpu });
  } catch (error) {
    yield put({ type: FETCH_GPU_FAILURE, payload: error.message });
  }
}

function* watchAddGpu() {
  yield takeEvery(ADD_GPU_TO_SETUP, fetchGpu);
}

export function* fetchRam(action: AnyAction) {
  try {
    const ram = yield call(getRam, action.payload);
    yield put({ type: FETCH_RAM_SUCCESS, payload: ram });
  } catch (error) {
    yield put({ type: FETCH_RAM_FAILURE, payload: error.message });
  }
}

function* watchAddhRam() {
  yield takeEvery(ADD_RAM_TO_SETUP, fetchRam);
}

export function* fetchMotherboard(action: AnyAction) {
  try {
    const motherboard = yield call(getMotherboard, action.payload);
    yield put({ type: FETCH_MOTHERBOARD_SUCCESS, payload: motherboard });
  } catch (error) {
    yield put({ type: FETCH_MOTHERBOARD_FAILURE, payload: error.message });
  }
}

function* watchAddMotherboard() {
  yield takeEvery(ADD_MOTHERBOARD_TO_SETUP, fetchMotherboard);
}

export function* fetchPowersupply(action: AnyAction) {
  try {
    const powersupply = yield call(getPowersupplies, action.payload);
    yield put({ type: FETCH_POWERSUPPLY_SUCCESS, payload: powersupply });
  } catch (error) {
    yield put({ type: FETCH_POWERSUPPLY_FAILURE, payload: error.message });
  }
}

function* watchAddPowersupply() {
  yield takeEvery(ADD_POWERSUPPLY_TO_SETUP, fetchPowersupply);
}

export default function* builderSagas() {
  yield all([watchAddCpu(), watchAddGpu(), watchAddhRam(), watchAddMotherboard(), watchAddPowersupply()]);
}

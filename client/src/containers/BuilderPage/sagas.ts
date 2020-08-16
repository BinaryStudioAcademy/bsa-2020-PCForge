import { call, put, takeEvery, all, select } from 'redux-saga/effects';
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
  INIT_SETUP,
  RESET_SETUP,
  SET_SETUP,
} from './actionTypes';
import { getCpu } from 'api/services/cpuService';
import { getGpu } from 'api/services/gpuService';
import { getRam } from 'api/services/ramService';
import { getMotherboard } from 'api/services/motherboardService';
import { getPowersupplies } from 'api/services/powersupplyService';
import { clearLocalSetup, getLocalSetup, updateLocalSetup } from 'helpers/setupHelper';

export function* fetchCpu(action: AnyAction) {
  try {
    const cpu = yield call(getCpu, action.payload);
    yield put({ type: FETCH_CPU_SUCCESS, payload: cpu });
    const setup = yield select((state) => state.setup);
    yield call(updateLocalSetup, { ...setup, cpu });
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
    const setup = yield select((state) => state.setup);
    yield call(updateLocalSetup, { ...setup, gpu });
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
    const setup = yield select((state) => state.setup);
    yield call(updateLocalSetup, { ...setup, ram });
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
    const setup = yield select((state) => state.setup);
    yield call(updateLocalSetup, { ...setup, motherboard });
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
    const setup = yield select((state) => state.setup);
    yield call(updateLocalSetup, { ...setup, powersupply });
  } catch (error) {
    yield put({ type: FETCH_POWERSUPPLY_FAILURE, payload: error.message });
  }
}

function* watchAddPowersupply() {
  yield takeEvery(ADD_POWERSUPPLY_TO_SETUP, fetchPowersupply);
}

export function* initSetup(action: AnyAction) {
  try {
    const setup = yield call(getLocalSetup);
    yield put({ type: SET_SETUP, payload: setup });
    if (setup.cpu) yield put({ type: ADD_CPU_TO_SETUP, payload: setup.cpu.id });
    if (setup.gpu) yield put({ type: ADD_GPU_TO_SETUP, payload: setup.gpu.id });
    if (setup.ram) yield put({ type: ADD_RAM_TO_SETUP, payload: setup.ram.id });
    if (setup.motherboard) yield put({ type: ADD_MOTHERBOARD_TO_SETUP, payload: setup.motherboard.id });
    if (setup.powersupply) yield put({ type: ADD_POWERSUPPLY_TO_SETUP, payload: setup.powersupply.id });
  } catch (error) {
    // error message
    console.log(error.message);
  }
}

function* watchInitSetup() {
  yield takeEvery(INIT_SETUP, initSetup);
}

export function* resetSetup(action: AnyAction) {
  try {
    yield call(clearLocalSetup);
  } catch (error) {
    // error message
    console.log(error.message);
  }
}

function* watchResetSetup() {
  yield takeEvery(RESET_SETUP, resetSetup);
}

export default function* builderSagas() {
  yield all([
    watchAddCpu(),
    watchAddGpu(),
    watchAddhRam(),
    watchAddMotherboard(),
    watchAddPowersupply(),
    watchInitSetup(),
    watchResetSetup(),
  ]);
}

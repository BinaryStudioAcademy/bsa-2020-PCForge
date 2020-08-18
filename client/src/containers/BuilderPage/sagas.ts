import { call, put, takeEvery, all, select } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import {
  ADD_COMPONENT_TO_SETUP,
  FETCH_COMPONENT_SUCCESS,
  FETCH_COMPONENT_FAILURE,
  INIT_SETUP,
  RESET_SETUP,
  SET_SETUP,
} from './actionTypes';
import { getCpu } from 'api/services/cpuService';
import { getGpu } from 'api/services/gpuService';
import { getRam } from 'api/services/ramService';
import { getMotherboard } from 'api/services/motherboardService';
import { getPowersupplies } from 'api/services/powersupplyService';
import { clearLocalSetup, getLocalSetup, setLocalSetup } from 'helpers/setupHelper';
import { Group } from './config';

const servicesGet = {
  [Group.cpu]: getCpu,
  [Group.gpu]: getGpu,
  [Group.ram]: getRam,
  [Group.motherboard]: getMotherboard,
  [Group.powersupply]: getPowersupplies,
};

export function* fetchComponent(action: AnyAction) {
  try {
    const component = yield call(servicesGet[action.payload.group as Group], action.payload.id);
    yield put({ type: FETCH_COMPONENT_SUCCESS, payload: { group: action.payload.group, component } });
    const setup = yield select((state) => state.setup);
    yield call(setLocalSetup, { ...setup, [action.payload.group]: component });
  } catch (error) {
    yield put({ type: FETCH_COMPONENT_FAILURE, payload: { group: action.payload.group, message: error.message } });
  }
}

function* watchAddComponent() {
  yield takeEvery(ADD_COMPONENT_TO_SETUP, fetchComponent);
}

export function* initSetup(action: AnyAction) {
  try {
    const setup = yield call(getLocalSetup);
    yield put({ type: SET_SETUP, payload: setup });
    for (const group in setup) {
      if (setup[group]) yield put({ type: ADD_COMPONENT_TO_SETUP, payload: { group, id: setup[group].id } });
    }
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
    watchAddComponent(),
    watchInitSetup(),
    watchResetSetup(),
  ]);
}

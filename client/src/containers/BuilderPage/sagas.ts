import { call, put, takeEvery, all, select } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import {
  ADD_COMPONENT_TO_SETUP,
  FETCH_COMPONENT_SUCCESS,
  FETCH_COMPONENT_FAILURE,
  BUILDER_INIT_SETUP,
  BUILDER_RESET_SETUP,
  BUILDER_SET_SETUP,
  REMOVE_COMPONENT_FROM_SETUP,
  SAVE_SETUP_REQUEST,
} from 'containers/BuilderPage/actionTypes';
import { getCpu } from 'api/services/cpuService';
import { getGpu } from 'api/services/gpuService';
import { getRam } from 'api/services/ramService';
import { getMotherboard } from 'api/services/motherboardService';
import { getPowersupplies } from 'api/services/powersupplyService';
import { clearLocalSetup, getLocalSetup, setLocalSetup } from 'helpers/setupHelper';
import { Group } from './config';
import { uploadImage } from 'api/services/imageService';
import { createSetup } from 'api/services/setup.service';

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
    if (setup) {
      yield put({ type: BUILDER_SET_SETUP, payload: setup });
      for (const group in setup) {
        if (setup[group]) yield put({ type: ADD_COMPONENT_TO_SETUP, payload: { group, id: setup[group].id } });
      }
    }
  } catch (error) {
    // error message
    console.log(error.message);
  }
}

function* watchInitSetup() {
  yield takeEvery(BUILDER_INIT_SETUP, initSetup);
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
  yield takeEvery(BUILDER_RESET_SETUP, resetSetup);
}

export function* removeComponent(action: AnyAction) {
  const setup = yield select((state) => state.setup);
  yield call(setLocalSetup, { ...setup, [action.payload.group]: null });
}

function* watchRemoveSetup() {
  yield takeEvery(REMOVE_COMPONENT_FROM_SETUP, removeComponent);
}

export function* saveSetup(action: AnyAction) {
  try {
    const data = action.payload.data;
    data.image = yield call(uploadImage, action.payload.image);
    const savedSetup = yield call(createSetup, data);
  } catch (error) {
    console.log(error);
  }
}

function* watchSaveSetup() {
  yield takeEvery(SAVE_SETUP_REQUEST, saveSetup);
}

export default function* builderSagas() {
  yield all([watchAddComponent(), watchInitSetup(), watchResetSetup(), watchRemoveSetup(), watchSaveSetup()]);
}

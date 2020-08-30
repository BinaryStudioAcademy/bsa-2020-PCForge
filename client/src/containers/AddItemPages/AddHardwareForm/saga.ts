import { call, put, all, takeLatest, takeEvery } from 'redux-saga/effects';
import { TypeSocket } from 'common/models/typeSocket';
import { TypeRamType } from 'common/models/typeRamType';
import { TypeRam } from 'common/models/typeRam';
import { postCpu } from 'api/services/cpuService';
import { postGpu } from 'api/services/gpuService';
import { postMotherBoard } from 'api/services/motherboardService';
import { postPowerSupply } from 'api/services/powersupplyService';
import { getAllRam, postRam, TypeResponseAllRams } from 'api/services/ramService';
import { getAllRamType, TypeResponseAll as TypeResponseAllRamType } from 'api/services/ramTypeService';
import { getAllSocket, TypeResponseAll as TypeResponseAllSocket } from 'api/services/socketService';
import { SelectOption } from 'components/BasicComponents/InputBasedSelect';
import { FilterModel } from 'common/models/filter.model';
import { HardwareFields } from 'common/enums/AdminTools/HardwareFields';
import * as notification from 'common/services/notificationService';

import {
  loadError,
  loadAllSelectsInitialValuesMotherBoard,
  loadAllSelectsInitialValuesRAM,
  loadAllSelectsInitialValuesCPU,
  loadCreatedHardware,
} from './actions';
import {
  HardwareFormActionTypes,
  IUploadMoreItemsAction,
  ICreatePowerSupplyAction,
  ICreateMotherboardAction,
  ICreateRAMAction,
  ICreateCPUAction,
  ICreateGPUAction,
} from './actionsTypes';

// get initials values
function* getInitialValuesMotherBoard() {
  try {
    console.log('MB');
    const { data: sockets } = yield call(getAllSocket, {});
    const socketList: SelectOption[] = sockets.map((item: TypeSocket) => {
      return { value: item.id, label: item.name };
    });

    const { data: rams } = yield call(getAllRam, {});
    const RAMList: SelectOption[] = rams.map((item: TypeRam) => {
      return { value: item.id, label: item.name };
    });

    yield put(loadAllSelectsInitialValuesMotherBoard(socketList, RAMList));
  } catch (error) {
    yield put(loadError(error.message));
  }
}
function* watchGetInitialValuesMotherBoard() {
  yield takeEvery(HardwareFormActionTypes.GET_INITIAL_VALUES_MOTHERBOARD_ACTION, getInitialValuesMotherBoard);
}

function* getInitialValuesRAM() {
  try {
    const { data: ramTypes } = yield call(getAllRamType, {});
    const RAMtypeList: SelectOption[] = ramTypes.map((item: TypeRamType) => {
      return { value: item.id, label: item.name };
    });
    yield put(loadAllSelectsInitialValuesRAM(RAMtypeList));
  } catch (error) {
    yield put(loadError(error.message));
  }
}
function* watchGetInitialValuesRAM() {
  yield takeEvery(HardwareFormActionTypes.GET_INITIAL_VALUES_RAM_ACTION, getInitialValuesRAM);
}

function* getInitialValuesCPU() {
  try {
    const { data: sockets } = yield call(getAllSocket, {});
    const socketList: SelectOption[] = sockets.map((item: TypeSocket) => {
      return { value: item.id, label: item.name };
    });
    yield put(loadAllSelectsInitialValuesCPU(socketList));
  } catch (error) {
    yield put(loadError(error.message));
  }
}
function* watchGetInitialValuesCPU() {
  yield takeEvery(HardwareFormActionTypes.GET_INITIAL_VALUES_CPU_ACTION, getInitialValuesCPU);
}

// create new hardware
function* createPowerSupply(action: ICreatePowerSupplyAction) {
  try {
    const powerSupplyNew = yield call(postPowerSupply, action.payload.powerSupply);
    console.log(powerSupplyNew);
    notification.success(`New Power supply has been created`);
    yield put(loadCreatedHardware(powerSupplyNew.name));
  } catch (error) {
    notification.error(error);
    yield put(loadError(error.message));
  }
}
function* watchCreatePowerSupply() {
  yield takeEvery(HardwareFormActionTypes.CREATE_NEW_POWERSUPPLY_ACTION, createPowerSupply);
}

function* createMotherBoard(action: ICreateMotherboardAction) {
  try {
    const motherBoardNew = yield call(postMotherBoard, action.payload.motherboard);
    console.log(motherBoardNew);
    notification.success(`New Motherboard has been created`);
    yield put(loadCreatedHardware(motherBoardNew.name));
  } catch (error) {
    notification.error(error);
    yield put(loadError(error.message));
  }
}
function* watchCreateMotherBoard() {
  yield takeEvery(HardwareFormActionTypes.CREATE_NEW_MOTHERBOARD_ACTION, createMotherBoard);
}

function* createRAM(action: ICreateRAMAction) {
  try {
    const ramNew = yield call(postRam, action.payload.ram);
    console.log(ramNew);
    notification.success(`New RAM has been created`);
    yield put(loadCreatedHardware(ramNew.name));
  } catch (error) {
    notification.error(error);
    yield put(loadError(error.message));
  }
}
function* watchCreateRAM() {
  yield takeEvery(HardwareFormActionTypes.CREATE_NEW_RAM_ACTION, createRAM);
}

function* createCPU(action: ICreateCPUAction) {
  try {
    const cpuNew = yield call(postCpu, action.payload.cpu);
    console.log(cpuNew);
    notification.success(`New CPU has been created`);
    yield put(loadCreatedHardware(cpuNew.name));
  } catch (error) {
    notification.error(error);
    yield put(loadError(error.message));
  }
}
function* watchCreateCPU() {
  yield takeEvery(HardwareFormActionTypes.CREATE_NEW_CPU_ACTION, createCPU);
}

function* createGPU(action: ICreateGPUAction) {
  try {
    const gpuNew = yield call(postGpu, action.payload.gpu);
    console.log(gpuNew);
    notification.success(`New GPU has been created`);
    yield put(loadCreatedHardware(gpuNew.name));
  } catch (error) {
    notification.error(error);
    yield put(loadError(error.message));
  }
}
function* watchCreateGPU() {
  yield takeEvery(HardwareFormActionTypes.CREATE_NEW_GPU_ACTION, createGPU);
}

// upload new values
function* uploadMoreItems(action: IUploadMoreItemsAction) {
  try {
    console.log('upload SAGA');
    const filter: FilterModel = {
      name: action.payload.name,
      count: 20,
      from: action.payload.offset,
    };
    const { typeHardware, typeAction } = action.payload;
    let response: TypeResponseAllRams | TypeResponseAllSocket | TypeResponseAllRamType = {
      meta: { globalCount: 0, countAfterFiltering: 0 },
      data: [],
    };
    let valuesList: SelectOption[] = [];
    switch (typeHardware) {
      case HardwareFields.socket: {
        const response = yield call(getAllSocket, filter);
        break;
      }
      case HardwareFields.ram: {
        response = yield call(getAllRam, filter);
        break;
      }
      case HardwareFields.typeRam: {
        response = yield call(getAllRamType, filter);
        break;
      }
    }
    valuesList = (response.data as Array<TypeSocket | TypeRam | TypeRamType>).map(
      (item: TypeSocket | TypeRam | TypeRamType) => {
        return { value: item.id, label: item.name };
      }
    );
    yield put({ type: typeAction, payload: { valuesList } });
  } catch (error) {
    yield put(loadError(error.message));
  }
}
function* watchUploadMoreItems() {
  yield takeEvery(HardwareFormActionTypes.UPLOAD_MORE_VALUES, uploadMoreItems);
}

export default function* hardwareFormSagas() {
  yield all([
    watchGetInitialValuesMotherBoard(),
    watchGetInitialValuesRAM(),
    watchGetInitialValuesCPU(),
    watchUploadMoreItems(),
    watchCreatePowerSupply(),
    watchCreateMotherBoard(),
    watchCreateRAM(),
    watchCreateCPU(),
    watchCreateGPU(),
  ]);
}

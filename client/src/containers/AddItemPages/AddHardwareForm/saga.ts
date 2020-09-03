import { call, put, all, takeLatest, takeEvery } from 'redux-saga/effects';
import { TypeSocket } from 'common/models/typeSocket';
import { TypeRamType } from 'common/models/typeRamType';
import { TypeRam } from 'common/models/typeRam';
import { postCpu } from 'api/services/cpuService';
import { postGpu } from 'api/services/gpuService';
import { postMotherBoard } from 'api/services/motherboardService';
import { postPowerSupply } from 'api/services/powersupplyService';
import { postSsd } from 'api/services/ssdService';
import { postHdd } from 'api/services/hddService';
import { getAllRam, postRam, TypeResponseAllRams } from 'api/services/ramService';
import { getAllRamType, TypeResponseAll as TypeResponseAllRamType } from 'api/services/ramTypeService';
import { getAllSocket, TypeResponseAll as TypeResponseAllSocket } from 'api/services/socketService';
import { SelectOption } from 'components/BasicComponents/InputBasedSelect';
import { FilterModel } from 'common/models/filter.model';
import { HardwareFields } from 'common/enums/AdminTools/HardwareFields';

import {
  loadError,
  loadAllSelectsInitialValuesMotherBoard,
  loadAllSelectsInitialValuesRAM,
  loadAllSelectsInitialValuesCPU,
  loadCreatedHardware,
  updateStateToInitSuccess,
} from './actions';
import {
  HardwareFormActionTypes,
  IUploadMoreItemsAction,
  ICreatePowerSupplyAction,
  ICreateMotherboardAction,
  ICreateRAMAction,
  ICreateCPUAction,
  ICreateGPUAction,
  ICreateSSDAction,
  ICreateHDDAction,
} from './actionsTypes';

// get initials values
function* getInitialValues() {
  yield put(updateStateToInitSuccess('', ''));
}
function* watchGetInitialValues() {
  yield takeEvery(HardwareFormActionTypes.UPDATE_STATE_TO_INIT_ACTION, getInitialValues);
}

function* getInitialValuesMotherBoard() {
  try {
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
    //notification.success(`New Power supply has been created`);
    yield put(loadCreatedHardware(powerSupplyNew.name));
  } catch (error) {
    //notification.error(error);
    yield put(loadError(error.message));
  }
}
function* watchCreatePowerSupply() {
  yield takeEvery(HardwareFormActionTypes.CREATE_NEW_POWERSUPPLY_ACTION, createPowerSupply);
}

function* createMotherBoard(action: ICreateMotherboardAction) {
  try {
    const motherBoardNew = yield call(postMotherBoard, action.payload.motherboard);
    yield put(loadCreatedHardware(motherBoardNew.name));
  } catch (error) {
    yield put(loadError(error.message));
  }
}
function* watchCreateMotherBoard() {
  yield takeEvery(HardwareFormActionTypes.CREATE_NEW_MOTHERBOARD_ACTION, createMotherBoard);
}

function* createRAM(action: ICreateRAMAction) {
  try {
    const ramNew = yield call(postRam, action.payload.ram);
    yield put(loadCreatedHardware(ramNew.name));
  } catch (error) {
    yield put(loadError(error.message));
  }
}
function* watchCreateRAM() {
  yield takeEvery(HardwareFormActionTypes.CREATE_NEW_RAM_ACTION, createRAM);
}

function* createCPU(action: ICreateCPUAction) {
  try {
    const cpuNew = yield call(postCpu, action.payload.cpu);
    yield put(loadCreatedHardware(cpuNew.name));
  } catch (error) {
    yield put(loadError(error.message));
  }
}
function* watchCreateCPU() {
  yield takeEvery(HardwareFormActionTypes.CREATE_NEW_CPU_ACTION, createCPU);
}

function* createGPU(action: ICreateGPUAction) {
  try {
    const gpuNew = yield call(postGpu, action.payload.gpu);
    yield put(loadCreatedHardware(gpuNew.name));
  } catch (error) {
    yield put(loadError(error.message));
  }
}
function* watchCreateGPU() {
  yield takeEvery(HardwareFormActionTypes.CREATE_NEW_GPU_ACTION, createGPU);
}

function* createSSD(action: ICreateSSDAction) {
  try {
    const ssd = yield call(postSsd, action.payload.ssd);
    yield put(loadCreatedHardware(ssd.name));
  } catch (error) {
    yield put(loadError(error.message));
  }
}
function* watchCreateSSD() {
  yield takeEvery(HardwareFormActionTypes.CREATE_NEW_SSD_ACTION, createSSD);
}

function* createHDD(action: ICreateHDDAction) {
  try {
    const hdd = yield call(postHdd, action.payload.hdd);
    yield put(loadCreatedHardware(hdd.name));
  } catch (error) {
    yield put(loadError(error.message));
  }
}
function* watchCreateHDD() {
  yield takeEvery(HardwareFormActionTypes.CREATE_NEW_HDD_ACTION, createHDD);
}

// upload new values
function* uploadMoreItems(action: IUploadMoreItemsAction) {
  try {
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
        response = yield call(getAllSocket, filter);
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
    watchCreateSSD(),
    watchCreateHDD(),
    watchGetInitialValues(),
  ]);
}

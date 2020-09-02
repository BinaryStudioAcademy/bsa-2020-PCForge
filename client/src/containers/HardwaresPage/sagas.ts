import {
  IGetHardwares,
  HARDWARES_GET_HARDWARES,
  HARDWARES_GET_HARDWARES_SUCESS,
  HARDWARES_GET_HARDWARES_FAILURE,
} from './actionTypes';
import { ReactText } from 'react';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { getAllCpu } from 'api/services/cpuService';
import { getAllGpu } from 'api/services/gpuService';
import { getAllRam } from 'api/services/ramService';
import { getAllHdd } from 'api/services/hddService';
import { getAllPowersupplies } from 'api/services/powersupplyService';
import { getAllMotherboard } from 'api/services/motherboardService';
import { getAllSsd } from 'api/services/ssdService';

function* getHardwares(action: IGetHardwares) {
  const { type, count, from } = action.payload;
  let response: {
    meta: {
      globalCount: number;
      countAfterFiltering: number;
    };
    data: Record<string, ReactText>[];
  } | null = null;
  const query = { count, from };
  try {
    switch (type) {
      case 'cpu':
        response = yield call(getAllCpu, query);
        break;
      case 'gpu':
        response = yield call(getAllGpu, query);
        break;
      case 'ram':
        response = yield call(getAllRam, query);
        break;
      case 'hdd':
        response = yield call(getAllHdd, query);
        break;
      case 'powersupply':
        response = yield call(getAllPowersupplies, query);
        console.log('powerSupplies', response);
        break;
      case 'motherboard':
        response = yield call(getAllMotherboard, query);
        console.log('motherboards', response);
        break;
      case 'ssd':
        response = yield call(getAllSsd, query);
        break;
      default:
        throw new Error();
    }
    console.log(response);
    const payload = {
      hardwares: response?.data || [],
      totalItemsCount: response?.meta.countAfterFiltering || 0,
    };
    yield put({ type: HARDWARES_GET_HARDWARES_SUCESS, payload });
  } catch (e) {
    yield put({ type: HARDWARES_GET_HARDWARES_FAILURE, payload: { message: 'Failed to load hardwares' } });
  }
}

function* watchGetHardwares() {
  yield takeLatest(HARDWARES_GET_HARDWARES, getHardwares);
}

export default function* hardwaresSagas() {
  yield all([watchGetHardwares()]);
}

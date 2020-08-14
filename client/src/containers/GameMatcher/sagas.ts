import { call, put, all, takeLeading } from 'redux-saga/effects';
import { getAllCpu, TypeResponseAllCpus } from 'api/services/cpuService';
import { GET_CPUS, IGetCpus, GET_CPUS_SUCCESS, GET_CPUS_FAILURE, IGetGpus, GET_GPUS_SUCCESS, GET_GPUS_FAILURE, GET_GPUS, IGetRams, GET_RAMS_SUCCESS, GET_RAMS_FAILURE, GET_RAMS } from './actionTypes';
import { TypeFilter } from 'common/models/typeFilterBuilder';
import { getAllGpu, TypeResponseAllGpus } from 'api/services/gpuService';
import { getAllRam } from 'api/services/ramService';

export function* getCpus(action: IGetCpus) {
  try {
    const response: TypeResponseAllCpus = yield call<((data: TypeFilter) => void)>(getAllCpu, action.payload);
    yield put({ type: GET_CPUS_SUCCESS, payload: response });
  } catch (e) {
    yield({ type: GET_CPUS_FAILURE, payload: e.message })
  }
}

export function* watchGetCpus() {
  yield takeLeading(GET_CPUS, getCpus);
}

export function* getGpus(action: IGetGpus) {
  try {
    const response: TypeResponseAllGpus = yield call<((data: TypeFilter) => void)>(getAllGpu, action.payload);
    yield put({ type: GET_GPUS_SUCCESS, payload: response });
  } catch (e) {
    yield({ type: GET_GPUS_FAILURE, payload: e.message })
  }
}

export function* watchGetGpus() {
  yield takeLeading(GET_GPUS, getGpus);
}

export function* getRams(action: IGetRams) {
  try {
    const response: TypeResponseAllGpus = yield call<((data: TypeFilter) => void)>(getAllRam, action.payload);
    console.log(response);
    yield put({ type: GET_RAMS_SUCCESS, payload: response });
  } catch (e) {
    yield({ type: GET_RAMS_FAILURE, payload: e.message })
  }
}

export function* watchGetRams() {
  yield takeLeading(GET_RAMS, getRams);
}



export default function* cpuSagas(){
  yield all([
    watchGetCpus(),
    watchGetGpus(),
    watchGetRams()
  ])
}

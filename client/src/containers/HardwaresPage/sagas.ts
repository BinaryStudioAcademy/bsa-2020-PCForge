import { IGetHardwares } from './actionTypes';
import { hardwareTypes } from './HardwareSidebarView/actionTypes';
import { ReactText } from 'react';
import { call } from 'redux-saga/effects';
import { getAllCpu } from 'api/services/cpuService';
import { getAllGpu } from 'api/services/gpuService';

function* getHardwares(action: IGetHardwares) {
  const { type, count, from } = action.payload;
  let hardware: Record<string, ReactText> | Record<string, Record<string, ReactText>>[] | null = null;
  const query = { count, from };
  switch (type) {
    case 'cpu':
      hardware = yield call(getAllCpu, query);
    case 'gpu':
      hardware = yield call(getAllGpu, query);
    case 'gpu':
      hardware = yield call(getAllGpu, query);
    case 'gpu':
      hardware = yield call(getAllGpu, query);
  }
}

import { call, put, all, takeLeading } from 'redux-saga/effects';
import { getAllCpu, TypeResponseAllCpus } from 'api/services/cpuService';
import {
  MATCHER_GET_DATA,
  IMatcherGetData,
  MATCHER_GET_DATA_FAILURE,
  IMatcherGetSetupData,
  MATCHER_REPLACE_SETUPS,
  MATCHER_GET_SETUPS,
  MATCHER_GET_MORE_SETUPS,
  IMatcherGetMoreSetups,
  MATCHER_ADD_SETUPS,
} from './actionTypes';
import { getAllGpu, TypeResponseAllGpus } from 'api/services/gpuService';
import { getAllGames, TypeResponseAllGames } from 'api/services/gamesService';
import { FilterModel } from 'common/models/filter.model';
import { AlertType } from 'components/BasicComponents/Alert';
import { getAllSetups } from 'api/services/setupsService';

export function* getMatcherData(action: IMatcherGetData) {
  try {
    const { variant, type } = action.payload;
    const filter: FilterModel = {
      name: action.payload.name,
      count: 20,
      from: action.payload.offset,
    };

    let response: TypeResponseAllCpus | TypeResponseAllGpus | TypeResponseAllGames = null!;

    if (variant === 'cpus') {
      response = yield call(getAllCpu, filter);
    }
    if (variant === 'gpus') {
      response = yield call(getAllGpu, filter);
    }
    if (variant === 'games') {
      response = yield call(getAllGames, filter);
    }

    yield put({ type, payload: response.data });
  } catch (e) {
    yield put({
      type: MATCHER_GET_DATA_FAILURE,
      payload: {
        message: 'Failed to fetch',
        type: AlertType.error,
      },
    });
  }
}

function* watchGetMatcherData() {
  yield takeLeading(MATCHER_GET_DATA, getMatcherData);
}

export function* getMatcherSetupsData(action: IMatcherGetSetupData) {
  try {
    const { data: setups } = yield call(getAllSetups, {
      count: 20,
      ...action.payload,
    });
    yield put({ type: MATCHER_REPLACE_SETUPS, payload: setups });
  } catch (e) {
    yield put({
      type: MATCHER_GET_DATA_FAILURE,
      payload: {
        message: 'Failed to fetch',
        type: AlertType.error,
      },
    });
  }
}

function* watchGetMatcherSetupsData() {
  yield takeLeading(MATCHER_GET_SETUPS, getMatcherSetupsData);
}

export function* getMatcherMoreSetupsData(action: IMatcherGetMoreSetups) {
  try {
    const { data: setups } = yield call(getAllSetups, {
      count: 20,
      ...action.payload,
    });
    yield put({ type: MATCHER_ADD_SETUPS, payload: setups });
  } catch (e) {
    yield put({
      type: MATCHER_GET_DATA_FAILURE,
      payload: {
        message: 'Failed to fetch',
        type: AlertType.error,
      },
    });
  }
}

function* watchGetMatcherMoreSetupsData() {
  yield takeLeading(MATCHER_GET_MORE_SETUPS, getMatcherMoreSetupsData);
}

export default function* matcherSagas() {
  yield all([watchGetMatcherData(), watchGetMatcherSetupsData(), watchGetMatcherMoreSetupsData()]);
}

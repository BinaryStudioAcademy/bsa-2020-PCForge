import { call, put, all, takeLeading } from 'redux-saga/effects';
import { getAllCpu, TypeResponseAllCpus } from 'api/services/cpuService';
import { MATCHER_GET_DATA, IMatcherGetData, MATCHER_GET_DATA_FAILURE } from './actionTypes';
import { getAllGpu, TypeResponseAllGpus } from 'api/services/gpuService';
import { getAllRam, TypeResponseAllRams } from 'api/services/ramService';
import { getAllGames, TypeResponseAllGames } from 'api/services/gamesService';
import { FilterModel } from 'common/models/filter.model';
import { AlertType } from 'components/BasicComponents/Alert';

export function* getMatcherData(action: IMatcherGetData) {
  try {
    const { variant, type } = action.payload;
    const filter: FilterModel = {
      name: action.payload.name,
      count: 20,
      from: action.payload.offset,
    };

    let response: TypeResponseAllCpus | TypeResponseAllGpus | TypeResponseAllGames | TypeResponseAllRams = null!;

    if (variant === 'cpus') {
      response = yield call(getAllCpu, filter);
    }
    if (variant === 'gpus') {
      response = yield call(getAllGpu, filter);
    }
    if (variant === 'games') {
      response = yield call(getAllGames, filter);
    }
    if (variant === 'rams') {
      response = yield call(getAllRam, filter);
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

export default function* cpuSagas() {
  yield all([watchGetMatcherData()]);
}

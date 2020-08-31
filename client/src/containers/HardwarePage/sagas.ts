import { all, put, takeEvery, call } from 'redux-saga/effects';
import {
  IGetHardware,
  GET_HARDWARE_FAILURE,
  GET_HARDWARE,
  IGetComments,
  GET_HARDWARE_COMMENTS_SUCCESS,
  GET_HARDWARE_COMMENTS,
  ICreateHardwareComment,
  CREATE_HARDWARE_COMMENT_FAILURE,
  CREATE_HARDWARE_COMMENT,
  IGetHardwareRate,
  GET_HARDWARE_RATE_SUCCESS,
  GET_HARDWARE_RATE,
  ISetHardwareRate,
  SET_HARDWARE_RATE_SUCCESS,
  SET_HARDWARE_RATE_FAILURE,
  SET_HARDWARE_RATE,
  GET_HARDWARE_SUCCESS,
  CREATE_HARDWARE_COMMENT_SUCCESS,
} from './actionTypes';
import { getGpu } from 'api/services/gpuService';
import { getCpu } from 'api/services/cpuService';
import { getRam } from 'api/services/ramService';
import { getMotherboard } from 'api/services/motherboardService';
import { getPowersupplies } from 'api/services/powersupplyService';
import { CommentFilter } from 'common/models/filter.model';
import { getAllComments, createComment } from 'api/services/comment.service';
import { GET_HARDWARE_COMMENTS_FAILURE } from 'containers/HardwarePage/actionTypes';
import { CommentCreationAttributes } from 'common/models/comment';
import { getAverageRate, addRate } from 'api/services/rate.service';
import { RateCreationAttributes } from 'common/models/rate.model';

function* getHardware(action: IGetHardware) {
  const id = action.payload.id;
  let data: Record<string, string> = null!;
  try {
    switch (action.payload.type) {
      case 'cpu': {
        data = yield call(getCpu, id);
        break;
      }
      case 'gpu': {
        data = yield call(getGpu, id);
        break;
      }
      case 'ram': {
        data = yield call(getRam, id);
        console.log('saga data', data);
        break;
      }
      case 'motherboard': {
        data = yield call(getMotherboard, id);
        break;
      }
      case 'powersupply': {
        data = yield call(getPowersupplies, id);
        break;
      }
      default:
        throw new Error('Not found');
    }
    yield put({ type: GET_HARDWARE_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: GET_HARDWARE_FAILURE });
  }
}

export function* watchGetHardware() {
  yield takeEvery(GET_HARDWARE, getHardware);
}

function* getHardwareComments(action: IGetComments) {
  try {
    const filter: CommentFilter = {
      commentableId: action.payload.id,
      commentableType: action.payload.type,
      from: action.payload.from,
      count: action.payload.count,
    };
    const comments: Comment[] = yield call(getAllComments, filter);
    yield put({ type: GET_HARDWARE_COMMENTS_SUCCESS, payload: comments });
  } catch (e) {
    yield put({
      type: GET_HARDWARE_COMMENTS_FAILURE,
      payload: {
        message: 'Failed to load comments',
      },
    });
  }
}

function* watchGetHardwareComments() {
  yield takeEvery(GET_HARDWARE_COMMENTS, getHardwareComments);
}

function* createHardwareComment(action: ICreateHardwareComment) {
  try {
    const commentData: CommentCreationAttributes = {
      commentableType: action.payload.type,
      commentableId: action.payload.id,
      value: action.payload.value,
    };
    yield call(createComment, commentData);
    yield put({ type: CREATE_HARDWARE_COMMENT_SUCCESS });
    yield put({
      type: GET_HARDWARE_COMMENTS,
      payload: {
        id: action.payload.id,
        type: action.payload.type,
      },
    });
  } catch (e) {
    yield put({
      type: CREATE_HARDWARE_COMMENT_FAILURE,
      payload: {
        message: 'Failed to add setup rate',
      },
    });
  }
}

function* watchCreateHardwareComment() {
  yield takeEvery(CREATE_HARDWARE_COMMENT, createHardwareComment);
}

function* getHardwareRate(action: IGetHardwareRate) {
  try {
    const response: { average: number } = yield call(getAverageRate, {
      ratebleId: action.payload.id,
      ratebleType: action.payload.type,
    });
    yield put({ type: GET_HARDWARE_RATE_SUCCESS, payload: response });
  } catch (e) {
    yield put({
      type: GET_HARDWARE_RATE_SUCCESS,
      payload: {
        message: 'Failed to get setup rate',
      },
    });
  }
}

function* watchGetHardwareRate() {
  yield takeEvery(GET_HARDWARE_RATE, getHardwareRate);
}

function* addHardwareRate(action: ISetHardwareRate) {
  try {
    const data: RateCreationAttributes = {
      ratebleId: action.payload.id,
      ratebleType: action.payload.type,
      value: action.payload.value,
    };
    const response = yield call(addRate, data);
    yield put({ type: SET_HARDWARE_RATE_SUCCESS, payload: response });
  } catch (e) {
    yield put({
      type: SET_HARDWARE_RATE_FAILURE,
      payload: {
        message: 'Failed to add setup rate',
      },
    });
  }
}

function* watchAddHardwareRate() {
  yield takeEvery(SET_HARDWARE_RATE, addHardwareRate);
}

export default function* hardwareSagas() {
  yield all([
    watchGetHardware(),
    watchGetHardwareComments(),
    watchCreateHardwareComment(),
    watchGetHardwareRate(),
    watchAddHardwareRate(),
  ]);
}

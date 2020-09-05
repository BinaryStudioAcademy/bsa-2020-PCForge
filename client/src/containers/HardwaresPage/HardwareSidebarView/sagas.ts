import { all, put, takeEvery, call, takeLeading } from 'redux-saga/effects';
import {
  IGetComments,
  GET_HARDWARE_COMMENTS_SUCCESS,
  GET_HARDWARE_COMMENTS,
  ICreateHardwareComment,
  CREATE_HARDWARE_COMMENT,
  IGetHardwareRate,
  GET_HARDWARE_RATE_SUCCESS,
  GET_HARDWARE_RATE,
  ISetHardwareRate,
  SET_HARDWARE_RATE_SUCCESS,
  SET_HARDWARE_RATE,
  CREATE_HARDWARE_COMMENT_SUCCESS,
} from './actionTypes';
import { CommentFilter } from 'common/models/filter.model';
import { getAllComments, createComment } from 'api/services/comment.service';
import { CommentCreationAttributes } from 'common/models/comment';
import { getAverageRate, addRate } from 'api/services/rate.service';
import { RateCreationAttributes } from 'common/models/rate.model';
import * as notification from 'common/services/notificationService';

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
    notification.error(e.message || 'Failed to load comments' )
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
    notification.error(e.message || 'Failed to add hardware rate');
  }
}

function* watchCreateHardwareComment() {
  yield takeLeading(CREATE_HARDWARE_COMMENT, createHardwareComment);
}

function* getHardwareRate(action: IGetHardwareRate) {
  try {
    const response: { average: number } = yield call(getAverageRate, {
      ratebleId: action.payload.id,
      ratebleType: action.payload.type,
    });
    yield put({ type: GET_HARDWARE_RATE_SUCCESS, payload: response });
  } catch (e) {
    notification.error(e.message || 'Failed to get hardware rate')
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
    notification.error(e.message || 'Failed to add hardware rate')
  }
}

function* watchAddHardwareRate() {
  yield takeLeading(SET_HARDWARE_RATE, addHardwareRate);
}

export default function* hardwareSagas() {
  yield all([
    watchGetHardwareComments(),
    watchCreateHardwareComment(),
    watchGetHardwareRate(),
    watchAddHardwareRate()
  ]);
}

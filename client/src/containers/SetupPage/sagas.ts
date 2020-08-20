import { call, put, takeEvery, all } from 'redux-saga/effects';
import {
  GET_SETUP,
  IGetSetup,
  GET_SETUP_SUCCESS,
  IGetComments,
  GET_SETUP_COMMENTS,
  GET_SETUP_COMMENTS_SUCCESS,
  CREATE_SETUP_COMMENT,
  ICreateSetupComment,
  IGetSetupRate,
  GET_SETUP_RATE,
  GET_SETUP_RATE_SUCCESS,
  ISetSetupRate,
  SET_SETUP_RATE_SUCCESS,
  SET_SETUP_RATE,
} from './actionTypes';
import { getSetupById } from 'api/services/setups.service';
import { PCSetup } from 'common/models/setup';
import { getAllComments, createComment } from 'api/services/comment.service';
import { Comment, CommentCreationAttributes } from 'common/models/comment';
import { CommentFilter } from 'common/models/filter.model';
import { getToken } from 'helpers/tokenHelper';
import { getAverageRate, addRate } from 'api/services/rate.service';
import { RateCreationAttributes } from 'common/models/rate.model';

function* getSetup(action: IGetSetup) {
  try {
    const setup: PCSetup = yield call<(id: number) => void>(getSetupById, action.payload.id);
    yield put({ type: GET_SETUP_SUCCESS, payload: setup });
  } catch (e) {
    console.log(e);
  }
}

function* watchGetSetup() {
  yield takeEvery(GET_SETUP, getSetup);
}

function* getSetupComments(action: IGetComments) {
  try {
    const filter: CommentFilter = { commentableId: action.payload.id, commentableType: 'setup', from: 0, count: 100 };
    const comments: Comment[] = yield call(getAllComments, filter);
    yield put({ type: GET_SETUP_COMMENTS_SUCCESS, payload: comments });
  } catch (e) {
    console.log(e);
  }
}

function* watchGetSetupComments() {
  yield takeEvery(GET_SETUP_COMMENTS, getSetupComments);
}

function* createSetupComment(action: ICreateSetupComment) {
  try {
    const token: string = yield call(getToken);
    const commentData: CommentCreationAttributes = {
      commentableType: 'setup',
      commentableId: action.payload.id,
      value: action.payload.value,
      userId: 1,
      token,
    };
    yield call(createComment, commentData);
    yield put({ type: GET_SETUP_COMMENTS, payload: { id: action.payload.id } });
  } catch (e) {
    console.log(e);
  }
}

function* watchCreateSetupComment() {
  yield takeEvery(CREATE_SETUP_COMMENT, createSetupComment);
}

function* getSetupRate(action: IGetSetupRate) {
  try {
    const response: { average: number } = yield call(getAverageRate, {
      ratebleId: action.payload.id,
      ratebleType: 'setup',
    });
    yield put({ type: GET_SETUP_RATE_SUCCESS, payload: response });
  } catch (e) {
    console.log(e);
  }
}

function* watchGetSetupRate() {
  yield takeEvery(GET_SETUP_RATE, getSetupRate);
}

function* addSetupRate(action: ISetSetupRate) {
  try {
    const data: RateCreationAttributes = {
      userId: 8,
      ratebleId: action.payload.id,
      ratebleType: 'setup',
      value: action.payload.value,
    };
    const response = yield call(addRate, data);
    yield put({ type: SET_SETUP_RATE_SUCCESS, payload: response });
  } catch (e) {
    console.log(e);
  }
}

function* watchAddSetupRate() {
  yield takeEvery(SET_SETUP_RATE, addSetupRate);
}

export default function* authSagas() {
  yield all([
    watchGetSetup(),
    watchGetSetupComments(),
    watchCreateSetupComment(),
    watchGetSetupRate(),
    watchAddSetupRate(),
  ]);
}

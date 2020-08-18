import { call, put, takeEvery, all } from 'redux-saga/effects';
import {
  GET_SETUP,
  IGetSetup,
  GET_SETUP_SUCCESS,
  IGetComments,
  GET_SETUP_COMMENTS,
  GET_SETUP_COMMENTS_SUCCESS,
} from './actionTypes';
import { getSetupById } from 'api/services/setups.service';
import { PCSetup } from 'common/models/setup';
import { getAllComments } from 'api/services/comment.service';
import { SetupComment } from 'common/models/comment';
import { CommentFilter } from 'common/models/filter.model';

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
    const comments: SetupComment[] = yield call<(filter: CommentFilter) => void>(getAllComments, filter);
    yield put({ type: GET_SETUP_COMMENTS_SUCCESS, payload: comments });
  } catch (e) {
    console.log(e);
  }
}

function* watchGetSetupComments() {
  yield takeEvery(GET_SETUP_COMMENTS, getSetupComments);
}

export default function* authSagas() {
  yield all([watchGetSetup(), watchGetSetupComments()]);
}

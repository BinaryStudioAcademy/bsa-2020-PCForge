import { call, put, takeEvery, all } from 'redux-saga/effects';
import {
  IGetSetup,
  IGetComments,
  IGetSetupRate,
  ICreateSetupComment,
  IDeleteSetupComment,
  ISetSetupRate,
  IForkSetup,
  GET_SETUP,
  GET_SETUP_SUCCESS,
  GET_SETUP_COMMENTS,
  GET_SETUP_COMMENTS_SUCCESS,
  GET_SETUP_FAILURE,
  CREATE_SETUP_COMMENT,
  DELETE_SETUP_COMMENT,
  DELETE_SETUP_COMMENT_SUCCESS,
  GET_SETUP_RATE,
  GET_SETUP_RATE_SUCCESS,
  SET_SETUP_RATE_SUCCESS,
  SET_SETUP_RATE,
  CREATE_SETUP_COMMENT_SUCCESS,
  FORK_SETUP,
} from './actionTypes';
import { getSetupById } from 'api/services/setups.service';
import { forkUserSetup } from 'api/services/setupService';
import { PCSetup } from 'common/models/setup';
import { getAllComments, createComment, deleteComment, TypeResponseAllComments } from 'api/services/comment.service';
import { Comment, CommentCreationAttributes } from 'common/models/comment';
import { CommentFilter } from 'common/models/filter.model';
import { getAverageRate, addRate } from 'api/services/rate.service';
import { RateCreationAttributes } from 'common/models/rate.model';
import * as alert from 'common/services/AlertService/alert.service';
import { addAlert } from 'containers/Alerts/redux/actions';

function* getSetup(action: IGetSetup) {
  try {
    const setup: PCSetup = yield call<(id: number) => void>(getSetupById, action.payload.id);
    yield put({ type: GET_SETUP_SUCCESS, payload: setup });
  } catch (e) {
    yield put({ type: GET_SETUP_FAILURE });
  }
}

function* watchGetSetup() {
  yield takeEvery(GET_SETUP, getSetup);
}

function* getSetupComments(action: IGetComments) {
  try {
    const filter: CommentFilter = {
      commentableId: action.payload.id,
      commentableType: 'setup',
      from: action.payload.from,
      count: action.payload.count,
    };
    const comments: TypeResponseAllComments = yield call(getAllComments, filter);
    console.log(comments.data);
    comments.data.sort((a, b) => {
      return a.id - b.id;
    });
    console.log(comments);
    yield put({ type: GET_SETUP_COMMENTS_SUCCESS, payload: comments });
  } catch (e) {
    yield put(addAlert(alert.error('Failed to get setup comments')));
  }
}

function* watchGetSetupComments() {
  yield takeEvery(GET_SETUP_COMMENTS, getSetupComments);
}

function* createSetupComment(action: ICreateSetupComment) {
  try {
    const commentData: CommentCreationAttributes = {
      commentableType: 'setup',
      commentableId: action.payload.id,
      value: action.payload.value,
    };
    yield call(createComment, commentData);
    yield put({ type: CREATE_SETUP_COMMENT_SUCCESS });
    yield put({ type: GET_SETUP_COMMENTS, payload: { id: action.payload.id } });
  } catch (e) {
    yield put(addAlert(alert.error(e.message || 'Failed create setup comment')));
  }
}

function* watchCreateSetupComment() {
  yield takeEvery(CREATE_SETUP_COMMENT, createSetupComment);
}

function* deleteSetupComment(action: IDeleteSetupComment) {
  try {
    const filter: CommentFilter = {
      commentableId: action.payload.idSetup,
      commentableType: 'setup',
      from: 0, //action.payload.from,
      count: 20, //action.payload.count,
    };
    console.log(action.payload.id);
    const comment = yield call(deleteComment, action.payload.id);
    console.log('deleted Comment');
    console.log(comment);
    yield put({ type: DELETE_SETUP_COMMENT_SUCCESS });
    yield put({ type: GET_SETUP_COMMENTS, payload: { id: action.payload.idSetup } });

    //const comments: Comment[] = yield call(getAllComments, filter);
    //yield put({ type: GET_SETUP_COMMENTS_SUCCESS, payload: comments });
  } catch (e) {
    yield put(addAlert(alert.error(e.message || 'Failed delete setup comment')));
  }
}

function* watchDeleteSetupComment() {
  yield takeEvery(DELETE_SETUP_COMMENT, deleteSetupComment);
}

function* getSetupRate(action: IGetSetupRate) {
  try {
    const response: { average: number } = yield call(getAverageRate, {
      ratebleId: action.payload.id,
      ratebleType: 'setup',
    });
    yield put({ type: GET_SETUP_RATE_SUCCESS, payload: response });
  } catch (e) {
    yield put(addAlert(alert.error(e.message || 'Failed to get setup rate')));
  }
}

function* watchGetSetupRate() {
  yield takeEvery(GET_SETUP_RATE, getSetupRate);
}

function* addSetupRate(action: ISetSetupRate) {
  try {
    const data: RateCreationAttributes = {
      ratebleId: action.payload.id,
      ratebleType: 'setup',
      value: action.payload.value,
    };
    yield call(addRate, data);
    const setup: PCSetup = yield call<(id: number) => void>(getSetupById, action.payload.id);
    yield put({ type: SET_SETUP_RATE_SUCCESS, payload: setup });
  } catch (e) {
    yield put(addAlert(alert.error(e.message || 'Failed to add setup rate')));
  }
}

function* watchAddSetupRate() {
  yield takeEvery(SET_SETUP_RATE, addSetupRate);
}

function* forkSetup(action: IForkSetup) {
  try {
    const forkedSetup = yield call(forkUserSetup, action.payload.setupId);
    yield put(addAlert(alert.success(`You have forked '${forkedSetup.title}'. Check it out on your profile page.`)));
  } catch (e) {
    yield put(addAlert(alert.error(e.message || 'Could not fork the setup')));
  }
}

function* watchForkSetup() {
  yield takeEvery(FORK_SETUP, forkSetup);
}

export default function* authSagas() {
  yield all([
    watchGetSetup(),
    watchGetSetupComments(),
    watchCreateSetupComment(),
    watchDeleteSetupComment(),
    watchGetSetupRate(),
    watchAddSetupRate(),
    watchForkSetup(),
  ]);
}

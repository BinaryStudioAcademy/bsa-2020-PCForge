import { call, put, takeEvery, all } from 'redux-saga/effects';
import { getSetupById } from 'api/services/setups.service';
import { forkUserSetup } from 'api/services/setupService';
import { PCSetup } from 'common/models/setup';
import { getAllComments, createComment, deleteComment } from 'api/services/comment.service';
import { Comment, CommentCreationAttributes } from 'common/models/comment';
import { CommentFilter } from 'common/models/filter.model';
import { getAverageRate, addRate } from 'api/services/rate.service';
import { RateCreationAttributes } from 'common/models/rate.model';
import * as alert from 'common/services/AlertService/alert.service';
import { addAlert } from 'containers/Alerts/redux/actions';
import {
  CREATE_GAME_COMMENT,
  CREATE_GAME_COMMENT_SUCCESS,
  GET_GAME,
  GET_GAME_COMMENTS,
  GET_GAME_COMMENTS_SUCCESS,
  DELETE_GAME_COMMENT,
  DELETE_GAME_COMMENT_SUCCESS,
  GET_GAME_FAILURE,
  GET_GAME_RATE,
  GET_GAME_RATE_SUCCESS,
  GET_GAME_SUCCESS,
  ICreateGameComment,
  IDeleteGameComment,
  IGetGame,
  IGetGameComments,
  IGetGameRate,
  ISetGameRate,
  SET_GAME_RATE,
  SET_GAME_RATE_SUCCESS,
} from './actionTypes';
import { Game } from 'common/models/game';
import { getGameById } from 'api/services/gamesService';

function* getGame(action: IGetGame) {
  try {
    const game: Game = yield call<(id: number) => void>(getGameById, action.payload.id);
    yield put({ type: GET_GAME_SUCCESS, payload: game });
  } catch (e) {
    yield put({ type: GET_GAME_FAILURE });
  }
}

function* watchGetGame() {
  yield takeEvery(GET_GAME, getGame);
}

function* getGameComments(action: IGetGameComments) {
  try {
    const filter: CommentFilter = {
      commentableId: action.payload.id,
      commentableType: 'game',
      from: action.payload.from,
      count: action.payload.count,
    };
    const comments: Comment[] = yield call(getAllComments, filter);
    yield put({ type: GET_GAME_COMMENTS_SUCCESS, payload: comments });
  } catch (e) {
    yield put(addAlert(alert.error('Failed to get setup comments')));
  }
}

function* watchGetGameComments() {
  yield takeEvery(GET_GAME_COMMENTS, getGameComments);
}

function* createGameComment(action: ICreateGameComment) {
  try {
    const commentData: CommentCreationAttributes = {
      commentableType: 'game',
      commentableId: action.payload.id,
      value: action.payload.value,
    };
    yield call(createComment, commentData);
    yield put({ type: CREATE_GAME_COMMENT_SUCCESS });
    yield put({ type: GET_GAME_COMMENTS, payload: { id: action.payload.id } });
  } catch (e) {
    yield put(addAlert(alert.error('Failed create setup comment')));
  }
}

function* watchCreateGameComment() {
  yield takeEvery(CREATE_GAME_COMMENT, createGameComment);
}

function* deleteGameComment(action: IDeleteGameComment) {
  try {
    yield call(deleteComment, action.payload.id);
    yield put({ type: DELETE_GAME_COMMENT_SUCCESS });
    yield put({ type: GET_GAME_COMMENTS, payload: { id: action.payload.idGame } });
  } catch (e) {
    yield put(addAlert(alert.error(e.message || 'Failed delete game comment')));
  }
}

function* watchDeleteGameComment() {
  yield takeEvery(DELETE_GAME_COMMENT, deleteGameComment);
}

function* getGameRate(action: IGetGameRate) {
  try {
    const response: { average: number } = yield call(getAverageRate, {
      ratebleId: action.payload.id,
      ratebleType: 'game',
    });
    yield put({ type: GET_GAME_RATE_SUCCESS, payload: response });
  } catch (e) {
    yield put(addAlert(alert.error('Failed to get setup rate')));
  }
}

function* watchGetGameRate() {
  yield takeEvery(GET_GAME_RATE, getGameRate);
}

function* addSetupRate(action: ISetGameRate) {
  try {
    const data: RateCreationAttributes = {
      ratebleId: action.payload.id,
      ratebleType: 'game',
      value: action.payload.value,
    };
    yield call(addRate, data);
    const game: Game = yield call<(id: number) => void>(getGameById, action.payload.id);
    yield put({ type: SET_GAME_RATE_SUCCESS, payload: game });
  } catch (e) {
    yield put(addAlert(alert.error('Failed to add setup rate')));
  }
}

function* watchAddGameRate() {
  yield takeEvery(SET_GAME_RATE, addSetupRate);
}

export default function* gameSagas() {
  yield all([
    watchGetGame(),
    watchGetGameComments(),
    watchCreateGameComment(),
    watchGetGameRate(),
    watchAddGameRate(),
    watchDeleteGameComment(),
  ]);
}

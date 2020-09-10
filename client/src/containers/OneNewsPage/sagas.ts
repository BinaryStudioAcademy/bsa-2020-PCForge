import { call, put, takeEvery, all } from 'redux-saga/effects';
import {
  GET_NEWS_SUCCESS,
  GET_NEWS,
  GET_NEWS_FAILURE,
  IGetOneNews,
  GET_NEWS_COMMENTS_SUCCESS,
  GET_NEWS_COMMENTS,
  IGetComments,
  ICreateNewsComment,
  CREATE_NEWS_COMMENT_SUCCESS,
  CREATE_NEWS_COMMENT,
  IDeleteNewsComment,
  DELETE_NEWS_COMMENT,
  DELETE_NEWS_COMMENT_SUCCESS,
} from './actionTypes';
import { TypeNews } from 'common/models/typeNews';
import { getNews as fetchNews } from 'api/services/newsService';
import { getAllComments, createComment, deleteComment } from 'api/services/comment.service';
import { CommentFilter } from 'common/models/filter.model';
import { CommentCreationAttributes, Comment } from 'common/models/comment';
import { handleShowingSpinner } from './actions';

function* getNews(action: IGetOneNews) {
  yield put(handleShowingSpinner(true));

  try {
    const news: TypeNews = yield call<(id: string) => void>(fetchNews, action.payload.id);
    yield put({ type: GET_NEWS_SUCCESS, payload: news });
  } catch (e) {
    yield put({ type: GET_NEWS_FAILURE, payload: e.message });
  } finally {
    yield put(handleShowingSpinner(false));
  }
}

function* watchGetNews() {
  yield takeEvery(GET_NEWS, getNews);
}

function* getNewsComments(action: IGetComments) {
  try {
    const filter: CommentFilter = {
      commentableId: action.payload.id,
      commentableType: 'news',
      from: action.payload.from,
      count: action.payload.count,
    };
    const comments: Comment[] = yield call(getAllComments, filter);
    yield put({ type: GET_NEWS_COMMENTS_SUCCESS, payload: comments });
  } catch (e) {
    yield put({ type: GET_NEWS_FAILURE, payload: e.message });
  }
}

function* watchCreateNewsComment() {
  yield takeEvery(CREATE_NEWS_COMMENT, createNewsComment);
}

function* createNewsComment(action: ICreateNewsComment) {
  try {
    const commentData: CommentCreationAttributes = {
      commentableType: 'news',
      commentableId: action.payload.id,
      value: action.payload.value,
    };
    yield call(createComment, commentData);
    yield put({ type: CREATE_NEWS_COMMENT_SUCCESS });
    yield put({ type: GET_NEWS_COMMENTS, payload: { id: action.payload.id } });
  } catch (e) {
    yield put({ type: GET_NEWS_FAILURE, payload: e.message });
  }
}

function* watchGetNewsComments() {
  yield takeEvery(GET_NEWS_COMMENTS, getNewsComments);
}

function* deleteNewsCommentHandler(action: IDeleteNewsComment) {
  try {
    const commentData: Comment = yield call(deleteComment, action.payload.id);
    yield put({
      type: DELETE_NEWS_COMMENT_SUCCESS,
      payload: { id: commentData.id },
    });
  } catch (e) {
    yield put({ type: GET_NEWS_FAILURE, payload: e.message });
  }
}

function* watchDeleteNewsComments() {
  yield takeEvery(DELETE_NEWS_COMMENT, deleteNewsCommentHandler);
}

export default function* gameSagas() {
  yield all([watchGetNews(), watchGetNewsComments(), watchCreateNewsComment(), watchDeleteNewsComments()]);
}

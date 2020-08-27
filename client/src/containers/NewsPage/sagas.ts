import { call, put, all, takeEvery } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import { FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE, FETCH_NEWS_REQUEST } from './actionTypes';
import { getAllNews } from 'api/services/newsService';

function* fetchNews(action: AnyAction) {
  try {
    const news = yield call(getAllNews);
    yield put({ type: FETCH_NEWS_SUCCESS, payload: news });
  } catch (error) {
    yield put({ type: FETCH_NEWS_FAILURE, payload: error.message });
  }
}

function* watchFetchNews() {
  yield takeEvery(FETCH_NEWS_REQUEST, fetchNews);
}

export default function* newsSagas() {
  yield all([watchFetchNews()]);
}

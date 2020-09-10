import { call, put, takeEvery, all } from 'redux-saga/effects';
import { GET_NEWS_SUCCESS, GET_NEWS, GET_NEWS_FAILURE, IGetOneNews } from './actionTypes';
import { TypeNews } from 'common/models/typeNews';
import { getNews as fetchNews } from 'api/services/newsService';

function* getNews(action: IGetOneNews) {
  try {
    const news: TypeNews = yield call<(id: string) => void>(fetchNews, action.payload.id);
    yield put({ type: GET_NEWS_SUCCESS, payload: news });
  } catch (e) {
    yield put({ type: GET_NEWS_FAILURE, payload: e.message });
  }
}

function* watchGetNews() {
  yield takeEvery(GET_NEWS, getNews);
}

export default function* gameSagas() {
  yield all([watchGetNews()]);
}

import {takeLeading, all, call, put} from 'redux-saga/effects';
import newsService from 'api/services/newsService';
import {GET_NEWS, GET_NEWS_SUCCESS} from './actionTypes';
import {IWithMeta} from 'common/interfaces/global';
import {News} from 'common/models/news.model';

function* getNews() {
  try {
    const newsData: IWithMeta<News> = yield call(newsService.getMany);
    yield put({type: GET_NEWS_SUCCESS, payload: newsData});
  } catch (e) {
    console.log(e, 'error');
  }
}

function* watchGetNews() {
  yield takeLeading(GET_NEWS, getNews);
}

export default function* HomeSagas() {
  return yield all([watchGetNews()]);
}

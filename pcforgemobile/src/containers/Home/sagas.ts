import { takeLeading, all, call, put } from 'redux-saga/effects';
import newsService from 'api/services/newsService';
import { GET_NEWS } from './actionTypes';
import { IWithMeta } from 'common/interfaces/global';
import { News } from 'common/models/news.model';

function* getNews(){
    try {
        const newsData: IWithMeta<News> = yield call(newsService.getMany);
        console.log(newsData, 'news datas');
    } catch(e) {
        console.log(e);
    }
}

function* watchGetNews(){
    yield takeLeading(GET_NEWS, getNews);
}

export default function* HomeSagas() {
    return yield all([
        watchGetNews(),
    ])
}

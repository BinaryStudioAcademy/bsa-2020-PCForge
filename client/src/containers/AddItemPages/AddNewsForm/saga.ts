import { call, put, all, takeLatest, takeEvery } from 'redux-saga/effects';
import { uploadImage } from 'api/services/imageService';
import { addNews } from 'api/services/newsService';
import { SelectOption } from 'components/BasicComponents/InputBasedSelect';
import { FilterModel } from 'common/models/filter.model';

import { loadError, loadCreatedNews, clearingStateValues } from './actions';
import { NewsFormAction, NewsFormActionTypes, ICreateNewsAction, IClearStateValuesAction } from './actionTypes';

function* clearStateValues(action: IClearStateValuesAction) {
  try {
    yield put(clearingStateValues());
  } catch (error) {
    yield put(loadError(error.message));
  }
}

function* watchClearStateValues() {
  yield takeEvery(NewsFormActionTypes.CLEAR_NEWS_STATE_VALUES_ACTION, clearStateValues);
}

function* createNews(action: ICreateNewsAction) {
  try {
    const { news, imageData } = action.payload;
    news.image = yield call(uploadImage, imageData);
    const newsCreated = yield call(addNews, news);
    yield put(loadCreatedNews(newsCreated.title));
  } catch (error) {
    yield put(loadError(error.message));
  }
}
function* watchCreateNews() {
  yield takeEvery(NewsFormActionTypes.CREATE_NEW_NEWS_ACTION, createNews);
}

export default function* newsFormSagas() {
  yield all([watchCreateNews(), watchClearStateValues()]);
}

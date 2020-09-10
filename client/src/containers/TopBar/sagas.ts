import { call, put, all, takeLatest } from 'redux-saga/effects';
import { setSearchResult } from './actions';
import { IGetSearchResult, SearchActionsTypes } from './actionTypes';
import { getSearchResponse } from 'api/services/search.service';

function* searchByString(action: IGetSearchResult) {
  try {
    const searchResult = yield call(getSearchResponse, action.payload.searchString);
    yield put(setSearchResult(searchResult));
  } catch (error) {
    yield console.log(error);
  }
}

function* watchSearchByString() {
  yield takeLatest(SearchActionsTypes.GET_SEARCH_RESULTS, searchByString);
}

export default function* setupsSagas() {
  yield all([watchSearchByString()]);
}

import { SearchActionsTypes, IGetSearchResult, IGetSearchResultSuccess } from './actionTypes';
import { SearchResponse } from 'common/models/search';

export const getSearchResults = (searchString: string): IGetSearchResult => ({
  type: SearchActionsTypes.GET_SEARCH_RESULTS,
  payload: { searchString },
});

export const setSearchResult = (results: SearchResponse[]): IGetSearchResultSuccess => ({
  type: SearchActionsTypes.GET_SEARCH_RESULTS_SUCCESS,
  payload: results,
});

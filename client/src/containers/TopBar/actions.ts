import { SearchActionsTypes, IGetSearchResult, IGetSearchResultSuccess, IClearSearchResult } from './actionTypes';
import { SearchResponse } from 'common/models/search';

export const getSearchResults = (searchString: string): IGetSearchResult => ({
  type: SearchActionsTypes.GET_SEARCH_RESULTS,
  payload: { searchString },
});

export const setSearchResult = (results: SearchResponse[]): IGetSearchResultSuccess => ({
  type: SearchActionsTypes.GET_SEARCH_RESULTS_SUCCESS,
  payload: results,
});

export const clearSearchResult = (): IClearSearchResult => ({
  type: SearchActionsTypes.CLEAR_SEARCH_RESULTS,
});

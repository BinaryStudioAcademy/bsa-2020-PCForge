import { SearchResponse } from 'common/models/search';
export enum SearchActionsTypes {
  GET_SEARCH_RESULTS = 'TOP_BAR/GET_SEARCH_RESULTS',
  GET_SEARCH_RESULTS_FAILURE = 'TOP_BAR/GET_SEARCH_RESULTS_FAILURE',
  GET_SEARCH_RESULTS_SUCCESS = 'TOP_BAR/GET_SEARCH_RESULTS_SUCCESS',
  CLEAR_SEARCH_RESULTS = 'TOP_BAR/CLEAR_SEARCH_RESULTS',
}

export interface IGetSearchResult {
  type: typeof SearchActionsTypes.GET_SEARCH_RESULTS;
  payload: {
    searchString: string;
  };
}

export interface IGetSearchResultSuccess {
  type: typeof SearchActionsTypes.GET_SEARCH_RESULTS_SUCCESS;
  payload: SearchResponse[];
}
export interface IClearSearchResult {
  type: typeof SearchActionsTypes.CLEAR_SEARCH_RESULTS;
}

export interface IGetSearchResultFailure {
  type: typeof SearchActionsTypes.GET_SEARCH_RESULTS_FAILURE;
  payload: {
    message: string;
  };
}

export type SearchActions = IGetSearchResult | IGetSearchResultSuccess | IGetSearchResultFailure | IClearSearchResult;

export interface SearchState {
  results: SearchResponse[];
}

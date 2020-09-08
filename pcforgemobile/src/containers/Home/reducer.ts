import { HomeState } from './interfaces';
import {
  GET_NEWS,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAILURE,
  HomeActionTyeps
} from './actionTypes';

const initialState: HomeState = {
  news: [],
  itemsCount: 0
};

export function HomeReducer(state: HomeState = initialState, action: HomeActionTyeps): HomeState {
  switch (action.type) {
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        itemsCount: action.payload.countAfterFilter,
        news: action.payload.news
      };
    default:
      return state;
  }
}

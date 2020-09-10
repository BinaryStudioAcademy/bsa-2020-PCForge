import { OneNewsState } from './actionTypes';
import { OneNewsActionTypes, GET_NEWS_SUCCESS, GET_NEWS_FAILURE } from './actionTypes';

const initialState: OneNewsState = {
  news: null,
  error: '',
  showSpinner: false,
};

export function OneNewsReducer(state: OneNewsState = initialState, action: OneNewsActionTypes): OneNewsState {
  switch (action.type) {
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        showSpinner: false,
        news: action.payload,
      };
    case GET_NEWS_FAILURE:
      return {
        ...state,
        error: action.payload.message,
      };
    default:
      return state;
  }
}

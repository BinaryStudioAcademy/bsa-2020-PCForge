import {
  OneNewsState,
  GET_NEWS_COMMENTS_SUCCESS,
  SHOW_SPINNER,
  DELETE_NEWS_COMMENT,
  DELETE_NEWS_COMMENT_SUCCESS,
} from './actionTypes';
import { OneNewsActionTypes, GET_NEWS_SUCCESS, GET_NEWS_FAILURE } from './actionTypes';

const initialState: OneNewsState = {
  news: null,
  error: '',
  showSpinner: false,
  comments: [],
  totalCountComments: 0,
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
    case GET_NEWS_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload.data,
        totalCountComments: action.payload.meta.countAfterFiltering,
      };
    case DELETE_NEWS_COMMENT_SUCCESS:
      const newCommentsArray = state.comments.filter((comment) => comment.id !== action.payload.id);
      return {
        ...state,
        comments: newCommentsArray,
      };
    case SHOW_SPINNER: {
      return {
        ...state,
        showSpinner: action.payload.showSpinner,
      };
    }
    default:
      return state;
  }
}

import {
  GET_NEWS,
  OneNewsActionTypes,
  GET_NEWS_COMMENTS,
  CREATE_NEWS_COMMENT,
  SHOW_SPINNER,
  DELETE_NEWS_COMMENT,
} from './actionTypes';

export const getNews = (payload: { id: string }): OneNewsActionTypes => ({
  type: GET_NEWS,
  payload,
});

export const getNewsComments = (payload: { id: number; count: number; from: number }): OneNewsActionTypes => ({
  type: GET_NEWS_COMMENTS,
  payload,
});

export const createNewsComment = (payload: { id: number; value: string }): OneNewsActionTypes => ({
  type: CREATE_NEWS_COMMENT,
  payload,
});

export const deleteNewsComment = (payload: { id: number }): OneNewsActionTypes => ({
  type: DELETE_NEWS_COMMENT,
  payload,
});

export const handleShowingSpinner = (showSpinner: boolean): OneNewsActionTypes => ({
  type: SHOW_SPINNER,
  payload: {
    showSpinner,
  },
});

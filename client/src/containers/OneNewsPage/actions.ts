import { GET_NEWS, OneNewsActionTypes } from './actionTypes';

export const getNews = (payload: { id: string }): OneNewsActionTypes => ({
  type: GET_NEWS,
  payload,
});

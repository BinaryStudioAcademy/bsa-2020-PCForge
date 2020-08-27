import { AnyAction } from 'redux';
import { FETCH_NEWS_REQUEST } from './actionTypes';

export const fetchNewsAction = (): AnyAction => ({
  type: FETCH_NEWS_REQUEST,
});

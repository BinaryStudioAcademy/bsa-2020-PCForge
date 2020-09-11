import { NewsFormAction, NewsFormActionTypes } from './actionTypes';
import { TypeAddNews } from 'common/models/typeNews';

export const clearStateValues = (): NewsFormAction => ({
  type: NewsFormActionTypes.CLEAR_NEWS_STATE_VALUES_ACTION,
});
export const clearingStateValues = (): NewsFormAction => ({
  type: NewsFormActionTypes.CLEAR_NEWS_STATE_VALUES_SUCCESS,
});

export const loadError = (errorMessage: string): NewsFormAction => ({
  type: NewsFormActionTypes.GET_INITIAL_VALUES_ERROR,
  payload: {
    errorMessage,
  },
});

export const createNews = (news: TypeAddNews, imageData: Blob): NewsFormAction => ({
  type: NewsFormActionTypes.CREATE_NEW_NEWS_ACTION,
  payload: {
    news,
    imageData,
  },
});

export const loadCreatedNews = (title: string): NewsFormAction => ({
  type: NewsFormActionTypes.CREATE_NEW_NEWS_SUCCESS,
  payload: {
    title,
  },
});

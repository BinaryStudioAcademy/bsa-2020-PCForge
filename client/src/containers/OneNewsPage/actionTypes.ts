import { TypeNews as News } from 'common/models/typeNews';

export const GET_NEWS = 'OneNews/GET_NEWS';
export const GET_NEWS_SUCCESS = 'OneNews/GET_NEWS_SUCCESS';
export const GET_NEWS_FAILURE = 'OneNews/GET_NEWS_FAILURE';

export interface IGetOneNews {
  type: typeof GET_NEWS;
  payload: {
    id: string;
  };
}

export interface IGetOneNewsSuccess {
  type: typeof GET_NEWS_SUCCESS;
  payload: News;
}

export interface IGetOneNewsFailure {
  type: typeof GET_NEWS_FAILURE;
  payload: {
    message: string;
  };
}

export type OneNewsActionTypes = IGetOneNews | IGetOneNewsSuccess | IGetOneNewsFailure;

export interface OneNewsState {
  news: News | null;
  error: string;
  showSpinner: boolean;
}

import { TypeNews as News } from 'common/models/typeNews';
import { Comment } from 'common/models/comment';
import { TypeResponseAllComments } from 'api/services/comment.service';

export const GET_NEWS = 'OneNews/GET_NEWS';
export const GET_NEWS_SUCCESS = 'OneNews/GET_NEWS_SUCCESS';
export const GET_NEWS_FAILURE = 'OneNews/GET_NEWS_FAILURE';

export const GET_NEWS_COMMENTS = 'OneNews/GET_NEWS_COMMENTS';
export const GET_NEWS_COMMENTS_SUCCESS = 'OneNews/ET_NEWS_COMMENTS_SUCCESS';
export const GET_NEWS_COMMENTS_FAILURE = 'OneNews/GET_NEWS_COMMENTS_FAILURE';

export const CREATE_NEWS_COMMENT = 'OneNews/CREATE_NEWS_COMMENT';
export const CREATE_NEWS_COMMENT_SUCCESS = 'OneNews/CREATE_NEWS_COMMENT_SUCCESS';
export const CREATE_NEWS_COMMENT_FAILURE = 'OneNews/CREATE_NEWS_COMMENT_FAILURE';

export const SHOW_SPINNER = 'OneNews/SHOW_SPINNER';

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

export interface IGetComments {
  type: typeof GET_NEWS_COMMENTS;
  payload: {
    id: number;
    count: number;
    from: number;
  };
}

export interface IGetCommentsSuccess {
  type: typeof GET_NEWS_COMMENTS_SUCCESS;
  payload: TypeResponseAllComments;
}

export interface IGetCommentsFailure {
  type: typeof GET_NEWS_COMMENTS_FAILURE;
  payload: {
    message: string;
  };
}

export interface ICreateNewsComment {
  type: typeof CREATE_NEWS_COMMENT;
  payload: {
    id: number;
    value: string;
  };
}

export interface ICreateNewsCommentSuccess {
  type: typeof CREATE_NEWS_COMMENT_SUCCESS;
}

export interface ICreateNewsCommentFailure {
  type: typeof CREATE_NEWS_COMMENT_FAILURE;
  payload: {
    message: string;
  };
}

export interface IShowSpinner {
  type: typeof SHOW_SPINNER;
  payload: {
    showSpinner: boolean;
  };
}

export type OneNewsActionTypes =
  | IGetOneNews
  | IGetOneNewsSuccess
  | IGetOneNewsFailure
  | IGetComments
  | IGetCommentsSuccess
  | IGetCommentsFailure
  | ICreateNewsComment
  | ICreateNewsCommentSuccess
  | ICreateNewsCommentFailure
  | IShowSpinner;

export interface OneNewsState {
  news: News | null;
  error: string;
  showSpinner: boolean;
  comments: Array<Comment>;
  totalCountComments: number;
}

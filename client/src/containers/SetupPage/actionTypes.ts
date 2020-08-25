import { PCSetup } from 'common/models/setup';
import { TypeResponseAllComments } from 'api/services/comment.service';
import { Comment } from 'common/models/comment';
import { Rate } from 'common/models/rate.model';

export const GET_SETUP = 'GET_SETUP';
export const GET_SETUP_SUCCESS = 'GET_SETUP_SUCCESS';
export const GET_SETUP_FAILURE = 'GET_SETUP_FAILURE';
export const GET_SETUP_COMMENTS = 'GET_SETUP_COMMENTS';
export const GET_SETUP_COMMENTS_SUCCESS = 'GET_SETUP_COMMENTS_SUCCESS';
export const GET_SETUP_COMMENTS_FAILURE = 'GET_SETUP_COMMENTS_FAILURE';

export const CREATE_SETUP_COMMENT = 'CREATE_SETUP_COMMENT';
export const CREATE_SETUP_COMMENT_SUCCESS = 'CREATE_SETUP_COMMENT_SUCCESS';
export const CREATE_SETUP_COMMENT_FAILURE = 'CREATE_SETUP_COMMENT_FAILURE';

export const GET_SETUP_RATE = 'GET_SETUP_RATE';
export const GET_SETUP_RATE_SUCCESS = 'GET_SETUP_RATE_SUCCESS';
export const GET_SETUP_RATE_FAILURE = 'GET_SETUP_RATE_FAILURE';

export const SET_SETUP_RATE = 'SET_SETUP_RATE';
export const SET_SETUP_RATE_SUCCESS = 'SET_SETUP_RATE_SUCCESS';
export const SET_SETUP_RATE_FAILURE = 'SET_SETUP_RATE_FAILURE';

export const SETUP_WIPE_SNACKBAR_DATA = 'SETUP_WIPE_SNACKBAR_DATA';

export interface IGetSetup {
  type: typeof GET_SETUP;
  payload: {
    id: number;
  };
}

export interface IGetSetupSuccess {
  type: typeof GET_SETUP_SUCCESS;
  payload: PCSetup;
}

export interface IGetSetupFailure {
  type: typeof GET_SETUP_FAILURE;
  payload: {
    message: string;
  };
}

export interface IGetComments {
  type: typeof GET_SETUP_COMMENTS;
  payload: {
    id: number;
    count: number;
    from: number;
  };
}

export interface IGetCommentsSuccess {
  type: typeof GET_SETUP_COMMENTS_SUCCESS;
  payload: TypeResponseAllComments;
}

export interface IGetCommentsFailure {
  type: typeof GET_SETUP_COMMENTS_FAILURE;
  payload: {
    message: string;
  };
}

export interface ICreateSetupComment {
  type: typeof CREATE_SETUP_COMMENT;
  payload: {
    id: number;
    value: string;
  };
}

export interface ICreateSetupCommentSuccess {
  type: typeof CREATE_SETUP_COMMENT_SUCCESS;
}

export interface ICreateSetupCommentFailure {
  type: typeof CREATE_SETUP_COMMENT_FAILURE;
  payload: {
    message: string;
  };
}

export interface IGetSetupRate {
  type: typeof GET_SETUP_RATE;
  payload: {
    id: number;
  };
}

export interface IGetSetupRateSuccess {
  type: typeof GET_SETUP_RATE_SUCCESS;
  payload: {
    average: number;
  };
}

export interface IGetSetupRateFailure {
  type: typeof GET_SETUP_RATE_FAILURE;
  payload: {
    message: string;
  };
}

export interface ISetSetupRate {
  type: typeof SET_SETUP_RATE;
  payload: {
    id: number;
    value: number;
  };
}

export interface ISetSetupRateSuccess {
  type: typeof SET_SETUP_RATE_SUCCESS;
  payload: Rate;
}

export interface ISetSetupRateFailure {
  type: typeof SET_SETUP_RATE_FAILURE;
  payload: {
    message: string;
  };
}

export interface ISetupWipeSnackbarData {
  type: typeof SETUP_WIPE_SNACKBAR_DATA;
}

export type SetupActionTypes =
  | IGetSetup
  | IGetSetupSuccess
  | IGetSetupFailure
  | IGetComments
  | IGetCommentsSuccess
  | IGetCommentsFailure
  | ICreateSetupComment
  | ICreateSetupCommentSuccess
  | ICreateSetupCommentFailure
  | IGetSetupRate
  | IGetSetupRateSuccess
  | IGetSetupRateFailure
  | ISetSetupRate
  | ISetSetupRateSuccess
  | ISetSetupRateFailure
  | ISetupWipeSnackbarData;

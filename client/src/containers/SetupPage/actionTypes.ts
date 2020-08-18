import { PCSetup } from 'common/models/setup';
import { TypeResponseAllComments } from 'api/services/comment.service';

export const GET_SETUP = 'GET_SETUP';
export const GET_SETUP_SUCCESS = 'GET_SETUP_SUCCESS';
export const GET_SETUP_FAILURE = 'GET_SETUP_FAILURE';
export const GET_SETUP_COMMENTS = 'GET_SETUP_COMMENTS';
export const GET_SETUP_COMMENTS_SUCCESS = 'GET_SETUP_COMMENTS_SUCCESS';
export const GET_SETUP_COMMENTS_FAILURE = 'GET_SETUP_COMMENTS_FAILURE';

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

export type SetupActionTypes =
  | IGetSetup
  | IGetSetupSuccess
  | IGetSetupFailure
  | IGetComments
  | IGetCommentsSuccess
  | IGetCommentsFailure;

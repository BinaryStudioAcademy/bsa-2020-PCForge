import { Game } from 'common/models/game';
import { TypeResponseAllComments } from 'api/services/comment.service';

export const GET_GAME = 'Game/GET_GAME';
export const GET_GAME_SUCCESS = 'Game/GET_GAME_SUCCESS';
export const GET_GAME_FAILURE = 'Game/GET_GAME_FAILURE';

export const GET_GAME_COMMENTS = 'Game/GET_GAME_COMMENTS';
export const GET_GAME_COMMENTS_SUCCESS = 'Game/GET_GAME_COMMENTS_SUCCESS';
export const GET_GAME_COMMENTS_FAILURE = 'Game/GET_GAME_COMMENTS_FAILURE';

export const CREATE_GAME_COMMENT = 'Game/CREATE_GAME_COMMENT';
export const CREATE_GAME_COMMENT_SUCCESS = 'Game/CREATE_GAME_COMMENT_SUCCESS';
export const CREATE_GAME_COMMENT_FAILURE = 'Game/CREATE_GAME_COMMENT_FAILURE';

export const DELETE_GAME_COMMENT = 'Game/DELETE_GAME_COMMENT';
export const DELETE_GAME_COMMENT_SUCCESS = 'Game/DELETE_GAME_COMMENT_SUCCESS';
export const DELETE_GAME_COMMENT_FAILURE = 'Game/DELETE_GAME_COMMENT_FAILURE';

export const GET_GAME_RATE = 'Game/GET_GAME_RATE';
export const GET_GAME_RATE_SUCCESS = 'Game/GET_GAME_RATE_SUCCESS';
export const GET_GAME_RATE_FAILURE = 'Game/GET_GAME_RATE_FAILURE';

export const SET_GAME_RATE = 'Game/SET_GAME_RATE';
export const SET_GAME_RATE_SUCCESS = 'Game/SET_GAME_RATE_SUCCESS';
export const SET_GAME_RATE_FAILURE = 'Game/SET_GAME_RATE_FAILURE';

export interface IGetGame {
  type: typeof GET_GAME;
  payload: {
    id: number;
  };
}

export interface IGetGameSuccess {
  type: typeof GET_GAME_SUCCESS;
  payload: Game;
}

export interface IGetGameFailure {
  type: typeof GET_GAME_FAILURE;
  payload: {
    message: string;
  };
}

export interface IGetGameComments {
  type: typeof GET_GAME_COMMENTS;
  payload: {
    id: number;
    count: number;
    from: number;
  };
}

export interface IGetGameCommentsSuccess {
  type: typeof GET_GAME_COMMENTS_SUCCESS;
  payload: TypeResponseAllComments;
}

export interface IGetGameCommentsFailure {
  type: typeof GET_GAME_COMMENTS_FAILURE;
  payload: {
    message: string;
  };
}

export interface ICreateGameComment {
  type: typeof CREATE_GAME_COMMENT;
  payload: {
    id: number;
    value: string;
  };
}

export interface ICreateGameCommentSuccess {
  type: typeof CREATE_GAME_COMMENT_SUCCESS;
}

export interface ICreateGameCommentFailure {
  type: typeof CREATE_GAME_COMMENT_FAILURE;
  payload: {
    message: string;
  };
}

export interface IDeleteGameComment {
  type: typeof DELETE_GAME_COMMENT;
  payload: {
    id: number;
    idGame: number;
  };
}

export interface IDeleteGameCommentSuccess {
  type: typeof DELETE_GAME_COMMENT_SUCCESS;
}

export interface IDeleteGameCommentFailure {
  type: typeof DELETE_GAME_COMMENT_FAILURE;
  payload: {
    message: string;
  };
}

export interface IGetGameRate {
  type: typeof GET_GAME_RATE;
  payload: {
    id: number;
  };
}

export interface IGetGameRateSuccess {
  type: typeof GET_GAME_RATE_SUCCESS;
  payload: {
    average: number;
  };
}

export interface IGetGameRateFailure {
  type: typeof GET_GAME_RATE_FAILURE;
  payload: {
    message: string;
  };
}

export interface ISetGameRate {
  type: typeof SET_GAME_RATE;
  payload: {
    id: number;
    value: number;
  };
}

export interface ISetGameRateSuccess {
  type: typeof SET_GAME_RATE_SUCCESS;
  payload: Game;
}

export interface ISetGameRateFailure {
  type: typeof SET_GAME_RATE_FAILURE;
  payload: {
    message: string;
  };
}

export type GameActionTypes =
  | IGetGame
  | IGetGameSuccess
  | IGetGameFailure
  | IGetGameComments
  | IGetGameCommentsSuccess
  | IGetGameCommentsFailure
  | ICreateGameComment
  | ICreateGameCommentSuccess
  | ICreateGameCommentFailure
  | IDeleteGameComment
  | IDeleteGameCommentSuccess
  | IDeleteGameCommentFailure
  | IGetGameRate
  | IGetGameRateSuccess
  | IGetGameRateFailure
  | ISetGameRate
  | ISetGameRateSuccess
  | ISetGameRateFailure;

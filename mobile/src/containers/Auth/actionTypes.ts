import { UserLoginAttributes, User } from 'src/common/models/user';

export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE';

export interface loginRequestAction {
  type: typeof AUTH_LOGIN_REQUEST;
  payload: UserLoginAttributes;
}

export interface loginRequestSuccess {
  type: typeof AUTH_LOGIN_SUCCESS;
  payload: {
    user: User;
  };
}

export interface loginRequestFailure {
  type: typeof AUTH_LOGIN_FAILURE;
  payload: {
    message: string;
  };
}


export type AuthActionTypes =
    | loginRequestAction
    | loginRequestSuccess
    | loginRequestFailure
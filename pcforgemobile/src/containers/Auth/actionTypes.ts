import {UserLoginAttributes, User} from 'common/models/user.model';

export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE';
export const AUTH_SET_LOADER_STATE = 'AUTH_SET_LOADER';
export const AUTH_SIGN_OUT = 'AUTH_SIGN_OUT';

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

export interface authSetLoaderState {
  type: typeof AUTH_SET_LOADER_STATE;
  payload: boolean;
}

export interface authSignOut {
  type: typeof AUTH_SIGN_OUT;
}

export type AuthActionTypes =
  | loginRequestAction
  | loginRequestSuccess
  | loginRequestFailure
  | authSetLoaderState
  | authSignOut;

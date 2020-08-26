export enum ResetPasswordActionTypes {
  ERROR = 'ResetPassword/ERROR',
  FETCH_RESET_PASSWORD_REQUEST_REQUEST = 'ResetPassword/FETCH_RESET_PASSWORD_REQUEST_REQUEST',
  FETCH_RESET_PASSWORD_REQUEST_SUCCESS = 'ResetPassword/FETCH_RESET_PASSWORD_REQUEST_SUCCESS',
  FETCH_RESET_PASSWORD_REQUEST = 'ResetPassword/FETCH_RESET_PASSWORD_REQUEST',
  FETCH_RESET_PASSWORD_SUCCESS = 'ResetPassword/FETCH_RESET_PASSWORD_SUCCESS',
}

export interface IFetchResetPasswordRequestRequestAction {
  type: ResetPasswordActionTypes.FETCH_RESET_PASSWORD_REQUEST_REQUEST;
  payload: {
    email: string;
  };
}

export interface IFetchResetPasswordRequestAction {
  type: ResetPasswordActionTypes.FETCH_RESET_PASSWORD_REQUEST;
  payload: {
    userId: string;
    token: string;
    newPassword: string;
  };
}

interface IFetchResetPasswordRequestSuccessAction {
  type: ResetPasswordActionTypes.FETCH_RESET_PASSWORD_REQUEST_SUCCESS;
}

interface IFetchResetPasswordSuccessAction {
  type: ResetPasswordActionTypes.FETCH_RESET_PASSWORD_SUCCESS;
}

interface IErrorAction {
  type: ResetPasswordActionTypes.ERROR;
  payload: {
    error: string;
  };
}

type ResetPasswordRequests = IFetchResetPasswordRequestRequestAction | IFetchResetPasswordRequestSuccessAction;

type ResetPasswordSuccess = IFetchResetPasswordRequestAction | IFetchResetPasswordSuccessAction;

export type ResetPasswordErrors = IErrorAction;

export type ResetPasswordActions = ResetPasswordRequests | ResetPasswordSuccess | ResetPasswordErrors;

export interface ResetPasswordState {
  error: string | null;
  loading: boolean;
  success: boolean | null;
}

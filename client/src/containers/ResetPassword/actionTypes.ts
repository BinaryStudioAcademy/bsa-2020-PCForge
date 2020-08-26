import { Game } from 'common/models/game';
import { ISetupPerformance } from 'common/models/setupPerformance';

export enum ResetPasswordActionTypes {
  ERROR = 'ResetPassword/ERROR',
  FETCH_RESET_PASSWORD_REQUEST = 'ResetPassword/FETCH_RESET_PASSWORD_REQUEST',
  FETCH_RESET_PASSWORD_SUCCESS = 'ResetPassword/FETCH_RESET_PASSWORD_SUCCESS',
}

export interface IFetchResetPasswordRequestRequestAction {
  type: ResetPasswordActionTypes.FETCH_RESET_PASSWORD_REQUEST;
  payload: {
    email: string;
  };
}

interface IFetchResetPasswordRequestAction {
  type: ResetPasswordActionTypes.FETCH_RESET_PASSWORD_SUCCESS;
}

interface IErrorAction {
  type: ResetPasswordActionTypes.ERROR;
  payload: {
    error: string;
  };
}

type ResetPasswordRequests = IFetchResetPasswordRequestRequestAction;

type ResetPasswordSuccess = IFetchResetPasswordRequestAction;

export type ResetPasswordErrors = IErrorAction;

export type ResetPasswordActions = ResetPasswordRequests | ResetPasswordSuccess | ResetPasswordErrors;

export interface ResetPasswordState {
  email: string;
  error: string;
}

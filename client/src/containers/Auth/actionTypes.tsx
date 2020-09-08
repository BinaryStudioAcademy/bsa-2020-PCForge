import { User } from 'common/models/user';

export const AUTH_CHANGE_EMAIL = 'AUTH_CHANGE_EMAIL';
export const AUTH_CHANGE_PASSWORD = 'AUTH_CHANGE_PASSWORD';
export const AUTH_CHANGE_CONFIRM_PASSWORD = 'AUTH_CHANGE_CONFIRM_PASSWORD';
export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE';
export const AUTH_LOGIN_BY_TOKEN_REQUEST = 'AUTH_LOGIN_BY_TOKEN_REQUEST';
export const AUTH_REGISTER_REQUEST = 'AUTH_REGISTER_REQUEST';
export const AUTH_VALIDATION_ERROR = 'AUTH_VALIDATION_ERROR';
export const AUTH_KEEP_SIGN_IN = 'AUTH_KEEP_SIGN_IN';
export const AUTH_LOADING_STATUS = 'AUTH_LOADING_STATUS';
export const AUTH_SWITCH_AUTH_PAGE = 'AUTH_SWITCH_AUTH_PAGE';
export const AUTH_REGISTRATION_SUCCESS = 'AUTH_REGISTRATION_SUCCESS';
export const AUTH_REGISTRATION_ERROR = 'AUTH_REGISTRATION_ERROR';
export const AUTH_GOOGLE_AUTH = 'AUTH_GOOGLE_AUTH';
export const AUTH_GOOGLE_AUTH_SUCCESS = 'AUTH_GOOGLE_AUTH_SUCCESS';
export const AUTH_GOOGLE_AUTH_FAILURE = 'AUTH_GOOGLE_AUTH_FAILURE';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

interface changeEmailAction {
  type: typeof AUTH_CHANGE_EMAIL;
  payload: {
    value: string;
  };
}

interface changePasswordAction {
  type: typeof AUTH_CHANGE_PASSWORD;
  payload: {
    value: string;
  };
}

interface changeConfirmPasswordAction {
  type: typeof AUTH_CHANGE_CONFIRM_PASSWORD;
  payload: {
    value: string;
  };
}

export interface loginRequestAction {
  type: typeof AUTH_LOGIN_REQUEST;
  payload: {
    email: string;
    password: string;
    keepSignedIn: boolean;
  };
}

export interface loginByTokenRequestAction {
  type: typeof AUTH_LOGIN_BY_TOKEN_REQUEST;
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

export interface registerRequestAction {
  type: typeof AUTH_REGISTER_REQUEST;
  payload: {
    email: string;
    password: string;
  };
}

interface validationErrorAction {
  type: typeof AUTH_VALIDATION_ERROR;
  payload: {
    errorMessage: string;
  };
}

interface keepSignedInAction {
  type: typeof AUTH_KEEP_SIGN_IN;
  payload: {
    keepSignedIn: boolean;
  };
}

interface changeLoadingStatusAction {
  type: typeof AUTH_LOADING_STATUS;
  payload: {
    isLoading: boolean;
  };
}

interface switchAuthPage {
  type: typeof AUTH_SWITCH_AUTH_PAGE;
  payload: {
    isRegistration: boolean;
  };
}

export interface registrationSuccess {
  type: typeof AUTH_REGISTRATION_SUCCESS;
  payload: {
    isRegistration: boolean;
  };
}

export interface registrationError {
  type: typeof AUTH_REGISTRATION_ERROR;
  payload: {
    message: string;
  };
}

export interface googleAuthAction {
  type: typeof AUTH_GOOGLE_AUTH;
  payload: {
    token: string;
  };
}

export interface googleAuthSuccess {
  type: typeof AUTH_GOOGLE_AUTH_SUCCESS;
  payload: {
    user: User;
  };
}

export interface googleAuthFailure {
  type: typeof AUTH_GOOGLE_AUTH_FAILURE;
  payload: {
    message: string;
  };
}

export interface logoutAction {
  type: typeof AUTH_LOGOUT;
}

export type AuthActionTypes =
  | changeEmailAction
  | changePasswordAction
  | changeConfirmPasswordAction
  | loginRequestAction
  | loginRequestSuccess
  | loginRequestFailure
  | registerRequestAction
  | validationErrorAction
  | keepSignedInAction
  | changeLoadingStatusAction
  | switchAuthPage
  | registrationSuccess
  | registrationError
  | googleAuthAction
  | googleAuthSuccess
  | googleAuthFailure
  | loginByTokenRequestAction
  | loginByTokenRequestAction
  | logoutAction;

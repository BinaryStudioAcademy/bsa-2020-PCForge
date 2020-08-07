import {
  AuthActionTypes,
  AUTH_CHANGE_EMAIL,
  AUTH_CHANGE_PASSWORD,
  AUTH_KEEP_SIGN_IN,
  AUTH_LOADING_STATUS,
  AUTH_LOGIN_REQUEST,
  AUTH_REGISTER_REQUEST,
  AUTH_SWITCH_AUTH_PAGE,
  AUTH_VALIDATION_ERROR,
} from 'containers/Auth/actionTypes';

export const changeEmail = (value: string): AuthActionTypes => ({
  type: AUTH_CHANGE_EMAIL,
  payload: {
    value,
  },
});

export const changePassword = (value: string): AuthActionTypes => ({
  type: AUTH_CHANGE_PASSWORD,
  payload: {
    value,
  },
});

export const loginRequest = (email: string, password: string, keepSignedIn: boolean): AuthActionTypes => ({
  type: AUTH_LOGIN_REQUEST,
  payload: {
    email,
    password,
    keepSignedIn,
  },
});

export const registerRequest = (email: string, password: string): AuthActionTypes => ({
  type: AUTH_REGISTER_REQUEST,
  payload: {
    email,
    password,
  },
});

export const validationError = (errorMessage: string): AuthActionTypes => ({
  type: AUTH_VALIDATION_ERROR,
  payload: {
    errorMessage,
  },
});

export const keepSignedIn = (keepSignedIn: boolean): AuthActionTypes => ({
  type: AUTH_KEEP_SIGN_IN,
  payload: {
    keepSignedIn,
  },
});

export const changeLoadingStatus = (isLoading: boolean): AuthActionTypes => ({
  type: AUTH_LOADING_STATUS,
  payload: {
    isLoading,
  },
});

export const switchAuthPage = (isRegistration: boolean): AuthActionTypes => ({
  type: AUTH_SWITCH_AUTH_PAGE,
  payload: {
    isRegistration,
  },
});

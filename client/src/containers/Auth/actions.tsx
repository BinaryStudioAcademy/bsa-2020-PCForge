import {
  AuthActionTypes,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  KEEP_SIGN_IN,
  LOADING_STATUS,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  SWITCH_AUTH_PAGE,
  VALIDATION_ERROR
} from 'containers/Auth/actionTypes';

export const changeEmail = (value: string): AuthActionTypes => ({
  type: CHANGE_EMAIL,
  payload: {
    value,
  },
});

export const changePassword = (value: string): AuthActionTypes => ({
  type: CHANGE_PASSWORD,
  payload: {
    value,
  },
});

export const loginRequest = (email: string, password: string, keepSignedIn: boolean): AuthActionTypes => ({
  type: LOGIN_REQUEST,
  payload: {
    email,
    password,
    keepSignedIn,
  },
});

export const registerRequest = (email: string, password: string): AuthActionTypes => ({
  type: REGISTER_REQUEST,
  payload: {
    email,
    password,
  },
});

export const validationError = (errorMessage: string): AuthActionTypes => ({
  type: VALIDATION_ERROR,
  payload: {
    errorMessage,
  },
});

export const keepSignedIn = (keepSignedIn: boolean): AuthActionTypes => ({
  type: KEEP_SIGN_IN,
  payload: {
    keepSignedIn,
  },
});

export const changeLoadingStatus = (isLoading: boolean): AuthActionTypes => ({
  type: LOADING_STATUS,
  payload: {
    isLoading,
  },
});

export const switchAuthPage = (isRegistration: boolean): AuthActionTypes => ({
  type: SWITCH_AUTH_PAGE,
  payload: {
    isRegistration,
  },
});

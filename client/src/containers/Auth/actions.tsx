import {
  AUTH_CHANGE_CONFIRM_PASSWORD,
  AUTH_CHANGE_EMAIL,
  AUTH_CHANGE_PASSWORD,
  AUTH_KEEP_SIGN_IN,
  AUTH_LOADING_STATUS,
  AUTH_LOGIN_BY_TOKEN_REQUEST,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTRATION_SUCCESS,
  AUTH_SWITCH_AUTH_PAGE,
  AUTH_VALIDATION_ERROR,
  AuthActionTypes,
  AUTH_GOOGLE_AUTH,
  AUTH_SUCCESS_MESSAGE,
} from 'containers/Auth/actionTypes';

import { User } from 'common/models/user';

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

export const changeConfirmPassword = (value: string): AuthActionTypes => ({
  type: AUTH_CHANGE_CONFIRM_PASSWORD,
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

export const loginByTokenRequest = (): AuthActionTypes => ({
  type: AUTH_LOGIN_BY_TOKEN_REQUEST,
});

export const loginRequestSuccess = (user: User): AuthActionTypes => ({
  type: AUTH_LOGIN_SUCCESS,
  payload: {
    user,
  },
});

export const registerRequest = (email: string, password: string): AuthActionTypes => ({
  type: AUTH_REGISTER_REQUEST,
  payload: {
    email,
    password,
  },
});

export const registered = (isRegistration: boolean): AuthActionTypes => ({
  type: AUTH_REGISTRATION_SUCCESS,
  payload: {
    isRegistration,
  },
});

export const validationError = (errorMessage: string): AuthActionTypes => ({
  type: AUTH_VALIDATION_ERROR,
  payload: {
    errorMessage,
  },
});

export const successMessage = (successMessage: string): AuthActionTypes => ({
  type: AUTH_SUCCESS_MESSAGE,
  payload: {
    successMessage,
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

export const googleAuthRequest = (payload: { token: string }): AuthActionTypes => ({
  type: AUTH_GOOGLE_AUTH,
  payload,
});

export const switchAuthPage = (isRegistration: boolean): AuthActionTypes => ({
  type: AUTH_SWITCH_AUTH_PAGE,
  payload: {
    isRegistration,
  },
});

export const logout = (): AuthActionTypes => ({
  type: AUTH_LOGOUT,
});

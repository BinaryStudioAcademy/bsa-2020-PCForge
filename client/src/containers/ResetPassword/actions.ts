import { ResetPasswordActionTypes, ResetPasswordActions } from './actionTypes';

export const sendResetPasswordRequest = (email: string): ResetPasswordActions => ({
  type: ResetPasswordActionTypes.FETCH_RESET_PASSWORD_REQUEST_REQUEST,
  payload: {
    email,
  },
});

export const sendResetPassword = (payload: {
  userId: string;
  token: string;
  newPassword: string;
}): ResetPasswordActions => ({
  type: ResetPasswordActionTypes.FETCH_RESET_PASSWORD_REQUEST,
  payload,
});

export const setResetPasswordRequestSuccess = (success: boolean): ResetPasswordActions => ({
  type: ResetPasswordActionTypes.FETCH_RESET_PASSWORD_REQUEST_SUCCESS,
  payload: {
    success,
  },
});

export const setResetPasswordSuccess = (): ResetPasswordActions => ({
  type: ResetPasswordActionTypes.FETCH_RESET_PASSWORD_SUCCESS,
});

export const setError = (error: string): ResetPasswordActions => ({
  type: ResetPasswordActionTypes.ERROR,
  payload: {
    error,
  },
});

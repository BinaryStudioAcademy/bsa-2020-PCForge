import { ResetPasswordActionTypes, ResetPasswordActions } from './actionTypes';

export const sendResetPasswordRequest = (email: string): ResetPasswordActions => ({
  type: ResetPasswordActionTypes.FETCH_RESET_PASSWORD_REQUEST,
  payload: {
    email,
  },
});

export const setError = (error: string): ResetPasswordActions => ({
  type: ResetPasswordActionTypes.ERROR,
  payload: {
    error,
  },
});

import {UserLoginAttributes} from 'common/models/user.model';
import {
  AUTH_LOGIN_REQUEST,
  AuthActionTypes,
  AUTH_SET_LOADER_STATE,
} from 'containers/Auth/actionTypes';

export const loginRequest = (
  payload: UserLoginAttributes,
): AuthActionTypes => ({
  type: AUTH_LOGIN_REQUEST,
  payload,
});

export const setLoadingState = (payload: boolean): AuthActionTypes => ({
  type: AUTH_SET_LOADER_STATE,
  payload,
});

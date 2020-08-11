import {
  UserActionTypes,
  LOAD_USER,
  LOAD_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  SHOW_SPINNER,
  HIDE_SPINNER,
} from './actionTypes';

import { IUser } from './interfaces';

export const loadUser = (id: string): UserActionTypes => ({
  type: LOAD_USER,
  payload: { id },
});

export const loadUserSuccess = (data: IUser): UserActionTypes => ({
  type: LOAD_USER_SUCCESS,
  payload: data,
});

export const updateUser = (data: IUser): UserActionTypes => ({
  type: UPDATE_USER,
  payload: data,
});

export const updateUserSuccess = (data: IUser): UserActionTypes => ({
  type: UPDATE_USER_SUCCESS,
  payload: data,
});

export const showSpinner = (): UserActionTypes => ({
  type: SHOW_SPINNER,
});

export const hideSpinner = (): UserActionTypes => ({
  type: HIDE_SPINNER,
});

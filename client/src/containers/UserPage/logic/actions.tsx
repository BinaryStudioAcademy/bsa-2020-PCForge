import {
  UserActionTypes,
  LOAD_USER,
  LOAD_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  SHOW_SPINNER,
  HIDE_SPINNER,
} from './actionTypes';

import { TypeUser } from 'models/typeUser';

export const loadUser = (id: number): UserActionTypes => ({
  type: LOAD_USER,
  payload: { id },
});

export const loadUserSuccess = (data: TypeUser): UserActionTypes => ({
  type: LOAD_USER_SUCCESS,
  payload: data,
});

export const updateUser = (data: TypeUser, oldPassword?: string): UserActionTypes => ({
  type: UPDATE_USER,
  payload: {
    data,
    oldPassword,
  },
});

export const updateUserSuccess = (data: TypeUser): UserActionTypes => ({
  type: UPDATE_USER_SUCCESS,
  payload: data,
});

export const showSpinner = (): UserActionTypes => ({
  type: SHOW_SPINNER,
});

export const hideSpinner = (): UserActionTypes => ({
  type: HIDE_SPINNER,
});
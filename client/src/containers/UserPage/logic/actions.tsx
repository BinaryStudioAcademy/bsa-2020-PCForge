import {
  UserActionTypes,
  LOAD_USER,
  LOAD_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  LOAD_SETUPS,
  LOAD_SETUPS_SUCCESS,
  SHOW_SPINNER,
  HIDE_SPINNER,
} from './actionTypes';

import { TypeUser } from 'common/models/typeUser';
import { SetupType } from 'common/models/typeSetup';

export const loadUser = (id: number): UserActionTypes => ({
  type: LOAD_USER,
  payload: { id },
});

export const loadUserSuccess = (data: TypeUser): UserActionTypes => ({
  type: LOAD_USER_SUCCESS,
  payload: data,
});

export const updateUser = (data: TypeUser, avatarData?: Blob): UserActionTypes => ({
  type: UPDATE_USER,
  payload: {
    data,
    avatarData,
  },
});

export const updateUserSuccess = (data: TypeUser): UserActionTypes => ({
  type: UPDATE_USER_SUCCESS,
  payload: data,
});

export const loadSetups = (authorId: number): UserActionTypes => ({
  type: LOAD_SETUPS,
  payload: { authorId },
});

export const loadSetupsSuccess = (data: SetupType[]): UserActionTypes => ({
  type: LOAD_SETUPS_SUCCESS,
  payload: data,
});

export const showSpinner = (): UserActionTypes => ({
  type: SHOW_SPINNER,
});

export const hideSpinner = (): UserActionTypes => ({
  type: HIDE_SPINNER,
});

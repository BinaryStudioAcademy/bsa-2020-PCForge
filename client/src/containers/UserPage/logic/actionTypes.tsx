import { IUser } from './interfaces';

export const LOAD_USER = 'LOAD_USER';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const SHOW_SPINNER = 'SHOW_SPINNER';
export const HIDE_SPINNER = 'HIDE_SPINNER';

export interface loadUser {
  type: typeof LOAD_USER;
  payload: {
    id: string;
  };
}

export interface loadUserSuccess {
  type: typeof LOAD_USER_SUCCESS;
  payload: IUser;
}

export interface updateUser {
  type: typeof UPDATE_USER;
  payload: IUser;
}

export interface updateUserSuccess {
  type: typeof UPDATE_USER_SUCCESS;
  payload: IUser;
}

export interface showSpinner {
  type: typeof SHOW_SPINNER;
}

export interface hideSpinner {
  type: typeof HIDE_SPINNER;
}

export type UserActionTypes = hideSpinner | showSpinner | loadUser | loadUserSuccess | updateUser | updateUserSuccess;

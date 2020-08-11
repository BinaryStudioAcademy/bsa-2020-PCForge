export const LOAD_USER = 'LOAD_USER';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const SHOW_SPINNER = 'SHOW_SPINNER';
export const HIDE_SPINNER = 'HIDE_SPINNER';

interface loadUser {
  type: typeof LOAD_USER;
  payload: {};
}

interface loadUserSuccess {
  type: typeof LOAD_USER_SUCCESS;
  payload: {};
}

interface updateUser {
  type: typeof UPDATE_USER;
  payload: {};
}

interface updateUserSuccess {
  type: typeof UPDATE_USER_SUCCESS;
  payload: {};
}

interface showSpinner {
  type: typeof SHOW_SPINNER;
}

interface hideSpinner {
  type: typeof HIDE_SPINNER;
}

export type UserActionTypes = hideSpinner | showSpinner | loadUser | loadUserSuccess | updateUser | updateUserSuccess;

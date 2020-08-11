export const LOAD_USER = 'LOAD_USER';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const CANCEL_EDIT_USER = 'CANCEL_EDIT_USER';
export const SHOW_SPINNER = 'SHOW_SPINNER';
export const HIDE_SPINNER = 'HIDE_SPINNER';

interface loadUser {
  type: typeof LOAD_USER;
  payload: {
    data: {};
  };
}

interface loadUserSuccess {
  type: typeof LOAD_USER_SUCCESS;
  payload: {
    data: {};
  };
}

interface updateUser {
  type: typeof UPDATE_USER;
  payload: {
    data: {};
  };
}

interface updateUserSuccess {
  type: typeof UPDATE_USER_SUCCESS;
  payload: {
    data: {};
  };
}

interface showSpinner {
  type: typeof SHOW_SPINNER;
  payload: {
    value: boolean;
  };
}

interface hideSpinner {
  type: typeof HIDE_SPINNER;
  payload: {
    value: boolean;
  };
}

export type UserActionTypes = hideSpinner | showSpinner | loadUser | loadUserSuccess | updateUser | updateUserSuccess;

export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const VALIDATION_ERROR = 'VALIDATION_ERROR';
export const KEEP_SIGN_IN = 'KEEP_SIGN_IN';
export const LOADING_STATUS = 'LOADING_STATUS';
export const SWITCH_AUTH_PAGE = 'SWITCH_AUTH_PAGE';

interface changeEmailAction {
  type: typeof CHANGE_EMAIL,
  payload: {
    value: string,
  },
}

interface changePasswordAction {
  type: typeof CHANGE_PASSWORD,
  payload: {
    value: string,
  },
}

interface loginRequestAction {
  type: typeof LOGIN_REQUEST,
  payload: {
    email: string,
    password: string,
    keepSignedIn: boolean,
  },
}

interface registerRequestAction {
  type: typeof REGISTER_REQUEST,
  payload: {
    email: string,
    password: string,
  },
}

interface validationErrorAction {
  type: typeof VALIDATION_ERROR,
  payload: {
    errorMessage: string,
  },
}

interface keepSignedInAction {
  type: typeof KEEP_SIGN_IN,
  payload: {
    keepSignedIn: boolean,
  },
}

interface changeLoadingStatusAction {
  type: typeof LOADING_STATUS,
  payload: {
    isLoading: boolean,
  },
}

interface switchAuthPage {
  type: typeof SWITCH_AUTH_PAGE,
  payload: {
    isRegistration: boolean,
  },
}

export type AuthActionTypes =
  changeEmailAction |
  changePasswordAction |
  loginRequestAction |
  registerRequestAction |
  validationErrorAction |
  keepSignedInAction |
  changeLoadingStatusAction |
  switchAuthPage;

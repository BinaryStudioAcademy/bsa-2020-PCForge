export const AUTH_CHANGE_EMAIL = 'AUTH_CHANGE_EMAIL';
export const AUTH_CHANGE_PASSWORD = 'AUTH_CHANGE_PASSWORD';
export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST';
export const AUTH_REGISTER_REQUEST = 'AUTH_REGISTER_REQUEST';
export const AUTH_VALIDATION_ERROR = 'AUTH_VALIDATION_ERROR';
export const AUTH_KEEP_SIGN_IN = 'AUTH_KEEP_SIGN_IN';
export const AUTH_LOADING_STATUS = 'AUTH_LOADING_STATUS';
export const AUTH_SWITCH_AUTH_PAGE = 'AUTH_SWITCH_AUTH_PAGE';

interface changeEmailAction {
  type: typeof AUTH_CHANGE_EMAIL;
  payload: {
    value: string;
  };
}

interface changePasswordAction {
  type: typeof AUTH_CHANGE_PASSWORD;
  payload: {
    value: string;
  };
}

interface loginRequestAction {
  type: typeof AUTH_LOGIN_REQUEST;
  payload: {
    email: string;
    password: string;
    keepSignedIn: boolean;
  };
}

interface registerRequestAction {
  type: typeof AUTH_REGISTER_REQUEST;
  payload: {
    email: string;
    password: string;
  };
}

interface validationErrorAction {
  type: typeof AUTH_VALIDATION_ERROR;
  payload: {
    errorMessage: string;
  };
}

interface keepSignedInAction {
  type: typeof AUTH_KEEP_SIGN_IN;
  payload: {
    keepSignedIn: boolean;
  };
}

interface changeLoadingStatusAction {
  type: typeof AUTH_LOADING_STATUS;
  payload: {
    isLoading: boolean;
  };
}

interface switchAuthPage {
  type: typeof AUTH_SWITCH_AUTH_PAGE;
  payload: {
    isRegistration: boolean;
  };
}

export type AuthActionTypes =
  | changeEmailAction
  | changePasswordAction
  | loginRequestAction
  | registerRequestAction
  | validationErrorAction
  | keepSignedInAction
  | changeLoadingStatusAction
  | switchAuthPage;
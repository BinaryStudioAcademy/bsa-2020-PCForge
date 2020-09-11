import { IAuthState } from 'containers/Auth/interfaces';
import {
  AuthActionTypes,
  AUTH_CHANGE_EMAIL,
  AUTH_CHANGE_PASSWORD,
  AUTH_CHANGE_CONFIRM_PASSWORD,
  AUTH_VALIDATION_ERROR,
  AUTH_KEEP_SIGN_IN,
  AUTH_LOADING_STATUS,
  AUTH_SWITCH_AUTH_PAGE,
  AUTH_REGISTRATION_SUCCESS,
  AUTH_REGISTRATION_ERROR,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_GOOGLE_AUTH_SUCCESS,
  AUTH_GOOGLE_AUTH_FAILURE,
  AUTH_LOGOUT,
  AUTH_SUCCESS_MESSAGE,
} from './actionTypes';

const initialState: IAuthState = {
  user: null,
  email: '',
  password: '',
  confirmPassword: '',
  errorMessage: '',
  successMessage: '',
  isRegistration: false,
  keepSignedIn: false,
  isLoading: false,
};

export function AuthReducer(state: IAuthState = initialState, action: AuthActionTypes): IAuthState {
  switch (action.type) {
    case AUTH_CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload.value,
      };
    case AUTH_CHANGE_PASSWORD:
      return {
        ...state,
        password: action.payload.value,
      };
    case AUTH_CHANGE_CONFIRM_PASSWORD:
      return {
        ...state,
        confirmPassword: action.payload.value,
      };
    case AUTH_VALIDATION_ERROR:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        successMessage: '',
      };
    case AUTH_KEEP_SIGN_IN:
      return {
        ...state,
        keepSignedIn: action.payload.keepSignedIn,
      };
    case AUTH_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case AUTH_SWITCH_AUTH_PAGE:
      return {
        ...state,
        email: '',
        password: '',
        confirmPassword: '',
        errorMessage: '',
        successMessage: '',
        isRegistration: action.payload.isRegistration,
      };
    case AUTH_LOGIN_SUCCESS:
    case AUTH_GOOGLE_AUTH_SUCCESS:
      return {
        ...state,
        ...action.payload,
        email: '',
        password: '',
        errorMessage: '',
        successMessage: '',
      };
    case AUTH_LOGIN_FAILURE:
    case AUTH_GOOGLE_AUTH_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.message,
      };
    case AUTH_REGISTRATION_SUCCESS:
      return {
        ...state,
        ...action.payload,
        errorMessage: '',
      };
    case AUTH_REGISTRATION_ERROR:
      return {
        ...state,
        errorMessage: action.payload.message,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        user: null,
      };
    case AUTH_SUCCESS_MESSAGE:
      return {
        ...state,
        errorMessage: '',
        successMessage: action.payload.successMessage,
      };
    default:
      return state;
  }
}

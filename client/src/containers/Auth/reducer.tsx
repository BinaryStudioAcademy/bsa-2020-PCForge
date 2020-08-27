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
} from './actionTypes';

const initialState: IAuthState = {
  user: null,
  email: '',
  password: '',
  confirmPassword: '',
  errorMessage: '',
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
        isRegistration: action.payload.isRegistration,
      };
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        email: '',
        password: '',
      };
    case AUTH_LOGIN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.message,
      };
    case AUTH_REGISTRATION_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case AUTH_REGISTRATION_ERROR:
      return {
        ...state,
        errorMessage: action.payload.message,
      };
    default:
      return state;
  }
}

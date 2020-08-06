import {IAuthState} from "containers/Auth/interfaces";
import {
  AuthActionTypes,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  VALIDATION_ERROR,
  KEEP_SIGN_IN,
  LOADING_STATUS, SWITCH_AUTH_PAGE
} from "./actionTypes";

const initialState: IAuthState = {
  email: '',
  password: '',
  errorMessage: '',
  isRegistration: false,
  keepSignedIn: false,
  isLoading: false
};

export function AuthReducer(state: IAuthState = initialState, action: AuthActionTypes): IAuthState {
  switch (action.type) {
    case CHANGE_EMAIL:
      return Object.assign({}, state, {
        email: action.payload.value
      });
    case CHANGE_PASSWORD:
      return Object.assign({}, state, {
        password: action.payload.value
      });
    case VALIDATION_ERROR:
      return Object.assign({}, state, {
        errorMessage: action.payload.errorMessage
      });
    case KEEP_SIGN_IN:
      return Object.assign({}, state, {
        keepSignedIn: action.payload.keepSignedIn
      });
    case LOADING_STATUS:
      return Object.assign({}, state, {
        isLoading: action.payload.isLoading
      });
    case SWITCH_AUTH_PAGE:
      return Object.assign({}, state, {
        email: '',
        password: '',
        errorMessage: '',
        isRegistration: action.payload.isRegistration
      });
    default:
      return state;
  }
}

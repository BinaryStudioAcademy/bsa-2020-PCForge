import {IAuthState} from './interfaces';
import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AuthActionTypes,
  AUTH_SET_LOADER_STATE,
  AUTH_SIGN_OUT,
} from './actionTypes';

const initialState: IAuthState = {
  user: null,
  email: '',
  password: '',
  errorMessage: '',
  loading: false,
};

export function AuthReducer(
  state: IAuthState = initialState,
  action: AuthActionTypes,
): IAuthState {
  console.log('reducer', action);
  switch (action.type) {
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
    case AUTH_SET_LOADER_STATE:
      return {
        ...state,
        loading: action.payload,
      };
    case AUTH_SIGN_OUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

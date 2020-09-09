import {IAuthState} from './interfaces';
import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AuthActionTypes,
  AUTH_SET_LOADER_STATE,
} from './actionTypes';

const initialState: IAuthState = {
  user: null,
  email: 'admin@pcforge.com',
  password: 'bsa2020',
  errorMessage: '',
  loading: false,
};

export function AuthReducer(
  state: IAuthState = initialState,
  action: AuthActionTypes,
): IAuthState {
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
    default:
      return state;
  }
}

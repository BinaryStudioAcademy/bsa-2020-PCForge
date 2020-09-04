import { IAuthState } from './interfaces';
import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AuthActionTypes,
} from './actionTypes';

const initialState: IAuthState = {
//   user: null,
  email: '',
  password: '',
//   confirmPassword: '',
//   errorMessage: '',
//   isRegistration: false,
//   keepSignedIn: false,
//   isLoading: false,
};

export function AuthReducer(state: IAuthState = initialState, action: AuthActionTypes): IAuthState {
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
        // errorMessage: action.payload.message,
      };
    default:
      return state;
  }
}

import { AuthActionTypes } from './/actionTypes';
import { UserLoginAttributes, User } from 'common/models/user';
import { RouterItemProps } from 'common/configs/routing';

export interface IAuthProps extends RouterItemProps {
  state: IAuthState;
  loginRequest: (payload: UserLoginAttributes) => AuthActionTypes;
}

export interface IAuthState {
  user: User | null;
  email: string;
  password: string;
//   confirmPassword: string;
//   keepSignedIn: boolean;
//   isRegistration: boolean;
//   isLoading: boolean;
  errorMessage: string;
}

export interface IAuthPayload {
  email: string;
  password: string;
  keepSignedIn: boolean;
}

export interface IRegPayload {
  email: string;
  password: string;
}

import {AuthActionTypes} from './actionTypes';
import {UserLoginAttributes, User} from 'common/models/user.model';
import {RouterItemProps} from 'routing';

export interface IAuthProps extends RouterItemProps {
  state: IAuthState;
  loginRequest: (payload: UserLoginAttributes) => AuthActionTypes;
}

export interface IAuthState {
  user: User | null;
  email: string;
  password: string;
  loading: boolean;
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

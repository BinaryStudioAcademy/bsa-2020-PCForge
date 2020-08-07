import { AuthActionTypes } from 'containers/Auth/actionTypes';

export interface IAuthProps {
  authState: IAuthState;
  changeEmail: (value: string) => AuthActionTypes;
  changePassword: (value: string) => AuthActionTypes;
  loginRequest: (email: string, password: string, keepSignedIn: boolean) => AuthActionTypes;
  registerRequest: (email: string, password: string) => AuthActionTypes;
  validationError: (errorMessage: string) => AuthActionTypes;
  keepSignedIn: (keepSignedIn: boolean) => AuthActionTypes;
  switchAuthPage: (isRegistration: boolean) => AuthActionTypes;
}

export interface IAuthState {
  email: string;
  password: string;
  keepSignedIn: boolean;
  isRegistration: boolean;
  isLoading: boolean;
  errorMessage: string;
}

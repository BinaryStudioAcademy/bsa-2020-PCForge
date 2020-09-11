import { AuthActionTypes } from 'containers/Auth/actionTypes';
import { User } from 'common/models/user';
import { ResetPasswordActions } from '../ResetPassword/actionTypes';

export interface IAuthProps {
  authState: IAuthState;
  changeEmail: (value: string) => AuthActionTypes;
  changePassword: (value: string) => AuthActionTypes;
  changeConfirmPassword: (value: string) => AuthActionTypes;
  loginRequest: (email: string, password: string, keepSignedIn: boolean) => AuthActionTypes;
  registerRequest: (email: string, password: string) => AuthActionTypes;
  validationError: (errorMessage: string) => AuthActionTypes;
  keepSignedIn: (keepSignedIn: boolean) => AuthActionTypes;
  switchAuthPage: (isRegistration: boolean) => AuthActionTypes;
  googleAuthRequest: (payload: { token: string }) => AuthActionTypes;
  setResetPasswordRequestSuccess: (success: boolean) => ResetPasswordActions;
}

export interface IAuthState {
  user: User | null;
  email: string;
  password: string;
  confirmPassword: string;
  keepSignedIn: boolean;
  isRegistration: boolean;
  isLoading: boolean;
  errorMessage: string;
  successMessage: string;
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

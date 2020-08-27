import {
  VERIFY_EMAIL_FAILURE,
  VERIFY_EMAIL_SUCCESS,
  IVerifyEmailActions
} from './actionTypes';

export interface IEmailVerificationState {
  verificationState: 'loading' | 'verified' | 'error';
}

const initialState: IEmailVerificationState = {
  verificationState: 'loading',
};

export function EmailVerifyReducer(state: IEmailVerificationState = initialState, action: IVerifyEmailActions): IEmailVerificationState {
  switch (action.type) {
    case VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        verificationState: 'verified'
      }
    case VERIFY_EMAIL_FAILURE:
      return {
        ...state,
        verificationState: 'error'
      }
    default:
      return state;
  }
}

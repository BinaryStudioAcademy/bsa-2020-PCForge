export const VERIFY_EMAIL = 'VERIFY_EMAIL';
export const VERIFY_EMAIL_SUCCESS = 'VERIFY_EMAIL_SUCCESS';
export const VERIFY_EMAIL_FAILURE = 'VERIFY_EMAIL_FAILURE';

export interface IVerifyEmail {
  type: typeof VERIFY_EMAIL;
  payload: {
    token: string;
  };
}

export interface IVerifyEmailSuccess {
  type: typeof VERIFY_EMAIL_SUCCESS;
}

export interface IVerifyEmailFailure {
  type: typeof VERIFY_EMAIL_FAILURE;
}

export type IVerifyEmailActions = IVerifyEmail | IVerifyEmailSuccess | IVerifyEmailFailure;

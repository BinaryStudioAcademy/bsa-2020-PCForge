import { VERIFY_EMAIL } from './actionTypes';

export const verifyEmail = (payload: { token: string }) => ({
  type: VERIFY_EMAIL,
  payload,
});

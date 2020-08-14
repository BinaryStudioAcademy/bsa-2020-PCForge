import { UserAttributes } from "../data/models/user";

export const deleteUserSecureFields = (user: UserAttributes) => {
  delete user.password;
  delete user.verifyEmailToken;
  delete user.resetPasswordToken;
  return user;
}

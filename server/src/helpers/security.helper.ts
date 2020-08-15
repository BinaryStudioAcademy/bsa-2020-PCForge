import { UserAttributes, UserModel } from "../data/models/user";

export const deleteUserSecureFields = (user: UserModel): UserAttributes => {
  const userAttr: UserAttributes = user.toJSON() as UserAttributes;
  delete userAttr.password;
  delete userAttr.verifyEmailToken;
  delete userAttr.resetPasswordToken;
  return userAttr;
}

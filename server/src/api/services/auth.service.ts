import { UserCreationAttributes, UserModel } from '../../data/models/user';
import { getRandomStringToken } from '../../helpers/crypto.helper';
import { removeNonUrlChars, triggerServerError } from '../../helpers/global.helper';
import { UserFilter } from '../../data/repositories/filters/user.filter';

interface IMailService {
  sendResetPassword: (obj: { to: string; userId: number; token: string }) => Promise<unknown>;
}

interface IUserService {
  getByEmail: (email: string) => Promise<UserModel>;
  getUser: (id: number | string) => Promise<UserModel>;
  setUserById: (id: string | number, user: UserCreationAttributes) => Promise<UserModel>;
  updateUser: (id: string | number, user: UserCreationAttributes) => Promise<UserModel>;
  getUserByFilter: (filter: UserFilter) => Promise<UserModel | null>;
}

export class AuthService {
  constructor(private mailService: IMailService, private userService: IUserService) {}

  public async resetPasswordByEmail(email: string): Promise<void | never> {
    const user = await this.userService.getByEmail(email);
    if (!user) triggerServerError(`User with email ${email} was not found`, 400);
    const token = removeNonUrlChars(getRandomStringToken());
    await this.userService.setUserById(user.id, { ...user, resetPasswordToken: token });
    await this.mailService.sendResetPassword({ to: email, userId: user.id, token: token });
  }

  async verifyEmail(emailVerificationToken: string): Promise<UserModel> {
    const user = await this.userService.getUserByFilter({ emailVerificationToken });
    if (!user) {
      triggerServerError('Unable to verify email by this link', 400);
    }
    const idString: string = user.id.toString();
    const data = {
      emailVerified: true,
      verifyEmailToken: null,
    } as UserCreationAttributes;
    return this.userService.updateUser(idString, data);
  }

  public async resetPassword({
    userId,
    token,
    newPassword,
  }: {
    userId: string;
    token: string;
    newPassword: string;
  }): Promise<void | never> {
    const user = await this.userService.getUser(userId);
    if (!user) triggerServerError(`User with id ${userId} was not found`, 400);
    const isTokensEqual = token === user.resetPasswordToken;
    if (!isTokensEqual) triggerServerError(`Token is not valid`, 400);
    await this.userService.updateUser(userId, { ...user, password: newPassword });
  }
}

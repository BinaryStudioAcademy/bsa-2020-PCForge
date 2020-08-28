import { UserCreationAttributes, UserModel } from '../../data/models/user';
import { getRandomStringToken } from '../../helpers/crypto.helper';
import { removeNonUrlChars, triggerServerError } from '../../helpers/global.helper';
import { UserFilter } from '../../data/repositories/filters/user.filter';
import { SendMessageStatus } from './mail.service';

interface IMailService {
  sendResetPassword: (obj: { to: string; userId: number; token: string }) => Promise<unknown>;
  sendEmailVerification(verificationToken: string, to: string): Promise<SendMessageStatus>;
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
    console.log(user.name);
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

  async sendEmailConfirmation(id: string): Promise<SendMessageStatus> {
    const user = await this.userService.getUser(id);
    if (!user) {
      triggerServerError('User does not exists', 400);
    }
    return this.mailService.sendEmailVerification(user.verifyEmailToken, user.email);
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

import { UserCreationAttributes, UserModel } from '../../data/models/user';
import { getRandomStringToken } from '../../helpers/crypto.helper';
import { removeNonUrlChars, triggerServerError } from '../../helpers/global.helper';

interface IMailService {
  sendResetPassword: (obj: { to: string; userId: number; token: string }) => Promise<unknown>;
}

interface IUserService {
  getByEmail: (email: string) => Promise<UserModel>;
  setUserById: (id: number, user: UserCreationAttributes) => Promise<UserModel>;
}

export class AuthService {
  constructor(private mailService: IMailService, private userService: IUserService) {}

  public async resetPasswordByEmail(email: string): Promise<void | never> {
    const user = await this.userService.getByEmail(email);
    if (!user) triggerServerError(`User with email ${email} was not found`, 400);
    const token = removeNonUrlChars(getRandomStringToken());
    this.userService.setUserById(user.id, { ...user, resetPasswordToken: token });
    this.mailService.sendResetPassword({ to: email, userId: user.id, token: token });
  }
}

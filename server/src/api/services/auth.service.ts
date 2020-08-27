import { UserRepository } from '../../data/repositories/user.repository';
import { UserModel, UserCreationAttributes } from '../../data/models/user';
import { triggerServerError } from '../../helpers/global.helper';

export class AuthService {
  constructor(private repository: UserRepository) {}

  async verifyEmail(emailVerificationToken: string): Promise<UserModel> {
    const user = await this.repository.getOneByFilter({ emailVerificationToken });
    if (!user) {
      triggerServerError('Unable to verify email by this link', 400);
    }
    const idString: string = user.id.toString();
    const data = {
      emailVerified: true,
      verifyEmailToken: null,
    } as UserCreationAttributes;
    return this.repository.updateById(idString, data);
  }
}

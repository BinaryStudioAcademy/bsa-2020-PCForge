import { UserModel } from '../../data/models/user';
import { UserRepository } from '../../data/repositories/user.repository';

export class UserService {
  constructor(private repository: UserRepository) {}

  async getUserByLoginOrEmail(login: string): Promise<UserModel> {
    const user = await this.repository.getUserByUserNameOrEmail(login);
    return user;
  }
}

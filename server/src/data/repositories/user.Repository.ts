import { UserModel, UserStatic } from '../models/user';
import { Op } from 'sequelize';

export class UserRepository {
  constructor(private model: UserStatic) {}

  async getUserByUserNameOrEmail(login: string): Promise<UserModel> {
    const user = await this.model.findOne({
      where: {
        [Op.or]: [{ name: login }, { email: login }],
      },
    });
    return user;
  }
}

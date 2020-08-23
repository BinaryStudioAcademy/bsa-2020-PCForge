import { UserModel, UserStatic, UserCreationAttributes } from '../models/user';
import { BaseRepository, RichModel } from './base.repository';
import { Op } from 'sequelize';
import { IFilter } from './filters/base.filter';

export class UserRepository extends BaseRepository<UserModel, IFilter> {
  constructor(private model: UserStatic) {
    super(<RichModel>model, IFilter);
  }

  async getAllUsers(): Promise<UserModel[]> {
    const user = await this.getAll();
    return user.data;
  }

  async getUserByUserNameOrEmail(login: string): Promise<UserModel> {
    const user = await this.model.findOne({
      where: {
        [Op.or]: [{ name: login }, { email: login }],
      },
    });
    return user;
  }
}

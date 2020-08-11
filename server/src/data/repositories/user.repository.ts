import { UserModel, UserStatic, UserDataAttributes } from '../models/user';
import { BaseRepository, RichModel } from './base.repository';
import { Op } from 'sequelize';

export class UserRepository extends BaseRepository<UserModel> {
  constructor(private model: UserStatic) {
    super(<RichModel>model);
  }

  async getAllUsers(): Promise<UserModel[]> {
    const user = await this.getAll();
    return user.data;
  }

  async create(attributes: UserDataAttributes): Promise<UserModel> {
    const user = await this.model.create(attributes);
    return user;
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

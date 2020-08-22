import { UserModel, UserStatic, UserCreationAttributes } from '../models/user';
import { BaseRepository, RichModel, IWithMeta } from './base.repository';
import { Op } from 'sequelize';
import { IFilter } from './filters/base.filter';

export class UserRepository extends BaseRepository<UserModel, IFilter> {
  constructor(private model: UserStatic) {
    super(<RichModel>model, IFilter);
  }

  async getAllUsers(): Promise<IWithMeta<UserModel>> {
    const users = await this.getAll();
    return users;
  }

  async create(attributes: UserCreationAttributes): Promise<UserModel> {
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

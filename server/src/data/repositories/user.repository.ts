import { UserModel, UserStatic, UserCreationAttributes } from '../models/user';
import { BaseRepository, RichModel, IWithMeta } from './base.repository';
import { Op, Sequelize } from 'sequelize';
import { IFilter } from './filters/base.filter';

export class UserRepository extends BaseRepository<UserModel, UserCreationAttributes, IFilter> {
  constructor(private model: UserStatic) {
    super(<RichModel>model, IFilter);
  }

  async getAllUsers(): Promise<IWithMeta<UserModel>> {
    const users = await this.getAll();
    return users;
  }
  async getUserById(id: string): Promise<UserModel> {
    const user = await this.getById(id);
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

  async activateDeactivate(id: string): Promise<UserModel> {
    const [, user] = await this.model.update(
      { isActive: Sequelize.literal('NOT "isActive"') },
      { where: { id }, returning: true }
    );
    return user[0];
  }
}

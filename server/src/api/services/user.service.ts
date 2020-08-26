const bcrypt = require('bcrypt');
import { UserModel, UserCreationAttributes } from '../../data/models/user';
import { UserRepository } from '../../data/repositories/user.repository';
import { triggerServerError } from '../../helpers/global.helper';
import { BaseService } from './base.service';
import { IWithMeta } from '../../data/repositories/base.repository';

interface UserCreateAttributes {
  name: string;
  password: string;
  email: string;
  avatar: string;
}

export class UserService extends BaseService<UserModel, UserCreationAttributes, UserRepository> {
  constructor(private repository: UserRepository) {
    super(repository);
  }

  async getUserByLoginOrEmail(login: string, password: string): Promise<UserModel> {
    if (!login || (!password && password !== '')) {
      throw { error: `You are missing login or password`, status: 400 };
    }
    const user = await this.repository.getUserByUserNameOrEmail(login);
    const isPasswordValidForUser = user ? await bcrypt.compare(password.toLowerCase(), user.password.toLowerCase()) : 0;
    if (!isPasswordValidForUser) {
      throw {
        error: `Invalid login or password`,
        status: 401,
      };
    }
    return user;
  }

  async getUsers(): Promise<IWithMeta<UserModel>> {
    const users = await this.repository.getAllUsers();
    return users;
  }

  async getUser(id: string): Promise<UserModel> {
    const user = await this.repository.getUserById(id);
    if (!user) {
      triggerServerError(`User with id: ${id} does not exists`, 404);
    }
    return user;
  }

  async createUser(inputUser: UserCreateAttributes): Promise<UserModel> {
    const userAttributes: UserCreationAttributes = {
      ...inputUser,
      isAdmin: false,
      password: this.hash(inputUser.password),
      verifyEmailToken: null,
      resetPasswordToken: null,
    };
    const user = await super.create(userAttributes);
    return user;
  }

  async updateUser(id: string, inputUser: UserCreateAttributes): Promise<UserModel> {
    const oldUser = await this.repository.getById(id);
    if (!oldUser) {
      triggerServerError('User with id: ${id} does not exists', 404);
    }
    if (inputUser.password) {
      inputUser.password = this.hash(inputUser.password);
    }
    const userAttributes: UserCreationAttributes = {
      ...inputUser,
      isAdmin: false,
      password: this.hash(inputUser.password),
      verifyEmailToken: null,
      resetPasswordToken: null,
    };
    const user = await this.repository.updateById(id, userAttributes);
    return user;
  }

  async deleteUser(id: string): Promise<UserModel> {
    return await super.deleteById(id);
  }

  hash(password: string): string {
    const saltRounds = 10;
    return bcrypt.hashSync(password, saltRounds);
  }
}

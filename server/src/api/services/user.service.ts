const bcrypt = require('bcrypt');
import genRandomString from 'crypto-random-string';
import { UserModel, UserCreationAttributes } from '../../data/models/user';
import { UserRepository } from '../../data/repositories/user.repository';
import { triggerServerError } from '../../helpers/global.helper';
import { BaseService } from './base.service';
import { IWithMeta } from '../../data/repositories/base.repository';
import { encryptSync } from '../../helpers/crypto.helper';
import { UserFilter } from '../../data/repositories/filters/user.filter';

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
    const isPasswordValidForUser = user ? await bcrypt.compare(password, user.password) : 0;
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
      verifyEmailToken: genRandomString(33),
      resetPasswordToken: null,
    };
    const user = await super.create(userAttributes);
    return user;
  }

  async updateUser(id: string | number, inputUser: UserCreateAttributes): Promise<UserModel> {
    id = id.toString();
    const oldUser = await this.repository.getById(id);
    if (!oldUser) {
      triggerServerError(`User with id: ${id} does not exist`, 404);
    }
    if (inputUser.password) {
      inputUser.password = this.hash(inputUser.password);
    }
    const userAttributes = {
      ...inputUser,
      isAdmin: false,
      resetPasswordToken: null,
    } as UserCreationAttributes;
    const user = await this.repository.updateById(id, userAttributes);
    return user;
  }

  async setUserById(id: string | number, newUser: UserCreationAttributes): Promise<UserModel> {
    id = id.toString();
    const user = await this.repository.updateById(id, newUser);
    return user;
  }

  async getUserByFilter(filter: UserFilter): Promise<UserModel | null> {
    return this.repository.getOneByFilter(filter);
  }

  async getByEmail(email: string): Promise<UserModel> {
    const user = await this.repository.getOneByFilter({ email });
    return user;
  }

  async deleteUser(id: string): Promise<UserModel> {
    return await super.deleteById(id);
  }

  hash(password: string): string {
    return encryptSync(password);
  }
}

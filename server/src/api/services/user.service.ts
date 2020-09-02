const bcrypt = require('bcrypt');
import { UserModel, UserCreationAttributes, UserAttributes } from '../../data/models/user';
import { UserRepository } from '../../data/repositories/user.repository';
import { triggerServerError } from '../../helpers/global.helper';
import { BaseService } from './base.service';
import { IWithMeta } from '../../data/repositories/base.repository';
import { encryptSync } from '../../helpers/crypto.helper';

interface UserCreateAttributes {
  name: string;
  password: string;
  email: string;
  avatar: string;
}

interface UserUpdateAttributes extends UserCreateAttributes {
  currentPassword?: string;
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
        status: 403,
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
      triggerServerError(`User with id: ${id} does not exists`, 400);
    }
    return user;
  }

  async createUser(inputUser: UserCreateAttributes): Promise<UserModel> {
    const user = await this.getByEmail(inputUser.email);
    if (user) {
      triggerServerError('User with given email exists', 403);
    } else {
      const userAttributes: UserCreationAttributes = {
        ...inputUser,
        isAdmin: false,
        password: this.hash(inputUser.password),
        verifyEmailToken: genRandomString(33),
        resetPasswordToken: null,
      };
      return await super.create(userAttributes);
    }
  }

  async updateUser(id: string | number, inputUser: UserUpdateAttributes): Promise<UserModel> {
    if (!Object.keys(inputUser).length) {
      triggerServerError('No valid fields to update specified', 400);
    }
    id = id.toString();
    const oldUser = await this.repository.getById(id);
    if (!oldUser) {
      triggerServerError('User with id: ${id} does not exists', 404);
    }
    if (inputUser.password) {
      const validForPasswordUpdate =
        inputUser.currentPassword && (await bcrypt.compare(inputUser.currentPassword, oldUser.password));
      if (!validForPasswordUpdate) {
        throw {
          error: `Invalid current password`,
          status: 401,
        };
      }
      inputUser.password = this.hash(inputUser.password);
    }

    const userAttributes = {
      ...inputUser,
      isAdmin: false,
      password: inputUser.password,
      verifyEmailToken: null,
      resetPasswordToken: null,
    };
    const user = await this.repository.updateById(id, userAttributes);
    return user;
  }

  async setUserById(id: string | number, newUser: UserCreationAttributes): Promise<UserModel> {
    const user = await this.repository.updateById(id, newUser);
    return user;
  }

  async getByEmail(email: string): Promise<UserModel> {
    const user = await this.repository.get({ email });
    return user;
  }

  async deleteUser(id: string): Promise<UserModel> {
    return await super.deleteById(id);
  }

  async activateDeactivateUser(id: string): Promise<UserModel> {
    return await this.repository.activateDeactivate(id);
  }

  hash(password: string): string {
    return encryptSync(password);
  }
}

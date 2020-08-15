const bcrypt = require('bcrypt');
import { UserModel, UserCreationAttributes, UserAttributes } from '../../data/models/user';
import { UserRepository } from '../../data/repositories/user.repository';
import { deleteUserSecureFields } from '../../helpers/security.helper';

interface UserCreateAttributes {
  name: string;
  password: string;
  email: string;
  avatar: string;
}

export class UserService {
  constructor(private repository: UserRepository) {}

  async getUserByLoginOrEmail(login: string, password: string): Promise<UserModel> {
    if (!login || !password) {
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

  async getUsers(): Promise<UserAttributes[]> {
    const users = await this.repository.getAllUsers();
    const usersPublicFields = users.map(deleteUserSecureFields);
    return usersPublicFields;
  }

  async getUser(id: string): Promise<UserAttributes> {
    const user = await this.repository.getById(id);
    const userPublicFields = deleteUserSecureFields(user);
    return userPublicFields;
  }

  async createUser(inputUser: UserCreateAttributes): Promise<UserAttributes> {
    const userAttributes: UserCreationAttributes = {
      ...inputUser,
      isAdmin: false,
      password: this.hash(inputUser.password),
      verifyEmailToken: null,
      resetPasswordToken: null,
    };
    const user = await this.repository.create(userAttributes);
    const userPublicFields = deleteUserSecureFields(user);
    return userPublicFields;
  }

  async updateUser(id: string, inputUser: UserCreateAttributes, oldPassword?: string): Promise<UserAttributes> {
    const oldUser = await this.repository.getById(id);
    if (!oldUser) {
      throw new Error(`User with id: ${id} does not exist`);
    }

    if (inputUser.password || inputUser.email !== oldUser.email) {
      const passwordsMatch = await bcrypt.compare(oldPassword, oldUser.password);
      if (!passwordsMatch) {
        throw new Error('Invalid password');
      }
    }

    if (inputUser.password) {
      inputUser.password = this.hash(inputUser.password);
    }

    const user = await this.repository.updateById(id, inputUser);
    const userPublicFields = deleteUserSecureFields(user);
    return userPublicFields;
  }

  async deleteUser(id: string): Promise<void> {
    await this.repository.deleteById(id);
  }

  hash(password: string): string {
    const saltRounds = 10;
    return bcrypt.hashSync(password, saltRounds);
  }
}

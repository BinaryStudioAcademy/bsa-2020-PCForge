const bcrypt = require('bcrypt');
import { UserModel, UserDataAttributes } from '../../data/models/user';
import { UserRepository } from '../../data/repositories/user.repository';

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

  async getUsers(): Promise<UserModel[]> {
    const users = await this.repository.getAllUsers();
    return users;
  }

  async getUser(id: string): Promise<UserModel> {
    const user = await this.repository.getById(id);
    return user;
  }

  async createUser(inputUser: UserCreateAttributes): Promise<UserModel> {
    const userAttributes: UserDataAttributes = {
      ...inputUser,
      isAdmin: false,
      password: this.hash(inputUser.password),
      verifyEmailToken: null,
      resetPasswordToken: null,
    };
    const user = await this.repository.create(userAttributes);
    return user;
  }

  async updateUser(id: string, inputUser: UserCreateAttributes): Promise<UserModel> {
    const oldUser = this.repository.getById(id);
    if (!oldUser) {
      throw new Error(`User with id: ${id} does not exists`);
    }

    const user = await this.repository.updateById(id, inputUser);
    return user;
  }

  async deleteUser(id: string): Promise<void> {
    await this.repository.deleteById(id);
  }

  hash(password: string): string {
    const saltRounds = 10;
    return bcrypt.hashSync(password, saltRounds);
  }
}

import {
  UserGameCreationAttributes,
  UserGameCreationResult,
  UserGameDeleteAttributes,
  UserGameModel,
} from '../../data/models/usergame';
import { UserGameRepository } from '../../data/repositories/usergame.repository';
import { IFilter } from '../../data/repositories/filters/base.filter';
import { IWithMeta } from '../../data/repositories/base.repository';

export class UserGameService {
  constructor(private repository: UserGameRepository) {}

  async getUserGames(userId: string, filter: IFilter): Promise<IWithMeta<UserGameModel>> {
    return await this.repository.getUserGames(userId, filter);
  }

  async findOrCreateUserGame(inputUserGame: UserGameCreationAttributes): Promise<UserGameCreationResult> {
    return await this.repository.findOrCreateUserGame(inputUserGame);
  }

  async deleteUserGame(inputUserGame: UserGameDeleteAttributes): Promise<number> {
    return await this.repository.deleteUserGame(inputUserGame);
  }
}

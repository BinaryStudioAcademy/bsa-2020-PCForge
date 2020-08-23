import { UserGameCreationAttributes, UserGameModel } from '../../data/models/usergame';
import { UserGameRepository } from '../../data/repositories/usergame.repository';

export class UserGameService {
  constructor(private repository: UserGameRepository) {}

  async createUserGame(inputUserGame: UserGameCreationAttributes): Promise<UserGameModel> {
    return await this.repository.createUserGame(inputUserGame);
  }
}

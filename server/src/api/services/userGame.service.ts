import {
  UserGameCreationAttributes,
  UserGameCreationResult,
  UserGameDeleteAttributes,
  UserGameModel,
} from '../../data/models/usergame';
import { UserGameRepository } from '../../data/repositories/usergame.repository';
import { IFilter } from '../../data/repositories/filters/base.filter';
import { IWithMeta } from '../../data/repositories/base.repository';
import { BaseService } from './base.service';
import { UserRepository } from '../../data/repositories/user.repository';
import { triggerServerError } from '../../helpers/global.helper';
import { GameRepository } from '../../data/repositories/game.repository';

export class UserGameService extends BaseService<UserGameModel, UserGameCreationAttributes, UserGameRepository> {
  constructor(
    private repository: UserGameRepository,
    private userRepository: UserRepository,
    private gameRepository: GameRepository
  ) {
    super(repository);
  }

  async getUserGames(userId: string, filter: IFilter): Promise<IWithMeta<UserGameModel>> {
    const user = await this.userRepository.getById(userId);
    if (!user) triggerServerError(`User with id: ${userId} was not found`, 400);
    return await this.repository.getUserGames(userId, filter);
  }

  async findOrCreateUserGame(inputUserGame: UserGameCreationAttributes): Promise<UserGameCreationResult> {
    const game = await this.gameRepository.getById(inputUserGame.gameId);
    if (!game) triggerServerError(`Game with id: ${inputUserGame.gameId} was not found`, 400);
    const user = await this.userRepository.getById(inputUserGame.userId);
    if (!user) triggerServerError(`User with id: ${inputUserGame.userId} was not found`, 400);
    return await this.repository.findOrCreateUserGame(inputUserGame);
  }

  async deleteUserGame(inputUserGame: UserGameDeleteAttributes): Promise<UserGameModel> {
    const game = await this.gameRepository.getById(inputUserGame.gameId);
    if (!game) triggerServerError(`Game with id: ${inputUserGame.gameId} was not found`, 400);
    const user = await this.userRepository.getById(inputUserGame.userId);
    if (!user) triggerServerError(`User with id: ${inputUserGame.userId} was not found`, 400);
    return await this.repository.deleteUserGame(inputUserGame);
  }
}

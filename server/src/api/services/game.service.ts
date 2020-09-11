import { GameCreationAttributes, GameModel } from '../../data/models/game';
import { IWithMeta } from '../../data/repositories/base.repository';
import { IGameFilter } from '../../data/repositories/filters/game.filter';
import { GameRepository } from '../../data/repositories/game.repository';
import { triggerServerError } from '../../helpers/global.helper';
import { BaseService } from './base.service';
import { IGamedMiddleware } from '../middlewares/game.middleware';

export class GameService extends BaseService<GameModel, GameCreationAttributes, GameRepository> {
  constructor(private repository: GameRepository) {
    super(repository);
  }

  async getGameById(id: string, requestingUserId?: number): Promise<GameModel> {
    const game = await this.repository.getGameById(id, requestingUserId);
    if (!game) {
      triggerServerError(`Game with id: ${id} does not exists`, 404);
    }
    return game;
  }

  async getAllGames(filter: IGameFilter): Promise<IWithMeta<GameModel>> {
    const games = await this.repository.getAllGames(filter);
    return games;
  }

  async createGame(inputGame: GameCreationAttributes, gameMiddleware: IGamedMiddleware): Promise<GameModel> {
    await gameMiddleware(inputGame);
    const game = await super.create(inputGame);
    return game;
  }

  async updateGameById(
    inputGame: { id: string; data: GameCreationAttributes },
    gameMiddleware: IGamedMiddleware
  ): Promise<GameModel> {
    const { id, data } = inputGame;
    await gameMiddleware(data);
    const game = await super.updateById(id, data);
    return game;
  }

  async deleteGameById(id: string): Promise<GameModel> {
    return await super.deleteById(id);
  }
}

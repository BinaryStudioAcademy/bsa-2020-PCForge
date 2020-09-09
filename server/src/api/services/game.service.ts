import { GameCreationAttributes, GameModel } from '../../data/models/game';
import { IWithMeta } from '../../data/repositories/base.repository';
import { IGameFilter } from '../../data/repositories/filters/game.filter';
import { GameRepository } from '../../data/repositories/game.repository';
import { triggerServerError } from '../../helpers/global.helper';
import { BaseService } from './base.service';
import { IGamedMiddleware } from '../middlewares/game.middleware';
import { elasticServices } from './elsticsearch.service';

const elastic = elasticServices.games;

export class GameService extends BaseService<GameModel, GameCreationAttributes, GameRepository> {
  constructor(private repository: GameRepository) {
    super(repository);
  }

  async getGameById(id: string): Promise<GameModel> {
    const game = await this.repository.getGameById(id);
    if (!game) {
      triggerServerError(`Game with id: ${id} does not exists`, 404);
    }
    return game;
  }

  async getAllGames(filter: IGameFilter): Promise<IWithMeta<GameModel>> {
    if (filter.name) {
      const ids = await elastic.searchIDs({
        input: filter.name,
        searchFields: ['name'],
      });
      filter.id = ids.length ? ids : [-1];
    }

    const games = await this.repository.getAllGames(filter);
    return games;
  }

  async createGame(inputGame: GameCreationAttributes, gameMiddleware: IGamedMiddleware): Promise<GameModel> {
    await gameMiddleware(inputGame);
    const game = await super.create(inputGame);
    await elastic.addData(game);
    return game;
  }

  async updateGameById(
    inputGame: { id: string; data: GameCreationAttributes },
    gameMiddleware: IGamedMiddleware
  ): Promise<GameModel> {
    const { id, data } = inputGame;
    await gameMiddleware(data);
    const game = await super.updateById(id, data);
    await elastic.updateData(game);
    return game;
  }

  async deleteGameById(id: string): Promise<GameModel> {
    elastic.delete(id);
    return await super.deleteById(id);
  }
}

import { TopGameCreationAttributes, TopGameModel } from '../../data/models/topgame';
import { IWithMeta } from '../../data/repositories/base.repository';
import { IFilter } from '../../data/repositories/filters/base.filter';
import { TopGameRepository } from '../../data/repositories/topGame.repository';
import { triggerServerError } from '../../helpers/global.helper';
import { BaseService } from './base.service';
import { ITopGamesMiddleware } from '../middlewares/topGame.middleware';

export class TopGameService extends BaseService<TopGameModel, TopGameCreationAttributes, TopGameRepository> {
  constructor(private repository: TopGameRepository) {
    super(repository);
  }

  async getTopGameById(id: string): Promise<TopGameModel> {
    const topGame = await this.repository.getTopGameById(id);
    if (!topGame) {
      triggerServerError(`TopGame with id: ${id} does not exists`, 404);
    }
    return topGame;
  }

  async getAllTopGames(filter: IFilter): Promise<IWithMeta<TopGameModel>> {
    const topGames = await this.repository.getAllTopGames(filter);
    return topGames;
  }

  async createTopGame(
    inputTopGame: TopGameCreationAttributes,
    topGameMiddleware: ITopGamesMiddleware
  ): Promise<TopGameModel> {
    await topGameMiddleware(inputTopGame);
    const topGame = await super.create(inputTopGame);
    return topGame;
  }

  async updateTopGameById(
    inputTopGame: { id: string; data: TopGameCreationAttributes },
    topGameMiddleware: ITopGamesMiddleware
  ): Promise<TopGameModel> {
    const { id, data } = inputTopGame;
    await topGameMiddleware(data);
    const topGame = await super.updateById(id, data);
    return topGame;
  }

  async deleteTopGameById(id: string): Promise<TopGameModel> {
    return await super.deleteById(id);
  }
}

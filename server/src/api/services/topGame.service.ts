import { TopGameCreationAttributes, TopGameModel } from '../../data/models/topgame';
import { IWithMeta } from '../../data/repositories/base.repository';
import { IFilter } from '../../data/repositories/filters/base.filter';
import { TopGameRepository } from '../../data/repositories/topGame.repository';
import { triggerServerError } from '../../helpers/global.helper';

export class TopGameService {
  constructor(private repository: TopGameRepository) {}

  async getTopGameById(id: string): Promise<TopGameModel> {
    const TopGame = await this.repository.getTopGameById(id);
    if (!TopGame) {
      triggerServerError(`TopGame with id: ${id} does not exists`, 404);
    }
    return TopGame;
  }

  async getAllTopGames(filter: IFilter): Promise<IWithMeta<TopGameModel>> {
    const TopGames = await this.repository.getAllTopGames(filter);
    return TopGames;
  }

  async createTopGame(inputTopGame: TopGameCreationAttributes): Promise<TopGameModel> {
    const TopGame = await this.repository.createTopGame(inputTopGame);
    return TopGame;
  }

  async updateTopGameById(inputTopGame: { id: string; data: TopGameCreationAttributes }): Promise<TopGameModel> {
    const { id, data } = inputTopGame;
    const oldTopGame = await this.repository.getTopGameById(id);
    if (!oldTopGame) {
      triggerServerError(`TopGame with id: ${id} does not exists`, 404);
    }
    const TopGame = await this.repository.updateTopGameById(id, data);
    return TopGame;
  }

  async deleteTopGameById(id: string): Promise<TopGameModel> {
    const TopGame = await this.repository.getTopGameById(id);
    if (!TopGame) {
      triggerServerError(`TopGame with id: ${id} does not exists`, 404);
    }
    await this.repository.deleteTopGameById(id);
    return TopGame;
  }
}

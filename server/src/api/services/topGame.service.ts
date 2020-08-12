import { TopGameCreationAttributes, TopGameModel } from '../../data/models/topGame';
import { IWithMeta } from '../../data/repositories/base.repository';
import { IFilter } from '../../data/repositories/repositoriesFilterInterfaces';
import { TopGameRepository } from '../../data/repositories/topGame.repository';

export class TopGameService {
  constructor(private repository: TopGameRepository) {}

  async getTopGameById(id: string): Promise<TopGameModel> {
    const TopGame = await this.repository.getTopGameById(id);
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
      throw new Error(`TopGame with id: ${id} does not exists`);
    }
    const TopGame = await this.repository.updateTopGameById(id, data);
    return TopGame;
  }

  async deleteTopGameById(id: string): Promise<void> {
    await this.repository.deleteTopGameById(id);
  }
}

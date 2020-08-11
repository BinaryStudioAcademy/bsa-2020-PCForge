import { GameModel, GameDataAttributes } from '../../data/models/game';
import { GameRepository } from '../../data/repositories/game.repository';
import { IWithMeta } from '../../data/repositories/base.repository';
import { IGameFilter } from './servicesFilterInterfaces';

export class GameService {
  constructor(private repository: GameRepository) {}

  async getGameById(id: string): Promise<GameModel> {
    const game = await this.repository.getGameById(id);
    return game;
  }

  async getAllGames(filter: IGameFilter): Promise<IWithMeta<GameModel>> {
    const games = await this.repository.getAllGames(filter);
    return games;
  }

  async createGame(gameNewData: GameDataAttributes): Promise<GameModel> {
    const game = await this.repository.creatGame(gameNewData);
    return game;
  }

  async updateGameById(id: string, gameUpdatedData: GameDataAttributes): Promise<GameModel> {
    const game = await this.repository.updateGameById(id, gameUpdatedData);
    return game;
  }

  async deleteGameById(id: string): Promise<void> {
    await this.repository.deleteGameById(id);
  }
}

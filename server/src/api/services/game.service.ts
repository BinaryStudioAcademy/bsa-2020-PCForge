import { GameCreationAttributes, GameModel } from '../../data/models/game';
import { IWithMeta } from '../../data/repositories/base.repository';
import { IGameFilter } from '../../data/repositories/filters/game.filter';
import { GameRepository } from '../../data/repositories/game.repository';

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

  async createGame(inputGame: GameCreationAttributes): Promise<GameModel> {
    const game = await this.repository.createGame(inputGame);
    return game;
  }

  async updateGameById(inputGame: { id: string; data: GameCreationAttributes }): Promise<GameModel> {
    const { id, data } = inputGame;
    const oldGame = await this.repository.getGameById(id);
    if (!oldGame) {
      throw new Error(`Game with id: ${id} does not exists`);
    }
    const game = await this.repository.updateGameById(id, data);
    return game;
  }

  async deleteGameById(id: string): Promise<void> {
    await this.repository.deleteGameById(id);
  }
}

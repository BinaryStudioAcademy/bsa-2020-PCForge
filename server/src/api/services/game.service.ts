import { GameCreationAttributes, GameModel } from '../../data/models/Game';
import { IWithMeta } from '../../data/repositories/base.repository';
import { GameRepository } from '../../data/repositories/game.repository';

export class GameService {
  constructor(private repository: GameRepository) {}

  async getGameById(id: string): Promise<GameModel> {
    const Game = await this.repository.getGameById(id);
    return Game;
  }

  async getAllGames(): Promise<IWithMeta<GameModel>> {
    const Games = await this.repository.getAllGames();
    return Games;
  }

  async createGame(inputGame: GameCreationAttributes): Promise<GameModel> {
    const Game = await this.repository.createGame(inputGame);
    return Game;
  }

  async updateGameById(inputGame: { id: string; data: GameCreationAttributes }): Promise<GameModel> {
    const { id, data } = inputGame;
    const oldGame = await this.repository.getGameById(id);
    if (!oldGame) {
      throw new Error(`Game with id: ${id} does not exists`);
    }
    const Game = await this.repository.updateGameById(id, data);
    return Game;
  }

  async deleteGameById(inputGame: { id: string }): Promise<void> {
    const { id } = inputGame;
    await this.repository.deleteGameById(id);
  }
}

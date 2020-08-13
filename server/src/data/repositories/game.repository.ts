import { GameModel, GameCreationAttributes, GameStatic } from '../../data/models/game';
import { BaseRepository, RichModel, IWithMeta } from './base.repository';
import { CpuStatic } from '../models/cpu';
import { GpuStatic } from '../models/gpu';
import { IGameFilter } from './filters/game.filter';

export class GameRepository extends BaseRepository<GameModel, IGameFilter> {
  constructor(private model: GameStatic, private cpuModel: CpuStatic, private gpuModel: GpuStatic) {
    super(<RichModel>model, IGameFilter);
  }

  async getGameById(id: string): Promise<GameModel> {
    const game = await this.model.findByPk(id, {
      group: ['game.id', 'recommendedCpu.id', 'minimalCpu.id', 'recommendedGpu.id', 'minimalGpu.id'],
      include: [
        {
          model: this.cpuModel,
          as: 'recommendedCpu',
        },
        {
          model: this.cpuModel,
          as: 'minimalCpu',
        },
        {
          model: this.gpuModel,
          as: 'recommendedGpu',
        },
        {
          model: this.gpuModel,
          as: 'minimalGpu',
        },
      ],
    });
    return game;
  }

  async getAllGames(filter: IGameFilter): Promise<IWithMeta<GameModel>> {
    const games = await this.getAll(filter, {
      group: ['game.id', 'recommendedCpu.id', 'minimalCpu.id', 'recommendedGpu.id', 'minimalGpu.id'],
      include: [
        {
          model: this.cpuModel,
          as: 'recommendedCpu',
        },
        {
          model: this.cpuModel,
          as: 'minimalCpu',
        },
        {
          model: this.gpuModel,
          as: 'recommendedGpu',
        },
        {
          model: this.gpuModel,
          as: 'minimalGpu',
        },
      ],
    });
    return games;
  }

  async createGame(inputGame: GameCreationAttributes): Promise<GameModel> {
    const { id } = await this.model.create(inputGame);
    const game = this.getGameById(id.toString());
    return game;
  }

  async updateGameById(id: string, inputGame: GameCreationAttributes): Promise<GameModel> {
    const game = await this.updateById(id, inputGame);
    return game;
  }

  async deleteGameById(id: string): Promise<void> {
    await this.deleteById(id);
  }
}

import { CpuStatic } from '../models/cpu';
import { GameCreationAttributes, GameModel, GameStatic } from '../models/game';
import { GpuStatic } from '../models/gpu';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';

export class GameRepository extends BaseRepository<GameModel> {
  constructor(private model: GameStatic, private cpuModel: CpuStatic, private gpuModel: GpuStatic) {
    super(<RichModel>model);
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

  async getAllGames(): Promise<IWithMeta<GameModel>> {
    const games = await this.getAll({
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
      order: [['id', 'ASC']],
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

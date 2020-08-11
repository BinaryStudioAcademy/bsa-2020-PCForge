import { CpuStatic } from '../models/cpu';
import { GameDataAttributes, GameModel, GameStatic } from '../models/game';
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
          attributes: ['id', 'name'],
        },
        {
          model: this.cpuModel,
          as: 'minimalCpu',
          attributes: ['id', 'name'],
        },
        {
          model: this.gpuModel,
          as: 'recommendedGpu',
          attributes: ['id', 'name'],
        },
        {
          model: this.gpuModel,
          as: 'minimalGpu',
          attributes: ['id', 'name'],
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
          attributes: ['id', 'name'],
        },
        {
          model: this.cpuModel,
          as: 'minimalCpu',
          attributes: ['id', 'name'],
        },
        {
          model: this.gpuModel,
          as: 'recommendedGpu',
          attributes: ['id', 'name'],
        },
        {
          model: this.gpuModel,
          as: 'minimalGpu',
          attributes: ['id', 'name'],
        },
      ],
      order: [['id', 'ASC']],
    });
    return games;
  }

  async createGame(inputGame: GameDataAttributes): Promise<GameModel> {
    const { id } = await this.model.create(inputGame);
    const game = this.getGameById(id.toString());
    return game;
  }

  async updateGameById(id: string, inputGame: GameDataAttributes): Promise<GameModel> {
    const game = await this.updateById(id, inputGame);
    return game;
  }

  async deleteGameById(id: string): Promise<void> {
    await this.deleteById(id);
  }
}

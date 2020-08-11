import { GameModel, GameDataAttributes, GameStatic } from '../../data/models/game';
import { BaseRepository, RichModel, IWithMeta } from './base.repository';
import { CpuStatic } from '../models/cpu';
import { GpuStatic } from '../models/gpu';
import { IGameFilter, GameFilterDefaults } from './repositoriesFilterInterfaces';

export class GameRepository extends BaseRepository<GameModel> {
  constructor(private model: GameStatic, private CPUModel: CpuStatic, private GPUModel: GpuStatic) {
    super(<RichModel>model);
  }

  async getGameById(id: string): Promise<GameModel> {
    const game = await this.model.findOne({
      group: ['game.id', 'minimalCpu.id', 'recommendedCpu.id', 'minimalGpu.id', 'recommendedGpu.id'],
      where: { id },
      include: [
        {
          model: this.CPUModel,
          as: 'minimalCpu',
          attributes: ['id', 'name'],
        },
        {
          model: this.CPUModel,
          as: 'recommendedCpu',
          attributes: ['id', 'name'],
        },
        {
          model: this.GPUModel,
          as: 'minimalGpu',
          attributes: ['id', 'name'],
        },
        {
          model: this.GPUModel,
          as: 'recommendedGpu',
          attributes: ['id', 'name'],
        },
      ],
    });
    return game;
  }

  async getAllGames(filter: IGameFilter): Promise<IWithMeta<GameModel>> {
    const { year, from: offset, count: limit } = { ...GameFilterDefaults, ...filter };
    const games = await this.getAll({
      group: ['game.id', 'minimalCpu.id', 'recommendedCpu.id', 'minimalGpu.id', 'recommendedGpu.id'],
      where: { year },
      include: [
        {
          model: this.CPUModel,
          as: 'minimalCpu',
          attributes: ['id', 'name'],
        },
        {
          model: this.CPUModel,
          as: 'recommendedCpu',
          attributes: ['id', 'name'],
        },
        {
          model: this.GPUModel,
          as: 'minimalGpu',
          attributes: ['id', 'name'],
        },
        {
          model: this.GPUModel,
          as: 'recommendedGpu',
          attributes: ['id', 'name'],
        },
      ],
      order: [['year', 'DESC']],
      offset: offset,
      limit: limit,
    });
    return games;
  }

  async creatGame(gameNewData: GameDataAttributes): Promise<GameModel> {
    const { id } = await this.model.create(gameNewData);
    const game = this.getGameById(id.toString());
    return game;
  }

  async updateGameById(id: string, gameUpdatedData: GameDataAttributes): Promise<GameModel> {
    const game = await this.updateById(id, gameUpdatedData);
    return game;
  }

  async deleteGameById(id: string): Promise<void> {
    await this.deleteById(id);
  }
}

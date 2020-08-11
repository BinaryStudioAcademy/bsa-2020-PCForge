import { CpuStatic } from '../models/cpu';
import { TopGameCreationAttributes, TopGameModel, TopGameStatic } from '../models/TopGame';
import { GpuStatic } from '../models/gpu';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { GameStatic } from '../models/game';
import { FilterDefaults, IFilter } from './repositoriesFilterInterfaces';

export class TopGameRepository extends BaseRepository<TopGameModel> {
  constructor(
    private model: TopGameStatic,
    private gameModel: GameStatic,
    private cpuModel: CpuStatic,
    private gpuModel: GpuStatic
  ) {
    super(<RichModel>model);
  }

  async getTopGameById(id: string): Promise<TopGameModel> {
    const topGame = await this.model.findByPk(id, {
      group: [
        'topGame.id',
        'game.id',
        'game->recommendedCpu.id',
        'game->minimalCpu.id',
        'game->recommendedGpu.id',
        'game->minimalGpu.id',
      ],
      include: [
        {
          model: this.gameModel,
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
        },
      ],
    });
    return topGame;
  }

  async getAllTopGames(filter: IFilter): Promise<IWithMeta<TopGameModel>> {
    const { from: offset, count: limit } = { ...FilterDefaults, ...filter };
    const topGames = await this.getAll({
      group: [
        'topGame.id',
        'game.id',
        'game->recommendedCpu.id',
        'game->minimalCpu.id',
        'game->recommendedGpu.id',
        'game->minimalGpu.id',
      ],
      include: [
        {
          model: this.gameModel,
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
        },
      ],
      order: [['id', 'ASC']],
      offset: offset,
      limit: limit,
    });
    return topGames;
  }

  async createTopGame(inputTopGame: TopGameCreationAttributes): Promise<TopGameModel> {
    const { id } = await this.model.create(inputTopGame);
    const topGame = this.getTopGameById(id.toString());
    return topGame;
  }

  async updateTopGameById(id: string, inputTopGame: TopGameCreationAttributes): Promise<TopGameModel> {
    const topGame = await this.updateById(id, inputTopGame);
    return topGame;
  }

  async deleteTopGameById(id: string): Promise<void> {
    await this.deleteById(id);
  }
}

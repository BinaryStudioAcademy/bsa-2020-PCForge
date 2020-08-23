import { CpuStatic } from '../models/cpu';
import { TopGameCreationAttributes, TopGameModel, TopGameStatic } from '../models/topgame';
import { GpuStatic } from '../models/gpu';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { GameStatic } from '../models/game';
import { IFilter } from './filters/base.filter';
import { mergeFilters } from './filters/helper';

export class TopGameRepository extends BaseRepository<TopGameModel, IFilter> {
  constructor(
    private model: TopGameStatic,
    private gameModel: GameStatic,
    private cpuModel: CpuStatic,
    private gpuModel: GpuStatic
  ) {
    super(<RichModel>model, IFilter);
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

  async getAllTopGames(inputFilter: IFilter): Promise<IWithMeta<TopGameModel>> {
    const filter = mergeFilters<IFilter>(new IFilter(), inputFilter);
    const topGames = await this.getAll(
      {
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
      },
      filter
    );
    return topGames;
  }

  async deleteTopGameById(id: string): Promise<void> {
    await this.deleteById(id);
  }
}

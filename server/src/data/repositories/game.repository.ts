/* eslint-disable @typescript-eslint/no-explicit-any */
import { GameModel, GameCreationAttributes, GameStatic } from '../../data/models/game';
import { BaseRepository, RichModel, IWithMeta } from './base.repository';
import { CpuStatic } from '../models/cpu';
import { GpuStatic } from '../models/gpu';
import { IGameFilter } from './filters/game.filter';
import { mergeFilters } from './filters/helper';
import { Op } from 'sequelize';

export class GameRepository extends BaseRepository<GameModel, GameCreationAttributes, IGameFilter> {
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

  async getAllGames(inputFilter: IGameFilter): Promise<IWithMeta<GameModel>> {
    const filter = mergeFilters<IGameFilter>(new IGameFilter(), inputFilter);
    console.log('GameRepository -> filter', filter.id);
    const games = await this.getAll(
      {
        group: ['game.id', 'recommendedCpu.id', 'minimalCpu.id', 'recommendedGpu.id', 'minimalGpu.id'],
        where: {
          // ...(filter.name && { name: { [Op.iLike]: `%${filter.name}%` } }),
          id: { [Op.and]: { [Op.or]: filter.id } },
          ...(filter.year && { year: filter.year }),
        },
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
        order: [
          ...((inputFilter?.orderBy?.cpu
            ? [
                [
                  {
                    model: this.cpuModel,
                    as: 'recommendedCpu',
                  },
                  'performance',
                  inputFilter.orderBy.cpu.recommended,
                ],
              ]
            : []) as any),
          ...((inputFilter?.orderBy?.gpu
            ? [
                [
                  {
                    model: this.gpuModel,
                    as: 'recommendedGpu',
                  },
                  'performance',
                  inputFilter.orderBy.gpu.recommended,
                ],
              ]
            : []) as any),
          ...((inputFilter?.orderBy?.ram ? [['recommendedRamSize', inputFilter.orderBy.ram.recommended]] : []) as any),
          ['id', 'ASC'],
        ],
      },
      filter
    );
    return games;
  }
}

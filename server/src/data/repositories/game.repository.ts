/* eslint-disable @typescript-eslint/no-explicit-any */
import { GameModel, GameCreationAttributes, GameStatic } from '../../data/models/game';
import { BaseRepository, RichModel, IWithMeta } from './base.repository';
import { CpuStatic } from '../models/cpu';
import { GpuStatic } from '../models/gpu';
import { IGameFilter } from './filters/game.filter';
import { mergeFilters } from './filters/helper';
import sequelize, { Op, ProjectionAlias, OrderItem } from 'sequelize';
import { CommentStatic } from '../models/comment';
import { RateStatic } from '../models/rate';

export class GameRepository extends BaseRepository<GameModel, GameCreationAttributes, IGameFilter> {
  constructor(
    private model: GameStatic,
    private cpuModel: CpuStatic,
    private gpuModel: GpuStatic,
    private commentModel: CommentStatic,
    private rateModel: RateStatic
  ) {
    super(<RichModel>model, IGameFilter);
  }

  getOrderProperty(orderBy: string): OrderItem {
    switch (orderBy) {
      case 'mostRated':
        return [sequelize.literal('rating'), 'DESC NULLS LAST'];
      case 'newest':
        return ['year', 'DESC'];
      case 'oldest':
        return ['year', 'ASC'];
      case 'commendable':
        return [sequelize.literal('comments_count'), 'DESC'];
      default:
        return [sequelize.literal('rating'), 'DESC NULLS LAST'];
    }
  }

  async getGameById(id: string, requestingUserId?: number): Promise<GameModel> {
    const include: (string | ProjectionAlias)[] = [
      [sequelize.fn('COUNT', sequelize.col('comments.id')), 'comments_count'],
      [sequelize.fn('AVG', sequelize.col('rates.value')), 'rating'],
      [sequelize.literal('COUNT(DISTINCT "rates"."id")'), 'ratingCount'],
    ];
    if (requestingUserId) {
      include.push([
        sequelize.literal(
          `SUM(DISTINCT CASE WHEN "rates"."userId" = ${requestingUserId} THEN "rates"."value" ELSE NULL END)`
        ),
        'ownRating',
      ]);
    }
    const game = await this.model.findByPk(id, {
      group: ['game.id', 'recommendedCpu.id', 'minimalCpu.id', 'recommendedGpu.id', 'minimalGpu.id'],
      attributes: {
        include: include,
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
        {
          model: this.commentModel,
          attributes: [],
        },
        {
          model: this.rateModel,
          on: {
            ratebleId: {
              [Op.col]: 'game.id',
            },
            ratebleType: 'game',
          },
          attributes: [],
        },
      ],
    });
    return game;
  }

  async getAllGames(inputFilter: IGameFilter): Promise<IWithMeta<GameModel>> {
    const filter = mergeFilters<IGameFilter>(new IGameFilter(), inputFilter);
    const games = await this.getAll(
      {
        attributes: {
          include: [
            [sequelize.literal('COUNT(DISTINCT "comments"."id")'), 'comments_count'],
            [sequelize.fn('AVG', sequelize.col('rates.value')), 'rating'],
          ],
        },
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
          {
            model: this.commentModel,
            attributes: [],
          },
          {
            model: this.rateModel,
            on: {
              ratebleId: {
                [Op.col]: 'game.id',
              },
              ratebleType: 'game',
            },
            attributes: [],
          },
        ],

        order: [
          ...[this.getOrderProperty(filter.sortType)],
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
          [sequelize.literal('rating'), 'DESC NULLS LAST'],
        ],
        subQuery: false,
      },
      filter
    );
    return games;
  }
}

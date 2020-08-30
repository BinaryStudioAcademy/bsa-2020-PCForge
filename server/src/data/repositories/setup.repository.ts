import { SetupCreationAttributes, SetupModel, SetupStatic } from '../models/setup';
import { BaseRepository, RichModel, IWithMeta } from './base.repository';
import { IFilter } from './filters/base.filter';
import { CpuStatic } from '../models/cpu';
import { GpuStatic } from '../models/gpu';
import { MotherboardStatic } from '../models/motherboard';
import { RamStatic } from '../models/ram';
import { PowerSupplyStatic } from '../models/powersupply';
import { ISetupFilter } from '../../data/repositories/filters/setup.filter';
import { mergeFilters } from './filters/helper';
import { HddStatic } from '../models/hdd';
import { SsdStatic } from '../models/ssd';
import { CommentStatic } from '../models/comment';
import { RateStatic } from '../models/rate';
import sequelize, { Op, OrderItem } from 'sequelize';
import { group } from 'console';

export class SetupRepository extends BaseRepository<SetupModel, SetupCreationAttributes> {
  constructor(
    private model: SetupStatic,
    private cpuModel: CpuStatic,
    private gpuModel: GpuStatic,
    private motherBoardModel: MotherboardStatic,
    private ramModel: RamStatic,
    private powerSupplyModel: PowerSupplyStatic,
    private hddModel: HddStatic,
    private ssdModel: SsdStatic,
    private commentModel: CommentStatic,
    private reteModel: RateStatic
  ) {
    super(<RichModel>model, IFilter);
  }

  getOrderProperty(orderBy: string): OrderItem {
    switch (orderBy) {
      case 'mostRated':
        return [sequelize.literal('rating'), 'DESC NULLS LAST'];
      case 'newest':
        return ['createdAt', 'DESC'];
      case 'oldest':
        return ['createdAt', 'ASC'];
      case 'commendable':
        return [sequelize.literal('comments_count'), 'DESC'];
      default:
        return [sequelize.literal('rating'), 'DESC NULLS LAST'];
    }
  }

  async getSetups(inputFilter: ISetupFilter): Promise<IWithMeta<SetupModel>> {
    const filter = mergeFilters<ISetupFilter>(new ISetupFilter(), inputFilter);
    const where: { authorId?: string } = {};
    if (filter.authorId) {
      where.authorId = filter.authorId;
    }
    const result = await this.model.findAndCountAll({
      group: ['setup.id', 'cpu.id', 'gpu.id', 'ram.id', 'powerSupply.id', 'motherboard.id', 'hdd.id', 'ssd.id'],
      attributes: {
        include: [
          [sequelize.fn('COUNT', sequelize.col('comments.id')), 'comments_count'],
          [sequelize.fn('AVG', sequelize.col('rates.value')), 'rating'],
        ],
      },
      order: [this.getOrderProperty(filter.sort)],
      include: [
        {
          model: this.cpuModel,
          as: 'cpu',
        },
        {
          model: this.gpuModel,
          // as: 'gpu',
        },
        {
          model: this.motherBoardModel,
          // as: 'motherboard',
        },
        {
          model: this.ramModel,
          // as: 'ram',
        },
        {
          model: this.powerSupplyModel,
          // as: 'powerSupply',
        },
        {
          model: this.hddModel,
          // as: 'hdd',
        },
        {
          model: this.ssdModel,
          // as: 'ssd',
        },
        {
          model: this.commentModel,
          attributes: [],
        },
        {
          model: this.reteModel,
          on: {
            ratebleId: {
              [Op.col]: 'setup.id',
            },
            ratebleType: 'setup',
          },
          attributes: [],
        },
      ],
      where,
      subQuery: false,
      offset: filter.from,
      limit: filter.count,
    });

    // here is a bug in sequelize: it returns array instead of number, so instead of result.count there was used this.model.count();
    // https://github.com/sequelize/sequelize/issues/9109
    const globalCount = await this.model.count();
    const countAfterFiltering = result.rows.length;

    return {
      meta: {
        globalCount,
        countAfterFiltering,
      },
      data: result.rows,
    };
  }

  async getOneSetup(id: string): Promise<SetupModel> {
    const setup = await this.model.findByPk(id, {
      group: ['setup.id', 'cpu.id', 'gpu.id', 'ram.id', 'powerSupply.id', 'motherboard.id', 'hdd.id', 'ssd.id'],
      include: [
        {
          model: this.cpuModel,
          as: 'cpu',
        },
        {
          model: this.gpuModel,
          as: 'gpu',
        },
        {
          model: this.ramModel,
          as: 'ram',
        },
        {
          model: this.powerSupplyModel,
          as: 'powerSupply',
        },
        {
          model: this.motherBoardModel,
          as: 'motherboard',
        },
        {
          model: this.hddModel,
          as: 'hdd',
        },
        {
          model: this.ssdModel,
          as: 'ssd',
        },
      ],
    });
    return setup;
  }
}

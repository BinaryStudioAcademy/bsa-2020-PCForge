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
import { UserStatic } from '../models/user';

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
    private reteModel: RateStatic,
    private userModel: UserStatic
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
    const result = await this.getAll({
      group: [
        'setup.id',
        'cpu.id',
        'gpu.id',
        'ram.id',
        'powerSupply.id',
        'motherboard.id',
        'hdd.id',
        'ssd.id',
        'author.id',
      ],
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
        },
        {
          model: this.motherBoardModel,
        },
        {
          model: this.ramModel,
        },
        {
          model: this.powerSupplyModel,
        },
        {
          model: this.hddModel,
        },
        {
          model: this.ssdModel,
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
        {
          model: this.userModel,
          as: 'author',
        },
      ],
      where,
      subQuery: false,
      offset: filter.from,
      limit: filter.count,
    });

    console.log('result', result);
    // here is a bug in sequelize: it returns array instead of number, so instead of result.count there was used this.model.count();
    // https://github.com/sequelize/sequelize/issues/9109
    const globalCount = await this.model.count();
    // const countAfterFiltering = result.rows.length;
    return result;
  }

  async getOneSetup(id: string): Promise<SetupModel> {
    const setup = await this.model.findByPk(id, {
      group: [
        'setup.id',
        'cpu.id',
        'gpu.id',
        'ram.id',
        'powerSupply.id',
        'motherboard.id',
        'hdd.id',
        'ssd.id',
        'author.id',
      ],
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
        {
          model: this.userModel,
          as: 'author',
        },
      ],
    });
    return setup;
  }

  async forkSetup(id: string, userId: number): Promise<SetupModel> {
    const setup = await this.model.findByPk(id);
    const dataToInsert = {
      parentId: setup.id,
      authorId: userId,
      title: setup.title,
      description: setup.description,
      image: setup.image,
      cpuId: setup.get('cpuId'),
      gpuId: setup.get('gpuId'),
      powerSupplyId: setup.get('powerSupplyId'),
      hddId: setup.get('hddId'),
      ssdId: setup.get('ssdId'),
      ramId: setup.get('ramId'),
      motherboardId: setup.get('motherboardId'),
    };
    const forkedSetup = await this.model.create(dataToInsert);
    return forkedSetup;
  }
}

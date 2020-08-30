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

export class SetupRepository extends BaseRepository<SetupModel, SetupCreationAttributes> {
  constructor(
    private model: SetupStatic,
    private cpuModel: CpuStatic,
    private gpuModel: GpuStatic,
    private motherBoardModel: MotherboardStatic,
    private ramModel: RamStatic,
    private powerSupplyModel: PowerSupplyStatic,
    private hddModel: HddStatic,
    private ssdModel: SsdStatic
  ) {
    super(<RichModel>model, IFilter);
  }

  async getSetups(inputFilter: ISetupFilter): Promise<IWithMeta<SetupModel>> {
    const filter = mergeFilters<ISetupFilter>(new ISetupFilter(), inputFilter);
    const where: { authorId?: string } = {};
    if (filter.authorId) {
      where.authorId = filter.authorId;
    }

    const result = await this.model.findAndCountAll({
      include: [
        {
          model: this.cpuModel,
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
      ],
      where,
      offset: filter.from,
      limit: filter.count,
    });

    const globalCount = result.count;
    const countAfterFiltering = result.rows.length;

    return {
      meta: { globalCount, countAfterFiltering },
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
    return await this.model.create(dataToInsert);
  }
}

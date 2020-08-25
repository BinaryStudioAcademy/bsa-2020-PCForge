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

export class SetupRepository extends BaseRepository<SetupModel, SetupCreationAttributes> {
  constructor(
    private model: SetupStatic,
    private cpuModel: CpuStatic,
    private gpuModel: GpuStatic,
    private motherBoardModel: MotherboardStatic,
    private ramModel: RamStatic,
    private powerSupplyModel: PowerSupplyStatic
  ) {
    super(<RichModel>model, IFilter);
  }

  async getSetups(inputFilter: ISetupFilter): Promise<IWithMeta<SetupModel>> {
    const filter = mergeFilters<ISetupFilter>(new ISetupFilter(), inputFilter);
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
      ],
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
      group: ['setup.id', 'cpu.id', 'gpu.id', 'ram.id', 'powerSupply.id', 'motherboard.id'],
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
      ],
    });
    return setup;
  }
}

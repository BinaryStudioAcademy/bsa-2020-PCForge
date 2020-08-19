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

export class SetupRepository extends BaseRepository<SetupModel> {
  constructor(
    private model: SetupStatic,
    private cpuModel: CpuStatic,
    private gpuModel: GpuStatic,
    private motherboardModel: MotherboardStatic,
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
          model: this.motherboardModel,
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

    const globalCount = await this.model.count();
    // here is a bug in sequelize: it returns array instead of number, so we use length
    // https://github.com/sequelize/sequelize/issues/9109
    const countAfterFiltering = ((result.count as unknown) as Record<string, unknown>[]).length;

    return {
      meta: { globalCount, countAfterFiltering },
      data: result.rows,
    };
  }

  async createSetup(inputSetup: SetupCreationAttributes): Promise<SetupModel> {
    const setup = await this.model.create(inputSetup);
    return setup;
  }
}

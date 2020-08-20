import { CpuStatic } from '../models/cpu';
import { GpuStatic } from '../models/gpu';
import { RamStatic } from '../models/ram';
import { MotherboardStatic } from '../models/motherboard';
import { PowerSupplyStatic } from '../models/powersupply';
import { SetupCreationAttributes, SetupModel, SetupStatic } from '../models/setup';

import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { IFilter } from './filters/base.filter';
import { RateStatic } from '../models/rate';
import { mergeFilters } from './filters/helper';

export class SetupRepository extends BaseRepository<SetupModel> {
  constructor(
    private model: SetupStatic,

    private cpuModel: CpuStatic,
    private gpuModel: GpuStatic,
    private ramModel: RamStatic,
    private motherBoardModel: MotherboardStatic,
    private powerSupplyModel: PowerSupplyStatic
  ) {
    super(<RichModel>model, IFilter);
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

  async getAllSetups(inputFilter: IFilter): Promise<IWithMeta<SetupModel>> {
    const filter = mergeFilters<IFilter>(new IFilter(), inputFilter);
    console.log(filter);
    const setups = await this.getAll(
      {
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
      },
      filter
    );

    return setups;
  }

  async createSetup(inputSetup: SetupCreationAttributes): Promise<SetupModel> {
    const setup = await this.model.create(inputSetup);
    return setup;
  }
}

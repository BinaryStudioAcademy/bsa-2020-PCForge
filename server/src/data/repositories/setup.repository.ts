import { CpuStatic } from '../models/cpu';
import { GpuStatic } from '../models/gpu';
import { RamStatic } from '../models/ram';
import { SetupCreationAttributes, SetupModel, SetupStatic } from '../models/setup';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { IFilter } from './filters/base.filter';
import { mergeFilters } from './filters/helper';

export class SetupRepository extends BaseRepository<SetupModel> {
  constructor(
    private model: SetupStatic,
    private cpuModel: CpuStatic,
    private gpuModel: GpuStatic,
    private ramModel: RamStatic
  ) {
    super(<RichModel>model, IFilter);
  }

  async getSetupById(id: string): Promise<SetupModel> {
    const setup = await this.model.findByPk(id, {
      group: ['setup.id', 'cpu.id', 'gpu.id', 'ram.id'],
      include: [
        {
          model: this.cpuModel,
        },
        {
          model: this.gpuModel,
        },
        {
          model: this.ramModel,
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
        group: ['setup.id', 'cpu.id', 'gpu.id', 'ram.id'],
        include: [
          {
            model: this.cpuModel,
          },
          {
            model: this.gpuModel,
          },
          {
            model: this.ramModel,
          },
        ],
      },
      filter
    );
    console.log(setups.data[0].cpu);
    return setups;
  }

  async createSetup(inputSetup: SetupCreationAttributes): Promise<SetupModel> {
    const setup = await this.model.create(inputSetup);
    return setup;
  }
}

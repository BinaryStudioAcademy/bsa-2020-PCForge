import { SetupCreationAttributes, SetupModel, SetupStatic } from '../models/setup';
import { BaseRepository, RichModel, IWithMeta } from './base.repository';
import { IFilter } from './filters/base.filter';
import { RamStatic } from '../models/ram';
import { CpuStatic } from '../models/cpu';
import { GpuStatic } from '../models/gpu';

export class SetupRepository extends BaseRepository<SetupModel> {
  constructor(
    private model: SetupStatic,
    private ramModel: RamStatic,
    private cpuModel: CpuStatic,
    private gpuModel: GpuStatic
  ) {
    super(<RichModel>model, IFilter);
  }

  async getAllSetups(): Promise<IWithMeta<SetupModel>> {
    const setups = await this.getAll();
    return setups;
  }
  async createSetup(inputSetup: SetupCreationAttributes): Promise<SetupModel> {
    const setup = await this.model.create(inputSetup);
    return setup;
  }
}

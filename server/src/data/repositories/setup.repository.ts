import { SetupCreationAttributes, SetupModel, SetupStatic } from '../models/setup';
import { BaseRepository, RichModel } from './base.repository';
import { IFilter } from './filters/base.filter';
import { CpuStatic } from '../models/cpu';
import { GpuStatic } from '../models/gpu';
import { RamStatic } from '../models/ram';
import { MotherboardStatic } from '../models/motherboard';
import { PowerSupplyStatic } from '../models/powersupply';
import { RateStatic } from '../models/rate';

export class SetupRepository extends BaseRepository<SetupModel> {
  constructor(
    private model: SetupStatic,
    private cpuModel: CpuStatic,
    private gpuModel: GpuStatic,
    private ramModel: RamStatic,
    private motherBoardModel: MotherboardStatic,
    private powerSupplyModel: PowerSupplyStatic,
    private rateModel: RateStatic
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
          as: 'motherboard'
        }
      ],
    });
    return setup;
  }

  async createSetup(inputSetup: SetupCreationAttributes): Promise<SetupModel> {
    const setup = await this.model.create(inputSetup);
    return setup;
  }
}

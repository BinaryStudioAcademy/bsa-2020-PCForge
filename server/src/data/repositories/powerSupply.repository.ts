import { PowerSupplyCreationAttributes, PowerSupplyModel, PowerSupplyStatic } from '../models/powersupply';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { IFilter } from './filters/base.filter';

export class PowerSupplyRepository extends BaseRepository<PowerSupplyModel, IFilter> {
  constructor(private model: PowerSupplyStatic) {
    super(<RichModel>model, IFilter);
  }

  async getPowerSupplyById(id: string): Promise<PowerSupplyModel> {
    const powerSupply = await this.getById(id);
    return powerSupply;
  }

  async getAllPowerSupplies(inputFilter: IFilter): Promise<IWithMeta<PowerSupplyModel>> {
    const filter = inputFilter || new IFilter();
    const powerSupplies = await this.getAll(
      {
        group: ['powerSupply.id'],
      },
      filter
    );
    return powerSupplies;
  }

  async createPowerSupply(inputPowerSupply: PowerSupplyCreationAttributes): Promise<PowerSupplyModel> {
    const powerSupply = await this.model.create(inputPowerSupply);
    return powerSupply;
  }

  async updatePowerSupplyById(id: string, inputPowerSupply: PowerSupplyCreationAttributes): Promise<PowerSupplyModel> {
    const powerSupply = await this.updateById(id, inputPowerSupply);
    return powerSupply;
  }

  async deletePowerSupplyById(id: string): Promise<void> {
    await this.deleteById(id);
  }
}

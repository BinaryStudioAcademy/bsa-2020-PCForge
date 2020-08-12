import { PowerSupplyCreationAttributes, PowerSupplyModel, PowerSupplyStatic } from '../models/powerSupply';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { IFilter } from './repositoriesFilterInterfaces';

export class PowerSupplyRepository extends BaseRepository<PowerSupplyModel> {
  constructor(private model: PowerSupplyStatic) {
    super(<RichModel>model);
  }

  async getPowerSupplyById(id: string): Promise<PowerSupplyModel> {
    const powerSupply = await this.getById(id);
    return powerSupply;
  }

  async getAllPowerSupplies(filter: IFilter): Promise<IWithMeta<PowerSupplyModel>> {
    const powerSupplies = await this.getAll(filter, {
      group: ['powerSupply.id'],
    });
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

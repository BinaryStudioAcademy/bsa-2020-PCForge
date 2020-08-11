import { PowerSupplyDataAttributes, PowerSupplyModel, PowerSupplyStatic } from '../models/PowerSupply';
import { BaseRepository, RichModel } from './base.repository';

export class PowerSupplyRepository extends BaseRepository<PowerSupplyModel> {
  constructor(private model: PowerSupplyStatic) {
    super(<RichModel>model);
  }

  async getPowerSupplyById(id: string): Promise<PowerSupplyModel> {
    const powerSupply = await this.getById(id);
    return powerSupply;
  }

  async getAllPowerSupplies(): Promise<PowerSupplyModel[]> {
    const powerSupplies = await this.getAll();
    return powerSupplies.data;
  }

  async createPowerSupply(inputPowerSupply: PowerSupplyDataAttributes): Promise<PowerSupplyModel> {
    const powerSupply = await this.model.create(inputPowerSupply);
    return powerSupply;
  }

  async updatePowerSupplyById(id: string, inputPowerSupply: PowerSupplyDataAttributes): Promise<PowerSupplyModel> {
    const powerSupply = await this.updateById(id, inputPowerSupply);
    return powerSupply;
  }

  async deletePowerSupplyById(id: string): Promise<void> {
    await this.deleteById(id);
  }
}

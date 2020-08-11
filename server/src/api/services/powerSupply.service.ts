import { PowerSupplyCreationAttributes, PowerSupplyModel } from '../../data/models/powerSupply';
import { PowerSupplyRepository } from '../../data/repositories/powerSupply.repository';

export class PowerSupplyService {
  constructor(private repository: PowerSupplyRepository) {}

  async getPowerSupplyById(id: string): Promise<PowerSupplyModel> {
    const powerSupply = await this.repository.getPowerSupplyById(id);
    return powerSupply;
  }

  async getAllPowerSupplies(): Promise<PowerSupplyModel[]> {
    const powerSupplies = await this.repository.getAllPowerSupplies();
    return powerSupplies;
  }

  async createPowerSupply(inputPowerSupply: PowerSupplyCreationAttributes): Promise<PowerSupplyModel> {
    const powerSupply = await this.repository.createPowerSupply(inputPowerSupply);
    return powerSupply;
  }

  async updatePowerSupplyById(inputPowerSupply: {
    id: string;
    data: PowerSupplyCreationAttributes;
  }): Promise<PowerSupplyModel> {
    const { id, data } = inputPowerSupply;
    const oldPowerSupply = await this.repository.getPowerSupplyById(id);
    if (!oldPowerSupply) {
      throw new Error(`PowerSupply with id: ${id} does not exists`);
    }
    const PowerSupply = await this.repository.updatePowerSupplyById(id, data);
    return PowerSupply;
  }

  async deletePowerSupplyById(inputPowerSupply: { id: string }): Promise<void> {
    const { id } = inputPowerSupply;
    await this.repository.deletePowerSupplyById(id);
  }
}

import { PowerSupplyCreationAttributes, PowerSupplyModel } from '../../data/models/powersupply';
import { IWithMeta } from '../../data/repositories/base.repository';
import { IFilter } from '../../data/repositories/filters/base.filter';
import { PowerSupplyRepository } from '../../data/repositories/powerSupply.repository';
import { triggerServerError } from '../../helpers/global.helper';

export class PowerSupplyService {
  constructor(private repository: PowerSupplyRepository) {}

  async getPowerSupplyById(id: string): Promise<PowerSupplyModel> {
    const powerSupply = await this.repository.getPowerSupplyById(id);
    if (!powerSupply) {
      triggerServerError(`PowerSupply with id: ${id} does not exists`, 404);
    }
    return powerSupply;
  }

  async getAllPowerSupplies(filter: IFilter): Promise<IWithMeta<PowerSupplyModel>> {
    const powerSupplies = await this.repository.getAllPowerSupplies(filter);
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
      triggerServerError(`PowerSupply with id: ${id} does not exists`, 404);
    }
    const PowerSupply = await this.repository.updatePowerSupplyById(id, data);
    return PowerSupply;
  }

  async deletePowerSupplyById(id: string): Promise<void> {
    await this.repository.deletePowerSupplyById(id);
  }
}

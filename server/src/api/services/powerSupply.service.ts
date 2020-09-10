import { PowerSupplyCreationAttributes, PowerSupplyModel } from '../../data/models/powersupply';
import { IWithMeta } from '../../data/repositories/base.repository';
import { PowerSupplyRepository } from '../../data/repositories/powerSupply.repository';
import { triggerServerError } from '../../helpers/global.helper';
import { BaseService } from './base.service';
import { IPowerSupplyFilter } from '../../data/repositories/filters/powerSupply.filter';
import { elasticServices } from './elsticsearch.service';

const elastic = elasticServices.powersupplies;

export class PowerSupplyService extends BaseService<
  PowerSupplyModel,
  PowerSupplyCreationAttributes,
  PowerSupplyRepository
> {
  constructor(private repository: PowerSupplyRepository) {
    super(repository);
  }

  async getPowerSupplyById(id: string): Promise<PowerSupplyModel> {
    const powerSupply = await this.repository.getPowerSupplyById(id);
    if (!powerSupply) {
      triggerServerError(`PowerSupply with id: ${id} does not exists`, 404);
    }
    return powerSupply;
  }

  async getAllPowerSupplies(filter: IPowerSupplyFilter): Promise<IWithMeta<PowerSupplyModel>> {
    if (filter.name) {
      const ids = await elastic.searchIDs({
        input: filter.name,
        searchFields: ['name'],
      });
      filter.id = ids.length ? ids : [-1];
    }

    const powerSupplies = await this.repository.getAllPowerSupplies(filter);
    return powerSupplies;
  }

  async createPowerSupply(inputPowerSupply: PowerSupplyCreationAttributes): Promise<PowerSupplyModel> {
    const powerSupply = await super.create(inputPowerSupply);
    await elastic.addData(powerSupply);
    return powerSupply;
  }

  async updatePowerSupplyById({
    id,
    data,
  }: {
    id: string;
    data: PowerSupplyCreationAttributes;
  }): Promise<PowerSupplyModel> {
    const powerSupply = await super.updateById(id, data);
    await elastic.updateData(powerSupply);
    return powerSupply;
  }

  async deletePowerSupplyById(id: string): Promise<PowerSupplyModel> {
    elastic.delete(id);
    return await super.deleteById(id);
  }
}

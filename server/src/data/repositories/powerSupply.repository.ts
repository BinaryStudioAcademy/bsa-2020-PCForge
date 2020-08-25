import { PowerSupplyCreationAttributes, PowerSupplyModel, PowerSupplyStatic } from '../models/powersupply';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { IFilter } from './filters/base.filter';
import { mergeFilters } from './filters/helper';

export class PowerSupplyRepository extends BaseRepository<PowerSupplyModel, PowerSupplyCreationAttributes, IFilter> {
  constructor(private model: PowerSupplyStatic) {
    super(<RichModel>model, IFilter);
  }

  async getPowerSupplyById(id: string): Promise<PowerSupplyModel> {
    const powerSupply = await this.getById(id);
    return powerSupply;
  }

  async getAllPowerSupplies(inputFilter: IFilter): Promise<IWithMeta<PowerSupplyModel>> {
    const filter = mergeFilters<IFilter>(new IFilter(), inputFilter);
    const powerSupplies = await this.getAll(
      {
        group: ['powerSupply.id'],
      },
      filter
    );
    return powerSupplies;
  }
}

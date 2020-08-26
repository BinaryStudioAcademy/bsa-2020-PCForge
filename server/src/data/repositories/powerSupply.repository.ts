import { PowerSupplyCreationAttributes, PowerSupplyModel, PowerSupplyStatic } from '../models/powersupply';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { IFilter } from './filters/base.filter';
import { mergeFilters } from './filters/helper';
import { IPowerSupplyFilter } from './filters/powerSupply.filter';
import { Op } from 'sequelize';

export class PowerSupplyRepository extends BaseRepository<PowerSupplyModel, PowerSupplyCreationAttributes, IFilter> {
  constructor(private model: PowerSupplyStatic) {
    super(<RichModel>model, IFilter);
  }

  async getPowerSupplyById(id: string): Promise<PowerSupplyModel> {
    const powerSupply = await this.getById(id);
    return powerSupply;
  }

  async getAllPowerSupplies(inputFilter: IPowerSupplyFilter): Promise<IWithMeta<PowerSupplyModel>> {
    const filter = mergeFilters<IPowerSupplyFilter>(new IPowerSupplyFilter(), inputFilter);
    const powerSupplies = await this.getAll(
      {
        group: ['powerSupply.id'],
        where: {
          ...(filter.name && { name: { [Op.iLike]: `%${filter.name}%` } }),
          power: {
            [Op.between]: [filter.power.minValue, filter.power.maxValue],
          },
        },
      },
      filter
    );
    return powerSupplies;
  }
}

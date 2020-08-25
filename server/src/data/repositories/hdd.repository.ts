import { HddCreationAttributes, HddModel, HddStatic } from '../models/hdd';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { IFilter } from './filters/base.filter';
import { mergeFilters } from './filters/helper';
import { Op } from 'sequelize';
import { IHddFilter } from './filters/hdd.filter';

export class HddRepository extends BaseRepository<HddModel, HddCreationAttributes, IFilter> {
  constructor(private model: HddStatic) {
    super(<RichModel>model, IFilter);
  }

  async getHddById(id: string): Promise<HddModel> {
    const hdd = await this.getById(id);
    return hdd;
  }

  async getAllHdds(inputFilter: IHddFilter): Promise<IWithMeta<HddModel>> {
    console.log('inputFilter', inputFilter);
    const filter = mergeFilters(new IHddFilter(), inputFilter);
    console.log('filter', filter);
    console.log('ff', filter.name && { name: { [Op.iLike]: `%${filter.name}%` } });
    const hdds = await this.getAll(
      {
        group: ['hdd.id'],
        where: {
          sata: filter.sata,
          ...(filter.name && { name: { [Op.iLike]: `%${filter.name}%` } }),
          capacity: {
            [Op.between]: [filter.capacity.minValue, filter.capacity.maxValue],
          },
        },
      },
      filter
    );
    return hdds;
  }

  async createHdd(inputHdd: HddCreationAttributes): Promise<HddModel> {
    const hdd = await this.model.create(inputHdd);
    return hdd;
  }

  async updateHddById(id: string, inputHdd: HddCreationAttributes): Promise<HddModel> {
    const hdd = await this.updateById(id, inputHdd);
    return hdd;
  }

  async deleteHddById(id: string): Promise<void> {
    await this.deleteById(id);
  }
}

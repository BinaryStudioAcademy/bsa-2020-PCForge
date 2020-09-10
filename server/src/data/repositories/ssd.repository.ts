import { SsdCreationAttributes, SsdModel, SsdStatic } from '../models/ssd';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { IFilter } from './filters/base.filter';
import { mergeFilters } from './filters/helper';
import { Op } from 'sequelize';
import { ISsdFilter } from './filters/ssd.filter';
import { notNull } from './filters/types';

export class SsdRepository extends BaseRepository<SsdModel, SsdCreationAttributes, IFilter> {
  constructor(private model: SsdStatic) {
    super(<RichModel>model, IFilter);
  }

  async getSsdById(id: string): Promise<SsdModel> {
    const ssd = await this.getById(id);
    return ssd;
  }

  async getAllSsds(inputFilter: ISsdFilter): Promise<IWithMeta<SsdModel>> {
    const filter = mergeFilters(new ISsdFilter(), inputFilter);
    const ssds = await this.getAll(
      {
        group: ['ssd.id'],
        where: {
          [Op.or]: [
            {
              sata: filter.sata,
              m2: filter.sata === notNull ? filter.m2 : notNull,
            },
            {
              sata: filter.m2 === notNull ? filter.sata : notNull,
              m2: filter.m2,
            },
          ],
          capacity: {
            [Op.between]: [filter.capacity.minValue, filter.capacity.maxValue],
          },
          id: { [Op.and]: { [Op.or]: filter.id, [Op.not]: filter.excludedId } },
        },
      },
      filter
    );
    return ssds;
  }

  async createSsd(inputSsd: SsdCreationAttributes): Promise<SsdModel> {
    const ssd = await this.model.create(inputSsd);
    return ssd;
  }

  async updateSsdById(id: string, inputSsd: SsdCreationAttributes): Promise<SsdModel> {
    const ssd = await this.updateById(id, inputSsd);
    return ssd;
  }

  async deleteSsdById(id: string): Promise<void> {
    await this.deleteById(id);
  }
}

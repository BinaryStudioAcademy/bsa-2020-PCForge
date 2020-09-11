import { HddCreationAttributes, HddModel } from '../../data/models/hdd';
import { IWithMeta } from '../../data/repositories/base.repository';
import { IHddFilter } from '../../data/repositories/filters/hdd.filter';
import { HddRepository } from '../../data/repositories/hdd.repository';
import { triggerServerError } from '../../helpers/global.helper';
import { BaseService } from './base.service';
import { elasticServices } from './elsticsearch.service';

const elastic = elasticServices.hdds;

export class HddService extends BaseService<HddModel, HddCreationAttributes, HddRepository> {
  constructor(private repository: HddRepository) {
    super(repository);
  }

  async getHddById(id: string): Promise<HddModel> {
    const hdd = await this.repository.getHddById(id);
    if (!hdd) {
      triggerServerError(`Hdd with id: ${id} does not exists`, 404);
    }
    return hdd;
  }

  async getAllHdds(filter: IHddFilter): Promise<IWithMeta<HddModel>> {
    if (filter.name) {
      const ids = await elastic.searchIDs({
        input: filter.name,
        searchFields: ['name'],
      });
      filter.id = ids.length ? ids : [-1];
    }

    const hdds = await this.repository.getAllHdds(filter);
    return hdds;
  }

  async createHdd(inputHdd: HddCreationAttributes): Promise<HddModel> {
    const hdd = await this.repository.createHdd(inputHdd);
    await elastic.addData(hdd, 'hdds').catch((err) => console.log(err));
    return hdd;
  }

  async updateHddById(inputHdd: { id: string; data: HddCreationAttributes }): Promise<HddModel> {
    if (!Object.keys(inputHdd.data).length) {
      triggerServerError('No valid fields to update specified', 400);
    }
    const { id, data } = inputHdd;
    if (!Object.keys(data).length) {
      triggerServerError('You should specify at least one valid field to update', 400);
    }
    const oldHdd = await this.repository.getHddById(id);
    if (!oldHdd) {
      triggerServerError(`Hdd with id: ${id} does not exists`, 404);
    }
    const hdd = await this.repository.updateHddById(id, data);
    await elastic.updateData(hdd);
    return hdd;
  }

  async deleteHddById(inputHdd: { id: string }): Promise<HddModel> {
    const { id } = inputHdd;
    const hdd = await super.deleteById(id);
    elastic.delete(id);
    return hdd;
  }
}

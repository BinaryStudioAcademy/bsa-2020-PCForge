import { RamCreationAttributes, RamModel } from '../../data/models/ram';
import { IWithMeta } from '../../data/repositories/base.repository';
import { IRamFilter } from '../../data/repositories/filters/ram.filter';
import { RamRepository } from '../../data/repositories/ram.repository';
import { triggerServerError } from '../../helpers/global.helper';
import { BaseService } from './base.service';
import { IRamsMiddleware } from '../middlewares/ram.middleware';
import { elasticServices } from './elsticsearch.service';

const elastic = elasticServices.rams;

export class RamService extends BaseService<RamModel, RamCreationAttributes, RamRepository> {
  constructor(private repository: RamRepository) {
    super(repository);
  }

  async getRamById(id: string): Promise<RamModel> {
    const ram = await this.repository.getRamById(id);
    if (!ram) {
      triggerServerError(`Ram with id: ${id} does not exists`, 404);
    }
    return ram;
  }

  async getAllRams(filter: IRamFilter): Promise<IWithMeta<RamModel>> {
    if (filter.name) {
      const ids = await elastic.searchIDs({
        input: filter.name,
        searchFields: ['name'],
      });
      filter.id = ids.length ? ids : [-1];
    }

    const rams = await this.repository.getAllRams(filter);
    return rams;
  }

  async createRam(inputRam: RamCreationAttributes, ramMiddleware: IRamsMiddleware): Promise<RamModel> {
    await ramMiddleware(inputRam);
    const ram = await super.create(inputRam);
    await elastic.addData(ram, 'rams').catch((err) => console.log(err));
    return ram;
  }

  async updateRamById(
    inputRam: { id: string; data: RamCreationAttributes },
    ramMiddleware: IRamsMiddleware
  ): Promise<RamModel> {
    const { id, data } = inputRam;
    await ramMiddleware(data);
    const ram = await super.updateById(id, data);
    await elastic.updateData(ram);
    return ram;
  }

  async deleteRamById(id: string): Promise<RamModel> {
    elastic.delete(id);
    return await super.deleteById(id);
  }
}

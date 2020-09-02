import { SsdCreationAttributes, SsdModel } from '../../data/models/ssd';
import { IWithMeta } from '../../data/repositories/base.repository';
import { ISsdFilter } from '../../data/repositories/filters/ssd.filter';
import { SsdRepository } from '../../data/repositories/ssd.repository';
import { triggerServerError } from '../../helpers/global.helper';
import { BaseService } from './base.service';

export class SsdService extends BaseService<SsdModel, SsdCreationAttributes, SsdRepository> {
  constructor(private repository: SsdRepository) {
    super(repository);
  }

  async getSsdById(id: string): Promise<SsdModel> {
    const ssd = await this.repository.getSsdById(id);
    if (!ssd) {
      triggerServerError(`Ssd with id: ${id} does not exists`, 404);
    }
    return ssd;
  }

  async getAllSsds(filter: ISsdFilter): Promise<IWithMeta<SsdModel>> {
    const ssds = await this.repository.getAllSsds(filter);
    return ssds;
  }

  async createSsd(inputSsd: SsdCreationAttributes): Promise<SsdModel> {
    const ssd = await this.repository.createSsd(inputSsd);
    return ssd;
  }

  async updateSsdById(inputSsd: { id: string; data: SsdCreationAttributes }): Promise<SsdModel> {
    const { id, data } = inputSsd;
    if (!Object.keys(data).length) {
      triggerServerError('No valid fields to update specified', 400);
    }
    const oldSsd = await this.repository.getSsdById(id);
    if (!oldSsd) {
      triggerServerError(`Ssd with id: ${id} does not exists`, 404);
    }
    if (!Object.keys(data).length) {
      triggerServerError('You should specify at least one valid field to update', 400);
    }
    const ssd = await this.repository.updateSsdById(id, data);
    return ssd;
  }

  async deleteSsdById(inputSsd: { id: string }): Promise<SsdModel> {
    const { id } = inputSsd;
    const ssd = await super.deleteById(id);
    return ssd;
  }
}

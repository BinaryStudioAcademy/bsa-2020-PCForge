import { SsdCreationAttributes, SsdModel } from '../../data/models/ssd';
import { IWithMeta } from '../../data/repositories/base.repository';
import { ISsdFilter } from '../../data/repositories/filters/ssd.filter';
import { SsdRepository } from '../../data/repositories/ssd.repository';
import { triggerServerError } from '../../helpers/global.helper';

export class SsdService {
  constructor(private repository: SsdRepository) {}

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
    const oldSsd = await this.repository.getSsdById(id);
    if (!oldSsd) {
      triggerServerError(`Ssd with id: ${id} does not exists`, 404);
    }
    const ssd = await this.repository.updateSsdById(id, data);
    return ssd;
  }

  async deleteSsdById(inputSsd: { id: string }): Promise<void> {
    const { id } = inputSsd;
    await this.repository.deleteSsdById(id);
  }
}

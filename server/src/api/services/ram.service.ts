import { RamCreationAttributes, RamModel } from '../../data/models/ram';
import { IWithMeta } from '../../data/repositories/base.repository';
import { IRamFilter } from '../../data/repositories/filters/ram.filter';
import { RamRepository } from '../../data/repositories/ram.repository';
import { triggerServerError } from '../../helpers/global.helper';
import { BaseService } from './base.service';

export class RamService extends BaseService<RamModel, RamRepository> {
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
    const rams = await this.repository.getAllRams(filter);
    return rams;
  }

  async createRam(inputRam: RamCreationAttributes): Promise<RamModel> {
    const ram = await super.create(inputRam);
    return ram;
  }

  async updateRamById({ id, data }: { id: string; data: RamCreationAttributes }): Promise<RamModel> {
    const ram = await super.updateById(id, data);
    return ram;
  }

  async deleteRamById(id: string): Promise<void> {
    await super.deleteById(id);
  }
}

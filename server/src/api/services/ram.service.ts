import { RamCreationAttributes, RamModel } from '../../data/models/ram';
import { IWithMeta } from '../../data/repositories/base.repository';
import { IRamFilter } from '../../data/repositories/filters/ram.filter';
import { RamRepository } from '../../data/repositories/ram.repository';
import { triggerServerError } from '../../helpers/global.helper';

export class RamService {
  constructor(private repository: RamRepository) {}

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
    const ram = await this.repository.createRam(inputRam);
    return ram;
  }

  async updateRamById(inputRam: { id: string; data: RamCreationAttributes }): Promise<RamModel> {
    const { id, data } = inputRam;
    const oldRam = await this.repository.getRamById(id);
    if (!oldRam) {
      triggerServerError(`Ram with id: ${id} does not exists`, 404);
    }
    const ram = await this.repository.updateRamById(id, data);
    return ram;
  }

  async deleteRamById(inputRam: { id: string }): Promise<void> {
    const { id } = inputRam;
    await this.repository.deleteRamById(id);
  }
}

import { RamDataAttributes, RamModel } from '../../data/models/ram';
import { RamRepository } from '../../data/repositories/ram.repository';

export class RamService {
  constructor(private repository: RamRepository) {}

  async getRamById(id: string): Promise<RamModel> {
    const ram = await this.repository.getRamById(id);
    return ram;
  }

  async getAllRams(): Promise<RamModel[]> {
    const rams = await this.repository.getAllRams();
    return rams;
  }

  async createRam(inputRam: RamDataAttributes): Promise<RamModel> {
    const ram = await this.repository.createRam(inputRam);
    return ram;
  }

  async updateRamById(inputRam: { id: string; data: RamDataAttributes }): Promise<RamModel> {
    const { id, data } = inputRam;
    const oldRam = await this.repository.getRamById(id);
    if (!oldRam) {
      throw new Error(`Ram with id: ${id} does not exists`);
    }
    const ram = await this.repository.updateRamById(id, data);
    return ram;
  }

  async deleteRamById(inputRam: { id: string }): Promise<void> {
    const { id } = inputRam;
    await this.repository.deleteRamById(id);
  }
}

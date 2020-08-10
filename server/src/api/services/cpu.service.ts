import { CpuDataAttributes, CpuModel } from '../../data/models/cpu';
import { CpuRepository } from '../../data/repositories/cpu.repository';
import { ISocketFilter } from '../../data/repositories/repositoriesFilterInterfaces';

export class CpuService {
  constructor(private repository: CpuRepository) {}

  async getCpuById(id: string): Promise<CpuModel> {
    const cpu = await this.repository.getCpuById(id);
    return cpu;
  }

  async getAllCpus(filter: ISocketFilter): Promise<CpuModel[]> {
    const cpus = await this.repository.getAllCpus(filter);
    return cpus;
  }

  async createCpu(inputCpu: CpuDataAttributes): Promise<CpuModel> {
    const cpu = await this.repository.createCpu(inputCpu);
    return cpu;
  }

  async updateCpuById(inputCpu: { id: string; data: CpuDataAttributes }): Promise<CpuModel> {
    const { id, data } = inputCpu;
    const oldCpu = await this.repository.getCpuById(id);
    if (!oldCpu) {
      throw new Error(`Cpu with id: ${id} does not exists`);
    }
    const cpu = await this.repository.updateCpuById(id, data);
    return cpu;
  }

  async deleteCpuById(inputCpu: { id: string }): Promise<void> {
    const { id } = inputCpu;
    await this.repository.deleteCpuById(id);
  }
}

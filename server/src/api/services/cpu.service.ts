import { CpuCreationAttributes, CpuModel } from '../../data/models/cpu';
import { IWithMeta } from '../../data/repositories/base.repository';
import { CpuRepository } from '../../data/repositories/cpu.repository';
import { ICpuFilter } from '../../data/repositories/filters/cpu.filter';
import { Op } from 'sequelize';
import { triggerServerError } from '../../helpers/global.helper';

export class CpuService {
  constructor(private repository: CpuRepository) {}

  async getCpuById(id: string): Promise<CpuModel> {
    const cpu = await this.repository.getCpuById(id);
    if (!cpu) {
      triggerServerError(`Cpu with id: ${id} does not exists`, 404);
    }
    return cpu;
  }

  async getAllCpus(filter: ICpuFilter): Promise<IWithMeta<CpuModel>> {
    const cpus = await this.repository.getAllCpus(filter);
    return cpus;
  }

  async createCpu(inputCpu: CpuCreationAttributes): Promise<CpuModel> {
    const cpu = await this.repository.createCpu(inputCpu);
    return cpu;
  }

  async updateCpuById(inputCpu: { id: string; data: CpuCreationAttributes }): Promise<CpuModel> {
    const { id, data } = inputCpu;
    const oldCpu = await this.repository.getCpuById(id);
    if (!oldCpu) {
      triggerServerError(`Cpu with id: ${id} does not exists`, 404);
    }
    const cpu = await this.repository.updateCpuById(id, data);
    return cpu;
  }

  async deleteCpuById(inputCpu: { id: string }): Promise<void> {
    const { id } = inputCpu;
    await this.repository.deleteCpuById(id);
  }
}

import { CpuCreationAttributes, CpuModel } from '../../data/models/cpu';
import { IWithMeta } from '../../data/repositories/base.repository';
import { CpuRepository } from '../../data/repositories/cpu.repository';
import { ICpuFilter } from '../../data/repositories/filters/cpu.filter';
import { triggerServerError } from '../../helpers/global.helper';
import { BaseService } from './base.service';
import { ICpusMiddleware } from '../middlewares/cpu.middleware';

export class CpuService extends BaseService<CpuModel, CpuCreationAttributes, CpuRepository> {
  constructor(private repository: CpuRepository) {
    super(repository);
  }

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

  async createCpu(inputCpu: CpuCreationAttributes, cpuMiddleware: ICpusMiddleware): Promise<CpuModel> {
    await cpuMiddleware(inputCpu);
    const cpu = await super.create(inputCpu);
    return cpu;
  }

  async updateCpuById(
    inputCpu: { id: string; data: CpuCreationAttributes },
    cpuMiddleware: ICpusMiddleware
  ): Promise<CpuModel> {
    const { id, data } = inputCpu;
    await cpuMiddleware(data);
    const cpu = await super.updateById(id, data);
    return cpu;
  }

  async deleteCpuById(id: string): Promise<CpuModel> {
    return await super.deleteById(id);
  }
}

import { CpuCreationAttributes, CpuModel } from '../../data/models/cpu';
import { IWithMeta } from '../../data/repositories/base.repository';
import { CpuRepository } from '../../data/repositories/cpu.repository';
import { ICpuFilter } from '../../data/repositories/filters/cpu.filter';
import { triggerServerError } from '../../helpers/global.helper';
import { BaseService } from './base.service';

export class CpuService extends BaseService<CpuModel, CpuRepository> {
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

  async createCpu(inputCpu: CpuCreationAttributes): Promise<CpuModel> {
    const cpu = await super.create(inputCpu);
    return cpu;
  }

  async updateCpuById({ id, data }: { id: string; data: CpuCreationAttributes }): Promise<CpuModel> {
    const cpu = await super.updateById(id, data);
    return cpu;
  }

  async deleteCpuById(inputCpu: { id: string }): Promise<void> {
    const { id } = inputCpu;
    await this.repository.deleteCpuById(id);
  }
}

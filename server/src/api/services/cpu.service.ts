import { CpuCreationAttributes, CpuModel } from '../../data/models/cpu';
import { IWithMeta } from '../../data/repositories/base.repository';
import { CpuRepository } from '../../data/repositories/cpu.repository';
import { ICpuFilter } from '../../data/repositories/filters/cpu.filter';
import { triggerServerError } from '../../helpers/global.helper';
import { BaseService } from './base.service';
import { ICpusMiddleware } from '../middlewares/cpu.middleware';
import { ElasticService } from './elsticsearch.service';

const elastic = new ElasticService('cpus');
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
    if (filter.name) {
      const ids = await elastic.searchIDs({
        input: filter.name,
        searchFields: ['name'],
      });
      filter.id = ids.length ? ids : [-1];
    }
    const cpus = await this.repository.getAllCpus(filter);
    return cpus;
  }

  async createCpu(inputCpu: CpuCreationAttributes, cpuMiddleware: ICpusMiddleware): Promise<CpuModel> {
    await cpuMiddleware(inputCpu);
    const cpu = await super.create(inputCpu);
    await elastic.addData(cpu, 'cpus').catch((err) => console.log(err));
    return cpu;
  }

  async updateCpuById(
    inputCpu: { id: string; data: CpuCreationAttributes },
    cpuMiddleware: ICpusMiddleware
  ): Promise<CpuModel> {
    const { id, data } = inputCpu;
    await cpuMiddleware(data);
    const cpu = await super.updateById(id, data);
    await elastic.updateData(cpu);
    return cpu;
  }

  async deleteCpuById(id: string): Promise<CpuModel> {
    const cpu = await super.deleteById(id);
    elastic.delete(id);
    return cpu;
  }
}

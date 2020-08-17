import { GpuCreationAttributes, GpuModel, GpuStatic } from '../models/gpu';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { IFilter } from './filters/base.filter';
import { IGpuFilter } from './filters/gpu.filter';
import { mergeFilters } from './filters/helper';
import { Op } from 'sequelize';

export class GpuRepository extends BaseRepository<GpuModel, IFilter> {
  constructor(private model: GpuStatic) {
    super(<RichModel>model, IFilter);
  }

  async getGpuById(id: string): Promise<GpuModel> {
    const gpu = await this.getById(id);
    return gpu;
  }

  async getAllGpus(inputFilter: IGpuFilter): Promise<IWithMeta<GpuModel>> {
    const filter = new IGpuFilter(inputFilter);
    const gpus = await this.getAll(
      {
        group: ['gpu.id'],
      },
      filter
    );
    return gpus;
  }

  async createGpu(inputGpu: GpuCreationAttributes): Promise<GpuModel> {
    const gpu = await this.model.create(inputGpu);
    return gpu;
  }

  async updateGpuById(id: string, inputGpu: GpuCreationAttributes): Promise<GpuModel> {
    const gpu = await this.updateById(id, inputGpu);
    return gpu;
  }

  async deleteGpuById(id: string): Promise<void> {
    await this.deleteById(id);
  }
}

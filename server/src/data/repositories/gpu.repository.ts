import { GpuCreationAttributes, GpuModel, GpuStatic } from '../models/Gpu';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { IFilter, FilterDefaults } from './repositoriesFilterInterfaces';

export class GpuRepository extends BaseRepository<GpuModel> {
  constructor(private model: GpuStatic) {
    super(<RichModel>model);
  }

  async getGpuById(id: string): Promise<GpuModel> {
    const gpu = await this.getById(id);
    return gpu;
  }

  async getAllGpus(filter: IFilter): Promise<IWithMeta<GpuModel>> {
    const { from: offset, count: limit } = { ...FilterDefaults, ...filter };
    const gpus = await this.getAll({
      group: ['gpu.id'],
      order: [['id', 'ASC']],
      offset: offset,
      limit: limit,
    });
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

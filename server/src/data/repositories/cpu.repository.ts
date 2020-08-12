import { CpuCreationAttributes, CpuModel, CpuStatic } from '../models/cpu';
import { SocketStatic } from '../models/socket';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { ICpuFilter, CpuFilterDefaults } from './repositoriesFilterInterfaces';

export class CpuRepository extends BaseRepository<CpuModel> {
  constructor(private model: CpuStatic, private socketModel: SocketStatic) {
    super(<RichModel>model);
  }

  async getCpuById(id: string): Promise<CpuModel> {
    const cpu = await this.model.findByPk(id, {
      group: ['cpu.id', 'socket.id'],
      include: [
        {
          model: this.socketModel,
        },
      ],
    });
    return cpu;
  }

  async getAllCpus(filter: ICpuFilter): Promise<IWithMeta<CpuModel>> {
    const cpus = await this.getAll(filter, {
      group: ['cpu.id', 'socket.id'],
      include: [
        {
          model: this.socketModel,
        },
      ],
    });
    return cpus;
  }

  async createCpu(inputCpu: CpuCreationAttributes): Promise<CpuModel> {
    const { id } = await this.model.create(inputCpu);
    const cpu = this.getCpuById(id.toString());
    return cpu;
  }

  async updateCpuById(id: string, inputCpu: CpuCreationAttributes): Promise<CpuModel> {
    const cpu = await this.updateById(id, inputCpu);
    return cpu;
  }

  async deleteCpuById(id: string): Promise<void> {
    await this.deleteById(id);
  }
}

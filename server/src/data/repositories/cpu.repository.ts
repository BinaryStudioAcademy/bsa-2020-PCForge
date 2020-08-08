import { CpuDataAttributes, CpuModel, CpuStatic } from '../models/cpu';
import { SocketStatic } from '../models/socket';
import { BaseRepository, RichModel } from './base.repository';

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
          attributes: ['id', 'name'],
        },
      ],
    });
    return cpu;
  }

  async getAllCpus(): Promise<CpuModel[]> {
    const cpus = await this.model.findAll({
      group: ['cpu.id', 'socket.id'],
      include: [
        {
          model: this.socketModel,
          attributes: ['id', 'name'],
        },
      ],
    });
    return cpus;
  }

  async createCpu(inputCpu: CpuDataAttributes): Promise<CpuModel> {
    const { id } = await this.model.create(inputCpu);
    const cpu = this.getCpuById(id.toString());
    return cpu;
  }

  async updateCpuById(id: string, inputCpu: CpuDataAttributes): Promise<CpuModel> {
    const cpu = await this.updateById(id, inputCpu);
    return cpu;
  }

  async deleteCpuById(id: string): Promise<void> {
    await this.deleteById(id);
  }
}

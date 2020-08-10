import { CpuDataAttributes, CpuModel, CpuStatic } from '../models/cpu';
import { SocketStatic } from '../models/socket';
import { BaseRepository, RichModel } from './base.repository';
import { Op } from 'sequelize';

interface ICpuFilter {
  socketId: string;
  from: number;
  count: number;
}

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

  private notNullSocket = { [Op.ne]: null };

  async getAllCpus(filter: ICpuFilter): Promise<CpuModel[]> {
    const { socketId = this.notNullSocket, from: offset = 0, count: limit = 50 } = filter;
    const cpus = await this.model.findAll({
      group: ['cpu.id', 'socket.id'],
      where: { socketId },
      include: [
        {
          model: this.socketModel,
          attributes: ['id', 'name'],
        },
      ],
      order: [['id', 'ASC']],
      offset: offset,
      limit: limit,
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

import { CpuCreationAttributes, CpuModel, CpuStatic } from '../models/cpu';
import { SocketStatic } from '../models/socket';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { ICpuFilter } from './filters/cpu.filter';
import { mergeFilters } from './filters/helper';

export class CpuRepository extends BaseRepository<CpuModel, ICpuFilter> {
  constructor(private model: CpuStatic, private socketModel: SocketStatic) {
    super(<RichModel>model, ICpuFilter);
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

  async getAllCpus(inputFilter: ICpuFilter): Promise<IWithMeta<CpuModel>> {
    const filter = mergeFilters<ICpuFilter>(new ICpuFilter(), inputFilter);
    const cpus = await this.getAll(
      {
        group: ['cpu.id', 'socket.id'],
        include: [
          {
            model: this.socketModel,
            where: {
              id: filter.socket.id,
            },
          },
        ],
      },
      filter
    );
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

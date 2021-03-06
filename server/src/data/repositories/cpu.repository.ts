import { CpuCreationAttributes, CpuModel, CpuStatic } from '../models/cpu';
import { SocketStatic } from '../models/socket';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { ICpuFilter } from './filters/cpu.filter';
import { mergeFilters } from './filters/helper';
import { Op } from 'sequelize';

export class CpuRepository extends BaseRepository<CpuModel, CpuCreationAttributes, ICpuFilter> {
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
        where: {
          clockspeed: {
            [Op.between]: [filter.clockspeed.minValue, filter.clockspeed.maxValue],
          },
          id: { [Op.and]: { [Op.or]: filter.id, [Op.not]: filter.excludedId } },
        },
        include: [
          {
            model: this.socketModel,
            where: {
              id: filter.socketId,
            },
          },
        ],
      },
      filter
    );
    return cpus;
  }
}

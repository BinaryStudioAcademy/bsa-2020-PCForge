import { MotherboardCreationAttributes, MotherboardModel, MotherboardStatic } from '../models/motherboard';
import { RamTypeStatic } from '../models/ramtype';
import { SocketStatic } from '../models/socket';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { mergeFilters } from './filters/helper';
import { IMotherboardFilter } from './filters/motherboard.filter';

export class MotherboardRepository extends BaseRepository<
  MotherboardModel,
  MotherboardCreationAttributes,
  IMotherboardFilter
> {
  constructor(
    private model: MotherboardStatic,
    private ramTypeModel: RamTypeStatic,
    private socketModel: SocketStatic
  ) {
    super(<RichModel>model, IMotherboardFilter);
  }

  async getMotherboardById(id: string): Promise<MotherboardModel> {
    const motherboard = await this.model.findOne({
      group: ['motherboard.id', 'socket.id', 'ramType.id'],
      where: { id },
      include: [
        {
          model: this.ramTypeModel,
        },
        {
          model: this.socketModel,
        },
      ],
    });
    return motherboard;
  }

  async getAllMotherboards(inputFilter: IMotherboardFilter): Promise<IWithMeta<MotherboardModel>> {
    const filter = mergeFilters<IMotherboardFilter>(new IMotherboardFilter(), inputFilter);
    const motherboards = await this.getAll(
      {
        group: ['motherboard.id', 'socket.id', 'ramType.id'],
        include: [
          {
            model: this.ramTypeModel,
            where: {
              id: filter.ramTypeId,
            },
          },
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
    return motherboards;
  }
}

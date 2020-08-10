import { MotherboardDataAttributes, MotherboardModel, MotherboardStatic } from '../models/Motherboard';
import { RamTypeStatic } from '../models/ramtype';
import { SocketStatic } from '../models/socket';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { Op } from 'sequelize';

interface IMotherboardFilter {
  socketId: string;
  from: number;
  count: number;
}

export class MotherboardRepository extends BaseRepository<MotherboardModel> {
  constructor(
    private model: MotherboardStatic,
    private ramTypeModel: RamTypeStatic,
    private socketModel: SocketStatic
  ) {
    super(<RichModel>model);
  }

  async getMotherboardById(id: string): Promise<MotherboardModel> {
    const motherboard = await this.model.findOne({
      group: ['motherboard.id', 'socket.id', 'ramType.id'],
      where: { id },
      include: [
        {
          model: this.ramTypeModel,
          attributes: ['id', 'name'],
        },
        {
          model: this.socketModel,
          attributes: ['id', 'name'],
        },
      ],
    });
    return motherboard;
  }

  private notNullSocket = { [Op.ne]: null };

  async getAllMotherboards(filter: IMotherboardFilter): Promise<IWithMeta<MotherboardModel>> {
    const { socketId = this.notNullSocket, from: offset = 0, count: limit = 50 } = filter;
    const motherboards = await this.getAll({
      group: ['motherboard.id', 'socket.id', 'ramType.id'],
      where: { socketId: socketId },
      include: [
        {
          model: this.ramTypeModel,
          attributes: ['id', 'name'],
        },
        {
          model: this.socketModel,
          attributes: ['id', 'name'],
        },
      ],
      order: [['id', 'ASC']],
      offset: offset,
      limit: limit,
    });
    return motherboards;
  }

  async createMotherboard(inputMotherboard: MotherboardDataAttributes): Promise<MotherboardModel> {
    const { id } = await this.model.create(inputMotherboard);
    const motherboard = this.getMotherboardById(id.toString());
    return motherboard;
  }

  async updateMotherboardById(id: string, inputMotherboard: MotherboardDataAttributes): Promise<MotherboardModel> {
    const motherboard = await this.updateById(id, inputMotherboard);
    return motherboard;
  }

  async deleteMotherboardById(id: string): Promise<void> {
    await this.deleteById(id);
  }
}

import { MotherboardCreationAttributes, MotherboardModel, MotherboardStatic } from '../models/motherboard';
import { RamTypeStatic } from '../models/ramtype';
import { SocketStatic } from '../models/socket';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { IMotherboardFilter, MotherboardFilterDefaults } from './repositoriesFilterInterfaces';

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
        },
        {
          model: this.socketModel,
        },
      ],
    });
    return motherboard;
  }

  async getAllMotherboards(filter: IMotherboardFilter): Promise<IWithMeta<MotherboardModel>> {
    const { socketId, ramTypeId } = { ...MotherboardFilterDefaults, ...filter };
    const motherboards = await this.getAll(filter, {
      group: ['motherboard.id', 'socket.id', 'ramType.id'],
      where: { socketId, ramTypeId },
      include: [
        {
          model: this.ramTypeModel,
        },
        {
          model: this.socketModel,
        },
      ],
    });
    return motherboards;
  }

  async createMotherboard(inputMotherboard: MotherboardCreationAttributes): Promise<MotherboardModel> {
    const { id } = await this.model.create(inputMotherboard);
    const motherboard = this.getMotherboardById(id.toString());
    return motherboard;
  }

  async updateMotherboardById(id: string, inputMotherboard: MotherboardCreationAttributes): Promise<MotherboardModel> {
    const motherboard = await this.updateById(id, inputMotherboard);
    return motherboard;
  }

  async deleteMotherboardById(id: string): Promise<void> {
    await this.deleteById(id);
  }
}

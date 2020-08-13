import { SocketCreationAttributes, SocketModel, SocketStatic } from '../models/socket';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { IFilter } from './filters/base.filter';
import { ISocketFilter } from './filters/socket.filter';

export class SocketRepository extends BaseRepository<SocketModel, IFilter> {
  constructor(private model: SocketStatic) {
    super(<RichModel>model, IFilter);
  }

  async getSocketById(id: string): Promise<SocketModel> {
    const socket = await this.getById(id);
    return socket;
  }

  async getAllSockets(inputFilter: ISocketFilter): Promise<IWithMeta<SocketModel>> {
    const filter = inputFilter || new ISocketFilter();
    const sockets = await this.getAll(
      {
        group: ['socket.id'],
        where: {
          id: filter.id,
        },
      },
      filter
    );
    return sockets;
  }

  async createSocket(inputSocket: SocketCreationAttributes): Promise<SocketModel> {
    const socket = await this.model.create(inputSocket);
    return socket;
  }

  async updateSocketById(id: string, inputSocket: SocketCreationAttributes): Promise<SocketModel> {
    const socket = await this.updateById(id, inputSocket);
    return socket;
  }

  async deleteSocketById(id: string): Promise<void> {
    await this.deleteById(id);
  }
}

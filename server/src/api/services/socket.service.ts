import { SocketCreationAttributes, SocketModel } from '../../data/models/socket';
import { IWithMeta } from '../../data/repositories/base.repository';
import { IFilter } from '../../data/repositories/filters/base.filter';
import { SocketRepository } from '../../data/repositories/socket.repository';
import { triggerServerError } from '../../helpers/global.helper';
import { BaseService } from './base.service';

export class SocketService extends BaseService<SocketModel, SocketCreationAttributes, SocketRepository> {
  constructor(private repository: SocketRepository) {
    super(repository);
  }

  async getSocketById(id: string): Promise<SocketModel> {
    const socket = await this.repository.getSocketById(id);
    if (!socket) {
      triggerServerError(`Socket with id: ${id} does not exists`, 404);
    }
    return socket;
  }

  async getAllSockets(filter: IFilter): Promise<IWithMeta<SocketModel>> {
    const sockets = await this.repository.getAllSockets(filter);
    return sockets;
  }

  async createSocket(inputSocket: SocketCreationAttributes): Promise<SocketModel> {
    const socket = await super.create(inputSocket);
    return socket;
  }

  async updateSocketById({ id, data }: { id: string; data: SocketCreationAttributes }): Promise<SocketModel> {
    const socket = await super.updateById(id, data);
    return socket;
  }

  async deleteSocketById(id: string): Promise<SocketModel> {
    return await super.deleteById(id);
  }
}

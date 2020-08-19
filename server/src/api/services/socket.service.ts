import { SocketCreationAttributes, SocketModel } from '../../data/models/socket';
import { IWithMeta } from '../../data/repositories/base.repository';
import { IFilter } from '../../data/repositories/filters/base.filter';
import { SocketRepository } from '../../data/repositories/socket.repository';
import { triggerServerError } from '../../helpers/global.helper';

export class SocketService {
  constructor(private repository: SocketRepository) {}

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
    const socket = await this.repository.createSocket(inputSocket);
    return socket;
  }

  async updateSocketById(inputSocket: { id: string; data: SocketCreationAttributes }): Promise<SocketModel> {
    const { id, data } = inputSocket;
    const oldSocket = await this.repository.getSocketById(id);
    if (!oldSocket) {
      triggerServerError(`Socket with id: ${id} does not exists`, 404);
    }
    const socket = await this.repository.updateSocketById(id, data);
    return socket;
  }

  async deleteSocketById(id: string): Promise<void> {
    await this.repository.deleteSocketById(id);
  }
}

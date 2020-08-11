import { SocketCreationAttributes, SocketModel } from '../../data/models/socket';
import { SocketRepository } from '../../data/repositories/socket.repository';

export class SocketService {
  constructor(private repository: SocketRepository) {}

  async getSocketById(id: string): Promise<SocketModel> {
    const socket = await this.repository.getSocketById(id);
    return socket;
  }

  async getAllSockets(): Promise<SocketModel[]> {
    const sockets = await this.repository.getAllSockets();
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
      throw new Error(`Socket with id: ${id} does not exists`);
    }
    const socket = await this.repository.updateSocketById(id, data);
    return socket;
  }

  async deleteSocketById(inputSocket: { id: string }): Promise<void> {
    const { id } = inputSocket;
    await this.repository.deleteSocketById(id);
  }
}

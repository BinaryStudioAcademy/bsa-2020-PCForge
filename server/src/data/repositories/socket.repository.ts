import { SocketCreationAttributes, SocketModel, SocketStatic } from '../models/socket';
import { BaseRepository, RichModel } from './base.repository';

export class SocketRepository extends BaseRepository<SocketModel> {
  constructor(private model: SocketStatic) {
    super(<RichModel>model);
  }

  async getSocketById(id: string): Promise<SocketModel> {
    const socket = await this.getById(id);
    return socket;
  }

  async getAllSockets(): Promise<SocketModel[]> {
    const sockets = await this.getAll();
    return sockets.data;
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

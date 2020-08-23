import { SocketCreationAttributes, SocketModel, SocketStatic } from '../models/socket';
import { BaseRepository, IWithMeta, RichModel } from './base.repository';
import { IFilter } from './filters/base.filter';
import { mergeFilters } from './filters/helper';

export class SocketRepository extends BaseRepository<SocketModel, IFilter> {
  constructor(private model: SocketStatic) {
    super(<RichModel>model, IFilter);
  }

  async getSocketById(id: string): Promise<SocketModel> {
    const socket = await this.getById(id);
    return socket;
  }

  async getAllSockets(inputFilter: IFilter): Promise<IWithMeta<SocketModel>> {
    const filter = mergeFilters<IFilter>(new IFilter(), inputFilter);
    const sockets = await this.getAll(
      {
        group: ['socket.id'],
      },
      filter
    );
    return sockets;
  }
}

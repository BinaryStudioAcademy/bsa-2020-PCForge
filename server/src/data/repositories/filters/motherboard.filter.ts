import { IFilter } from './base.filter';
import { IRamTypeFilter } from './ramType.filter';
import { ISocketFilter } from './socket.filter';

export class IMotherboardFilter extends IFilter {
  constructor() {
    super();
  }
  socket: ISocketFilter = new ISocketFilter();
  ramType: IRamTypeFilter = new IRamTypeFilter();
}

import { IFilter } from './base.filter';
import { ISocketFilter } from './socket.filter';

export class ICpuFilter extends IFilter {
  constructor() {
    super();
  }
  socket: ISocketFilter = new ISocketFilter();
}

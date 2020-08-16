import { IFilter } from './base.filter';
import { FilterByIdType, notNull } from './types';

export class ICpuFilter extends IFilter {
  constructor() {
    super();
  }
  socketId: FilterByIdType = notNull;
}

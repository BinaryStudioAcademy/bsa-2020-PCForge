import { FilterByIdType, notNull } from './types';
import { IFilter } from './base.filter';

export class ICpuFilter extends IFilter {
  constructor() {
    super();
  }
  socketId: FilterByIdType = notNull;
}

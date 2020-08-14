import { FilterByIdType, notNull, FilterByNameType } from './types';
import { IFilter } from './base.filter';

export class ICpuFilter extends IFilter {
  constructor() {
    super();
  }
  socketId: FilterByIdType = notNull;
  name: FilterByNameType = null;
}

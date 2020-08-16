import { IFilter } from './base.filter';
import { FilterByIdType, notNull } from './types';

export class IMotherboardFilter extends IFilter {
  constructor() {
    super();
  }
  socketId: FilterByIdType = notNull;
  ramTypeId: FilterByIdType = notNull;
}

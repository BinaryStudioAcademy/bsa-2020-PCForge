import { IFilter } from './base.filter';
import { FilterByIdType, notNull } from './types';

export class IMotherboardFilter extends IFilter {
  ramTypeId: FilterByIdType = notNull;
  socketId: FilterByIdType = notNull;
}

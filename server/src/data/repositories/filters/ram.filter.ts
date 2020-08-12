import { IFilter } from './base.filter';
import { FilterByIdType, notNull } from './types';

export class IRamFilter extends IFilter {
  typeId: FilterByIdType = notNull;
}

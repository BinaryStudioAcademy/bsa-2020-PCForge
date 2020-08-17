import { IFilter } from './base.filter';
import { FilterByIdType, notNull } from './types';

export class IRamTypeFilter extends IFilter {
  constructor() {
    super();
  }
  id: FilterByIdType = notNull;
}

import { IFilter } from './base.filter';
import { FilterByIdType, notNull, FilterByNameType } from './types';

export class IRamFilter extends IFilter {
  constructor() {
    super();
  }
  typeId: FilterByIdType = notNull;
  name: FilterByNameType = null;
}

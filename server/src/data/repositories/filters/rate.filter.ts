import { IFilter } from './base.filter';
import { FilterByIdType, notNull } from './types';

export class IRateFilter extends IFilter {
  constructor() {
    super();
  }
  ratebleType: FilterByIdType = notNull;
  ratebleId: FilterByIdType = notNull;
}

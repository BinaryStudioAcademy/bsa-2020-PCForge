import { IFilter } from './base.filter';
import { FilterByNumberType, notNull } from './types';

export class IGameFilter extends IFilter {
  constructor() {
    super();
  }
  year: FilterByNumberType = notNull;
}

import { IFilter } from './base.filter';
import { FilterByIdType, notNull, FilterByNameType } from './types';

export class IGameFilter extends IFilter {
  constructor() {
    super();
  }
  //TODO: move to separate type
  year: FilterByIdType = notNull;
  name: FilterByNameType = null;
}

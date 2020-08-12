import { IFilter } from './base.filter';
import { FilterByIdType, notNull } from './types';

export class IGameFilter extends IFilter {
  constructor() {
    super();
  }
  //TODO: move to separate type
  year: FilterByIdType = notNull;
}

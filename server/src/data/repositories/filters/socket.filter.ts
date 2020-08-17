import { FilterByIdType, notNull } from './types';
import { IFilter } from './base.filter';

export class ISocketFilter extends IFilter {
  constructor() {
    super();
  }
  id: FilterByIdType = notNull;
}

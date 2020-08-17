import { IFilter } from './base.filter';
import { FilterByIdType, notNull } from './types';

export class IRamTypeFilter extends IFilter {
  constructor(primal?: IRamTypeFilter) {
    super(primal);
    if (!primal) return;

    if (primal.id) {
      this.id = primal.id;
    }
  }

  id: FilterByIdType = notNull;
}

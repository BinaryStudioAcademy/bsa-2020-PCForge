import { IFilter } from './base.filter';
import { IRamTypeFilter } from './ramType.filter';

export class IRamFilter extends IFilter {
  constructor() {
    super();
  }
  type: IRamTypeFilter;
}

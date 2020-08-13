import { IFilter } from './base.filter';
import { IRamTypeFilter } from './ramType.filter';
import { FilterRangeType } from './types';

export class IRamFilter extends IFilter {
  constructor() {
    super();
  }
  type: IRamTypeFilter = new IRamTypeFilter();
  memorySize: FilterRangeType<number> = {
    minValue: 0,
    maxValue: 100,
  };
}

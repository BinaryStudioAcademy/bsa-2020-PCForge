import { IFilter } from './base.filter';
import { FilterByIdType, FilterRangeType, notNull } from './types';

export class IRamFilter extends IFilter {
  constructor() {
    super();
  }
  typeId: FilterByIdType = notNull;
  memorySize: FilterRangeType<number> = {
    minValue: 0,
    maxValue: 100,
  };
}

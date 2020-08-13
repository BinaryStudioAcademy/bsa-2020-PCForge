import { IFilter } from './base.filter';

export class IRangeFilter extends IFilter {
  constructor() {
    super();
  }
  minValue = 0;
  maxValue = 50;
}

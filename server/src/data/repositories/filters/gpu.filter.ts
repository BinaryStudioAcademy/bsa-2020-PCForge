import { IFilter } from './base.filter';
import { FilterByNameType } from './types';

export class IGpuFilter extends IFilter {
  constructor() {
    super();
  }
  name: FilterByNameType = null;
}

import { FilterByNameType, FilterByNumberType, FilterRangeType, notNull } from './types';
import { IFilter } from './base.filter';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class IPowerSupplyFilter extends IFilter {
  constructor() {
    super();
  }
  id: FilterByNumberType = notNull;
  excludedId: FilterByNumberType = [];
  power: FilterRangeType<number> = {
    minValue: 0,
    maxValue: 10000,
  };
  name: FilterByNameType = null;

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      ...IFilter.schema.properties,
      name: {
        type: 'string',
        nullable: true,
      },
    },
  };
}

import { IFilter } from './base.filter';
import { FilterRangeType, FilterByNameType, notNull, FilterByNumberType } from './types';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class IHddFilter extends IFilter {
  constructor() {
    super();
  }
  id: FilterByNumberType = notNull;
  excludedId: FilterByNumberType = [];
  sata: FilterByNumberType = notNull;
  capacity: FilterRangeType<number> = {
    minValue: 0,
    maxValue: 1000000,
  };
  name: FilterByNameType = null;

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      ...IFilter.schema.properties,
      sata: {
        type: 'number',
        minimum: 1,
        nullable: true,
      },
      name: {
        type: 'string',
        minimum: 1,
        nullable: true,
      },
    },
  };
}

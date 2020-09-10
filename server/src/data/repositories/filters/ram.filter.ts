import { IFilter } from './base.filter';
import { FilterByIdType, FilterRangeType, FilterByNameType, notNull, FilterByNumberType } from './types';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class IRamFilter extends IFilter {
  constructor() {
    super();
  }
  id: FilterByNumberType = notNull;
  excludedId: FilterByNumberType = [];
  typeId: FilterByIdType = notNull;
  memorySize: FilterRangeType<number> = {
    minValue: 0,
    maxValue: 100,
  };
  name: FilterByNameType = null;
  searchString?: string = '';

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      ...IFilter.schema.properties,
      typeId: {
        type: 'integer',
        minimum: 1,
        nullable: true,
      },
      typeIds: {
        type: 'array',
        items: {
          type: 'integer',
          minimum: 1,
        },
        nullable: true,
      },
      name: {
        type: 'string',
        nullable: true,
      },
      searchString: {
        type: 'string',
        nullable: true,
      },
    },
  };
}

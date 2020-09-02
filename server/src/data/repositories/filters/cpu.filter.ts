import { FilterByIdType, notNull, FilterByNameType, FilterRangeType } from './types';
import { IFilter } from './base.filter';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class ICpuFilter extends IFilter {
  constructor() {
    super();
  }
  socketId: FilterByIdType = notNull;
  sockerIds?: number[];
  clockspeed: FilterRangeType<number> = {
    minValue: 0,
    maxValue: 10000,
  };
  name: FilterByNameType = '';

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      ...IFilter.schema.properties,
      socketId: {
        type: 'integer',
        nullable: true,
      },
      socketIds: {
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
    },
  };
}

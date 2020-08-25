import { FilterByIdType, notNull, FilterByNameType, FilterRangeType } from './types';
import { IFilter } from './base.filter';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class ICpuFilter extends IFilter {
  constructor() {
    super();
  }
  socketId: FilterByIdType = notNull;
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
        oneOf: [
          {
            type: 'integer',
            minimum: 1,
          },
          {
            type: 'array',
            items: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        nullable: true,
      },
      name: {
        oneOf: [
          {
            type: 'string',
            minLength: 1,
          },
          {
            type: 'array',
            items: {
              type: 'string',
              minLength: 1,
            },
          },
        ],
        nullable: true,
      },
    },
  };
}

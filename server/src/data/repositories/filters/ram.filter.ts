import { IFilter } from './base.filter';
import { FilterByIdType, FilterRangeType, FilterByNameType, notNull } from './types';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class IRamFilter extends IFilter {
  constructor() {
    super();
  }
  typeId: FilterByIdType = notNull;
  memorySize: FilterRangeType<number> = {
    minValue: 0,
    maxValue: 100,
  };
  name: FilterByNameType = null;

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      ...IFilter.schema.properties,
      typeId: {
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

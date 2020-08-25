import { FilterByIdType, notNull, FilterByNameType } from './types';
import { IFilter } from './base.filter';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class ICpuFilter extends IFilter {
  constructor() {
    super();
  }
  socketId: FilterByIdType = notNull;
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

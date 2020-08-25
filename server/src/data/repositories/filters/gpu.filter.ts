import { IFilter } from './base.filter';
import { FilterByNameType } from './types';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class IGpuFilter extends IFilter {
  constructor() {
    super();
  }
  name: FilterByNameType = null;

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      ...IFilter.schema.properties,
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

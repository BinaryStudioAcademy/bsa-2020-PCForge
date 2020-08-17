import { FilterByIdType, notNull } from './types';
import { IFilter } from './base.filter';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class ICpuFilter extends IFilter {
  constructor() {
    super();
  }
  socketId: FilterByIdType = notNull;

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      ...IFilter.schema.properties,
      socketId: {
        type: 'integer',
        minimum: 1,
        nullable: true
      },
      name: {
        type: 'string',
        nullable: true
      }
    }
  }
}

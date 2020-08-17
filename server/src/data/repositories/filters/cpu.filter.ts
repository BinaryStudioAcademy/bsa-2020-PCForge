import { IFilter } from './base.filter';
import { FilterByIdType, notNull } from './types';
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
        nullable: true
      },
      name: {
        type: 'string',
        nullable: true
      }
    }
  }
}

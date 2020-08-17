import { IFilter } from './base.filter';
import { FilterByIdType, notNull } from './types';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class IRamFilter extends IFilter {
  constructor() {
    super();
  }
  typeId: FilterByIdType = notNull;

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      ...IFilter.schema.properties,
      typeId: {
        type: 'number',
        minimum: 1,
        nullable: true
      },
      name: {
        type: 'string',
        minimum: 1,
        nullable: true
      }
    }
  }
}

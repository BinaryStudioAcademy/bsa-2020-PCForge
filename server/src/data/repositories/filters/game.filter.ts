import { IFilter } from './base.filter';
import { FilterByNumberType, notNull } from './types';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class IGameFilter extends IFilter {
  constructor() {
    super();
  }
  year: FilterByNumberType = notNull;

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      ...IFilter.schema.properties,
      year: {
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

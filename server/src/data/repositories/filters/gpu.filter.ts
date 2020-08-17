import { IFilter } from './base.filter';
import { FilterByNameType, notNull } from './types';
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
        type: 'string',
        minimum: 1,
        nullable: true
      }
    }
  }
}

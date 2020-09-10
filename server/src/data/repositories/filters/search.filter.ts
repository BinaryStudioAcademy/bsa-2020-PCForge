import { IFilter } from './base.filter';
import { FilterByNameType, notNull } from './types';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class ISearchFilter extends IFilter {
  constructor() {
    super();
  }
  name: FilterByNameType = notNull;

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      ...IFilter.schema.properties,
      name: {
        type: 'string',
        nullable: false,
      },
    },
  };
}

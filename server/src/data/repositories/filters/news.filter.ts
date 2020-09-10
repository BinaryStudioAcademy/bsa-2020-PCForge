import { notNull, FilterByNumberType } from './types';
import { IFilter } from './base.filter';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class INewsFilter extends IFilter {
  constructor() {
    super();
  }
  id: FilterByNumberType = notNull;
  name?: string = '';

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      ...IFilter.schema.properties,
    },
  };
}

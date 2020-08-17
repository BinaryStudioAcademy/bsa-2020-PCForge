import { IFilter } from './base.filter';
import { FilterByIdType, notNull } from './types';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class IRateFilter extends IFilter {
  constructor() {
    super();
  }
  ratebleType: FilterByIdType = notNull;
  ratebleId: FilterByIdType = notNull;

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      ...IFilter.schema.properties,
      ratebleType: {
        type: 'string',
        enum: ['news', 'game', 'setup'],
        nullable: true,
      },
      ratebleId: {
        type: 'integer',
        minimum: 1,
        nullable: true,
      },
    },
  };
}

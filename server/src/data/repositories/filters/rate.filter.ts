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
        minLength: 1,
        enum: ['news', 'game', 'setup', 'motherboard', 'powersupply', 'ram', 'cpu', 'gpu', 'ssd', 'hdd'],
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

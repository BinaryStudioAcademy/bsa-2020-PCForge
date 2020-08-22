import { IFilter } from './base.filter';
import { notNull, FilterByNameType } from './types';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class IAddRequestFilter extends IFilter {
  constructor() {
    super();
  }
  requestedType: FilterByNameType = notNull;

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      ...IFilter.schema.properties,
      requestedType: {
        type: 'string',
      minLength: 1,
        enum: ['cpu', 'gpu', 'game', 'motherboard', 'ram', 'powerSupply'],
        nullable: true,
      }
    }
  }
}

import { IFilter } from './base.filter';
import { notNull, FilterByNameType, FilterByIdType } from './types';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class IAddRequestFilter extends IFilter {
  constructor() {
    super();
  }

  requestedType: FilterByNameType = notNull;
  userId?: FilterByIdType = null;

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      ...IFilter.schema.properties,
      requestedType: {
        type: 'string',
        enum: ['hardware', 'game'],
        nullable: true,
      },
      userId: {
        type: 'string',
      },
    },
  };
}

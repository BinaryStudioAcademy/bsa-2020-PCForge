import { IFilter } from './base.filter';
import { FilterByIdType, notNull } from './types';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class IMotherboardFilter extends IFilter {
  constructor() {
    super();
  }
  ramTypeId: FilterByIdType = notNull;
  socketId: FilterByIdType = notNull;

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      ...IFilter.schema.properties,
      ramTypeId: {
        type: 'integer',
        nullable: true,
      },
      socketId: {
        type: 'integer',
        nullable: true
      }
    }
  }
}

import { IFilter } from './base.filter';
import { FilterByIdType, notNull } from './types';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class IGameFilter extends IFilter {
  constructor() {
    super();
  }
  //TODO: move to separate type
  year: FilterByIdType = notNull;

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      ...IFilter.schema.properties,
      year: {
        type: 'integer',
        nullable: true
      }
    }
  }
}

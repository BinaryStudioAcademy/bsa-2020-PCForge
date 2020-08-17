import { IFilter } from './base.filter';
import { IRamTypeFilter } from './ramType.filter';
import { FilterByIdType, FilterRangeType, notNull } from './types';
import { SwaggerSchema } from '../../models/swaggerSchema';

export class IRamFilter extends IFilter {
  constructor() {
    super();
  }
  memorySize: FilterRangeType<number> = {
    minValue: 0,
    maxValue: 100,
  };
  typeId: FilterByIdType = notNull;

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      ...IFilter.schema.properties,
      typeId: {
        type: 'number',
        minimum: 1,
        nullable: true
      },
      name: {
        type: 'string',
        minimum: 1,
        nullable: true
      }
    }
  }
}

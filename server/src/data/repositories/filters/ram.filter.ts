import { IFilter } from './base.filter';
import { IRamTypeFilter } from './ramType.filter';
import { FilterByIdType, FilterRangeType, FilterByNameType, notNull } from './types';
import { SwaggerSchema } from '../../models/swaggerSchema';
import { Op } from 'sequelize';

export class IRamFilter extends IFilter {
  constructor(primal?: IRamFilter) {
    super(primal);
    if (!primal) return;

    if (primal.name) {
      this.name = { [Op.iLike]: '%' + primal.name + '%' };
    }
    if (primal.memorySize) {
      this.memorySize = primal.memorySize;
    }
  }

  memorySize: FilterRangeType<number> = {
    minValue: 0,
    maxValue: 100,
  };
  typeId: FilterByIdType = notNull;
  name: FilterByNameType = null;

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

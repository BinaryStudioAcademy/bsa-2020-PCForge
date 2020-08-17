import { IFilter } from './base.filter';
import { FilterByNameType, notNull } from './types';
import { SwaggerSchema } from '../../models/swaggerSchema';
import { Op } from 'sequelize';

export class IGpuFilter extends IFilter {
  constructor(primal?: IGpuFilter) {
    super(primal);
    if (!primal) return;

    if (primal.name) {
      this.name = { [Op.iLike]: '%' + primal.name + '%' };
    }
  }

  name: FilterByNameType = notNull;

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      ...IFilter.schema.properties,
      name: {
        type: 'string',
        minimum: 1,
        nullable: true
      }
    }
  }
}

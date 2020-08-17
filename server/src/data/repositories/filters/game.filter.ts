import { IFilter } from './base.filter';
import { FilterByNumberType, FilterByNameType, notNull } from './types';
import { SwaggerSchema } from '../../models/swaggerSchema';
import { Op } from 'sequelize';

export class IGameFilter extends IFilter {
  constructor(primal?: IGameFilter) {
    super(primal);
    if (!primal) return;

    if (primal.name) {
      this.name = { [Op.iLike]: '%' + primal.name + '%' };
    }
    if (primal.year) {
      this.year = { [Op.eq]: primal.year }
    }
  }

  name: FilterByNameType = null;
  year: FilterByNumberType = notNull;

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      ...IFilter.schema.properties,
      year: {
        type: 'integer',
        nullable: true
      },
      name: {
        type: 'string',
        nullable: true
      }
    }
  }
}

import { FilterByIdType, notNull, FilterByNameType } from './types';
import { IFilter } from './base.filter';
import { SwaggerSchema } from '../../models/swaggerSchema';
import { Op } from 'sequelize';

export class ICpuFilter extends IFilter {
  constructor(primal?: ICpuFilter) {
    super(primal);
    if (!primal) return;

    if (primal.name) {
      this.name = { [Op.iLike]: '%' + primal.name + '%' };
    }
    if (primal.socketId) {
      this.socketId = { [Op.eq]: primal.socketId }
    }
  }
  socketId: FilterByIdType = notNull;
  name: FilterByNameType = null;

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      ...IFilter.schema.properties,
      socketId: {
        type: 'integer',
        minimum: 1,
        nullable: true
      },
      name: {
        type: 'string',
        nullable: true
      }
    }
  }
}

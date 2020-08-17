import { IFilter } from './base.filter';
import { FilterByIdType, notNull } from './types';
import { SwaggerSchema } from '../../models/swaggerSchema';
import { Op } from 'sequelize';

export class IRateFilter extends IFilter {
  constructor(primal?: IRateFilter) {
    super(primal);
    if (!primal) return;

    if (primal.ratebleId) {
      this.ratebleId = { [Op.eq]: primal.ratebleId }
    }
    if (primal.ratebleType) {
      this.ratebleType = { [Op.eq]: primal.ratebleType }
    }
  }

  ratebleType: FilterByIdType = notNull;
  ratebleId: FilterByIdType = notNull;

  static schema: SwaggerSchema = {
    type: 'object',
    properties: {
      ...IFilter.schema.properties,
      ratebleType: {
        type: 'string',
        enum: ['news', 'game', 'setup'],
        nullable: true,
      },
      ratebleId: {
        type: 'integer',
        minimum: 1,
        nullable: true,
      }
    }
  }
}

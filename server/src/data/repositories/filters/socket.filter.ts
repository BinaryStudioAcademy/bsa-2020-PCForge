import { FilterByIdType, notNull } from './types';
import { IFilter } from './base.filter';
import { Op } from 'sequelize';

export class ISocketFilter extends IFilter {
  constructor(primal?: ISocketFilter) {
    super(primal);
    if (!primal) {
      return;
    }
    if (primal.id) {
      this.id = {[Op.eq]: primal.id};
    }
  }

  id: FilterByIdType = notNull;
}

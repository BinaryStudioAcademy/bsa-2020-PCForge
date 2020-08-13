import { IFilter } from './base.filter';
import { FilterByIdType, notNull } from './types';

export class ICommentFilter extends IFilter {
  constructor() {
    super();
  }
  commentableType: FilterByIdType = notNull;
  commentableId: FilterByIdType = notNull;
}

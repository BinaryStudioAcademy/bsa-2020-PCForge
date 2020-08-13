import _ from 'lodash';
import { IFilter } from './base.filter';

export const mergeFilters = <F extends IFilter>(filter1: F, filter2: F): F => {
  return _.merge(filter1, filter2);
};

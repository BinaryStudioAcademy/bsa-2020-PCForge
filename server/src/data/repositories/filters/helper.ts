import merge from 'lodash/merge';
import { IFilter } from './base.filter';

export const mergeFilters = <F extends IFilter>(filter1: F, filter2: F): F => {
  return merge(filter1, filter2);
};

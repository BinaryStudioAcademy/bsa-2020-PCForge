import { MATCHER_GET_DATA, IMatcherGetData } from './actionTypes';
import { GameMatcherFilter } from './interfaces';

export const getMatcherData = (payload: GameMatcherFilter): IMatcherGetData => ({
  type: MATCHER_GET_DATA,
  payload,
});
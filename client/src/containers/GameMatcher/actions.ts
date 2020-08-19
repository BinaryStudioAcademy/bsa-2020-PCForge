import { SET_ALERT_MESSAGE, MATCHER_GET_DATA, ISetMessage, IMatcherGetData } from './actionTypes';
import { AlertType } from 'components/BasicComponents/Alert';
import { GameMatcherFilter } from './interfaces';

export const getMatcherData = (payload: GameMatcherFilter): IMatcherGetData => ({
  type: MATCHER_GET_DATA,
  payload,
});

export const setAlertValue = (payload: { message: string; type: AlertType }): ISetMessage => ({
  type: SET_ALERT_MESSAGE,
  payload,
});

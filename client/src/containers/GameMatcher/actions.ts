import {
  SET_ALERT_MESSAGE,
  MATCHER_GET_DATA,
  ISetMessage,
  IMatcherGetData,
  MATCHER_GET_SETUPS,
  IMatcherGetSetupData,
  MATCHER_GET_MORE_SETUPS,
  IMatcherGetMoreSetups,
} from './actionTypes';
import { AlertType } from 'components/BasicComponents/Alert';
import { GameMatcherFilter, GameMatcherSetupFilter } from './interfaces';

export const getMatcherData = (payload: GameMatcherFilter): IMatcherGetData => ({
  type: MATCHER_GET_DATA,
  payload,
});

export const getSetupsData = ({ title, authorId }: { title: string; authorId: string }): IMatcherGetSetupData => ({
  type: MATCHER_GET_SETUPS,
  payload: {
    title,
    authorId,
  },
});

export const getMoreSetups = ({
  title,
  from,
  authorId,
}: {
  title: string;
  from: number;
  authorId: string;
}): IMatcherGetMoreSetups => ({
  type: MATCHER_GET_MORE_SETUPS,
  payload: {
    title,
    authorId,
    from,
  },
});

export const setAlertValue = (payload: { message: string; type: AlertType }): ISetMessage => ({
  type: SET_ALERT_MESSAGE,
  payload,
});

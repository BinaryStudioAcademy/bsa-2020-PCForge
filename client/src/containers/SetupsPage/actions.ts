import { IFetchSetupsRequest, IFetchSetupsSuccess, SetupsActionsTypes, IFetchSetupsFailure } from './actionTypes';
import { Setup } from 'common/models/setup';

export const fetchSetups = (): IFetchSetupsRequest => ({
  type: SetupsActionsTypes.FETCH_SETUPS_REQUEST,
});

export const setSetups = (setups: Setup[]): IFetchSetupsSuccess => ({
  type: SetupsActionsTypes.FETCH_SETUPS_SUCCESS,
  payload: {
    setups,
  },
});

export const setError = (error: string): IFetchSetupsFailure => ({
  type: SetupsActionsTypes.FETCH_SETUPS_FAILURE,
  payload: {
    error,
  },
});

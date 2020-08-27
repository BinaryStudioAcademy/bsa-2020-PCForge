import {
  IFetchSetupsRequest,
  IFetchSetupsSuccess,
  SetupsActionsTypes,
  IFetchSetupsFailure,
  IFetchTopSetupsRequest,
  IFetchTopSetupsSuccess,
  IFetchTopSetupsFailure,
} from './actionTypes';
import { PCSetup } from 'common/models/setup';

export const fetchSetups = (): IFetchSetupsRequest => ({
  type: SetupsActionsTypes.FETCH_SETUPS_REQUEST,
});

export const fetchTopSetups = (): IFetchTopSetupsRequest => ({
  type: SetupsActionsTypes.FETCH_TOP_SETUPS_REQUEST,
});

export const setSetups = (setups: PCSetup[]): IFetchSetupsSuccess => ({
  type: SetupsActionsTypes.FETCH_SETUPS_SUCCESS,
  payload: {
    setups,
  },
});

export const setTopsSetups = (setups: PCSetup[]): IFetchTopSetupsSuccess => ({
  type: SetupsActionsTypes.FETCH_TOP_SETUPS_SUCCESS,
  payload: {
    setups,
  },
});

export const setError = (error: string): IFetchSetupsFailure | IFetchTopSetupsFailure => ({
  type: SetupsActionsTypes.FETCH_SETUPS_FAILURE,
  payload: {
    error,
  },
});

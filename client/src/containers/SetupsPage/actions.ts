import {
  IFetchSetupsRequest,
  IFetchSetupsSuccess,
  SetupsActionsTypes,
  IFetchSetupsFailure,
  IFetchTopSetupsRequest,
  IFetchTopSetupsSuccess,
  IFetchTopSetupsFailure,
  IChangeSortingTypes,
  IShowSpinner,
} from './actionTypes';
import { PCSetup } from 'common/models/setup';
import { ISetupFilter } from 'api/services/setupsService';

export const fetchSetups = (payload: ISetupFilter = {}): IFetchSetupsRequest => ({
  type: SetupsActionsTypes.FETCH_SETUPS_REQUEST,
  payload,
});

export const fetchTopSetups = (): IFetchTopSetupsRequest => ({
  type: SetupsActionsTypes.FETCH_TOP_SETUPS_REQUEST,
});

export const setSetups = (setups: PCSetup[], setupsCount: number): IFetchSetupsSuccess => ({
  type: SetupsActionsTypes.FETCH_SETUPS_SUCCESS,
  payload: {
    setups,
    setupsCount,
  },
});

export const setTopsSetups = (setups: PCSetup[]): IFetchTopSetupsSuccess => ({
  type: SetupsActionsTypes.FETCH_TOP_SETUPS_SUCCESS,
  payload: {
    setups,
  },
});

export const changeSortType = (sort: string): IChangeSortingTypes => ({
  type: SetupsActionsTypes.CHANGE_SORTING_TYPE,
  payload: {
    sort,
  },
});

export const setError = (error: string): IFetchSetupsFailure | IFetchTopSetupsFailure => ({
  type: SetupsActionsTypes.FETCH_SETUPS_FAILURE,
  payload: {
    error,
  },
});

export const showSpinner = (showSpinner: boolean): IShowSpinner => ({
  type: SetupsActionsTypes.SHOW_SPINNER,
  payload: {
    showSpinner,
  },
});

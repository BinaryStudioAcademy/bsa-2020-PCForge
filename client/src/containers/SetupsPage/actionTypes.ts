import { PCSetup } from 'common/models/setup';
import { ISetupFilter } from 'api/services/setupsService';

export enum SetupsActionsTypes {
  FETCH_SETUPS_REQUEST = 'Setups/FETCH_SETUPS_REQUEST',
  FETCH_SETUPS_SUCCESS = 'Setups/FETCH_SETUPS_SUCCESS',
  FETCH_SETUPS_FAILURE = 'Setups/FETCH_SETUPS_FAILURE',

  FETCH_TOP_SETUPS_REQUEST = 'Setups/FETCH_TOP_SETUPS_REQUEST',
  FETCH_TOP_SETUPS_SUCCESS = 'Setups/FETCH_TOP_SETUPS_SUCCESS',
  FETCH_TOP_SETUPS_FAILURE = 'Setups/FETCH_TOP_SETUPS_FAILURE',

  CHANGE_SORTING_TYPE = 'Setups/CHANGE_SORTING_TYPE',
  SHOW_SPINNER = 'Setups/SHOW_SPINNER',
}

export interface IFetchSetupsRequest {
  type: SetupsActionsTypes.FETCH_SETUPS_REQUEST;
  payload: ISetupFilter;
}

export interface IFetchSetupsSuccess {
  type: SetupsActionsTypes.FETCH_SETUPS_SUCCESS;
  payload: {
    setups: Array<PCSetup>;
    setupsCount: number;
  };
}

export interface IFetchSetupsFailure {
  type: SetupsActionsTypes.FETCH_SETUPS_FAILURE;
  payload: {
    error: string;
  };
}

export interface IFetchTopSetupsRequest {
  type: SetupsActionsTypes.FETCH_TOP_SETUPS_REQUEST;
}

export interface IFetchTopSetupsSuccess {
  type: SetupsActionsTypes.FETCH_TOP_SETUPS_SUCCESS;
  payload: {
    setups: Array<PCSetup>;
  };
}

export interface IFetchTopSetupsFailure {
  type: SetupsActionsTypes.FETCH_TOP_SETUPS_FAILURE;
  payload: {
    error: string;
  };
}

export interface IChangeSortingTypes {
  type: SetupsActionsTypes.CHANGE_SORTING_TYPE;
  payload: {
    sort: string;
  };
}

export interface IShowSpinner {
  type: SetupsActionsTypes.SHOW_SPINNER;
  payload: {
    showSpinner: boolean;
  };
}

export type SetupsActions =
  | IFetchSetupsRequest
  | IFetchSetupsSuccess
  | IFetchSetupsFailure
  | IFetchTopSetupsRequest
  | IFetchTopSetupsSuccess
  | IChangeSortingTypes
  | IFetchTopSetupsFailure
  | IShowSpinner;

export interface SetupState {
  setups: PCSetup[];
  topSetups: PCSetup[];
  setupsCount: number;
  filter: { sort: string; viewCount: number };
  error: string;
  showSpinner: boolean;
}

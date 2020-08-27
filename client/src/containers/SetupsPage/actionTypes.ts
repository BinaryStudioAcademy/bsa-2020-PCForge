import { PCSetup } from 'common/models/setup';

export enum SetupsActionsTypes {
  FETCH_SETUPS_REQUEST = 'Setups/FETCH_SETUPS_REQUEST',
  FETCH_SETUPS_SUCCESS = 'Setups/FETCH_SETUPS_SUCCESS',
  FETCH_SETUPS_FAILURE = 'Setups/FETCH_SETUPS_FAILURE',

  FETCH_TOP_SETUPS_REQUEST = 'Setups/FETCH_TOP_SETUPS_REQUEST',
  FETCH_TOP_SETUPS_SUCCESS = 'Setups/FETCH_TOP_SETUPS_SUCCESS',
  FETCH_TOP_SETUPS_FAILURE = 'Setups/FETCH_TOP_SETUPS_FAILURE',
}

export interface IFetchSetupsRequest {
  type: SetupsActionsTypes.FETCH_SETUPS_REQUEST;
}

export interface IFetchSetupsSuccess {
  type: SetupsActionsTypes.FETCH_SETUPS_SUCCESS;
  payload: {
    setups: Array<PCSetup>;
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

export type SetupsActions =
  | IFetchSetupsRequest
  | IFetchSetupsSuccess
  | IFetchSetupsFailure
  | IFetchTopSetupsRequest
  | IFetchTopSetupsSuccess
  | IFetchTopSetupsFailure;

export interface SetupState {
  setups: PCSetup[];
  topSetups: PCSetup[];
  error: string;
}

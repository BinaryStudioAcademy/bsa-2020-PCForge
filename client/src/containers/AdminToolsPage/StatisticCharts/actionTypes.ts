import { TypeUserStatistic, TypeHarwareStatistic } from 'common/models/typeStatistic';

export enum StatisticRequestActionTypes {
  GET_USERS_ACTION = 'GET_USERS_ACTION',
  GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
  GET_HARDWARE_ACTION = 'GET_HARDWARE_ACTION',
  GET_HARDWARE_SUCCESS = 'GET_HARDWARE_SUCCESS',
  GET_REQUEST_ERROR = 'GET_REQUEST_ERROR',
}

export interface IUsersRequestAction {
  type: StatisticRequestActionTypes.GET_USERS_ACTION;
}

export interface IHardwareRequestAction {
  type: StatisticRequestActionTypes.GET_HARDWARE_ACTION;
}

export interface IUsersRequestSuccess {
  type: StatisticRequestActionTypes.GET_USERS_SUCCESS;
  payload: {
    userStatisticList: TypeUserStatistic[];
  };
}

export interface IHardwareRequestSuccess {
  type: StatisticRequestActionTypes.GET_HARDWARE_SUCCESS;
  payload: {
    hardwareStatisticList: TypeHarwareStatistic[];
  };
}

export interface IStatisticError {
  type: StatisticRequestActionTypes.GET_REQUEST_ERROR;
  payload: {
    error: string;
  };
}

export interface StatisticState {
  error: string;
  userStatisticList: TypeUserStatistic[];
  hardwareStatisticList: TypeHarwareStatistic[];
}

export type StatisticRequestActions =
  | IUsersRequestAction
  | IHardwareRequestAction
  | IUsersRequestSuccess
  | IHardwareRequestSuccess
  | IStatisticError;

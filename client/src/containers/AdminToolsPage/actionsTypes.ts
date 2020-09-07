import { TypeUsersRequests } from 'common/models/typeUsersRequests';
import { IUserRequestFilter } from 'api/services/addUserRequestService';

export enum UsersRequestActionTypes {
  GET_USERS_REQUESTS = 'GET_USER_REQUESTS',
  GET_USERS_REQUESTS_SUCCESS = 'GET_USER_REQUESTS_SUCCESS',
  APPROVE_USER_REQUEST = 'APPROVE_USER_REQUEST',
  DELETE_USER_ADDED_REQUESTS = 'DELETE_USER_ADDED_REQUESTS',
  LOADING_USER_REQUESTS = 'LOADING_USER_REQUESTS',
  LOADING_TOTALS = 'LOADING_TOTALS',
  GET_TOTAL_COUNTS = 'GET_TOTAL_COUNTS',
  GET_TOTAL_COUNTS_SUCCESS = 'GET_TOTAL_COUNTS_SUCCESS',
  CLEAR_ADMINPAGE_STATE_VALUES_ACTION = 'CLEAR_ADMINPAGE_STATE_VALUES_ACTION',
  CLEAR_ADMINPAGE_STATE_VALUES_SUCCESS = 'CLEAR_ADMINPAGE_STATE_VALUES_SUCCESS',
}

export interface IUsersRequestAction {
  type: UsersRequestActionTypes.GET_USERS_REQUESTS;
  payload: {
    filter: IUserRequestFilter[];
  };
}

export interface ITotalCountsAction {
  type: UsersRequestActionTypes.GET_TOTAL_COUNTS;
}
export interface ITotalCountsActionSuccess {
  type: UsersRequestActionTypes.GET_TOTAL_COUNTS_SUCCESS;
  payload: {
    countUsers: number;
    countSetups: number;
    countHardWares: number;
    countGames: number;
  };
}

export interface IUsersRequestDeleteAction {
  type: UsersRequestActionTypes.DELETE_USER_ADDED_REQUESTS;
  payload: {
    id: number;
  };
}

export interface IUsersRequestActionSuccess {
  type: UsersRequestActionTypes.GET_USERS_REQUESTS_SUCCESS;
  payload: {
    userRequests: TypeUsersRequests[];
    countGamesRequests: number;
    countHardwaresRequests: number;
  };
}

export interface IUsersRequestActionLoading {
  type: UsersRequestActionTypes.LOADING_USER_REQUESTS;
  payload: {
    dataUserRequestsIsLoaded: boolean;
  };
}

export interface ITotalsActionLoading {
  type: UsersRequestActionTypes.LOADING_TOTALS;
  payload: {
    dataTotalsIsLoaded: boolean;
  };
}

export interface UsersRequestState {
  userRequests: TypeUsersRequests[];
  dataUserRequestsIsLoaded: boolean;
  dataTotalsIsLoaded: boolean;
  countGamesRequests: number;
  countHardwaresRequests: number;
  countUsers: number;
  countSetups: number;
  countHardWares: number;
  countGames: number;
}

export type UsersRequestActions =
  | IUsersRequestActionSuccess
  | IUsersRequestAction
  | IUsersRequestDeleteAction
  | IUsersRequestActionLoading
  | ITotalsActionLoading
  | ITotalCountsActionSuccess
  | ITotalCountsAction;

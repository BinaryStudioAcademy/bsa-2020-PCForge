import { TypeUsersRequests } from 'common/models/typeUsersRequests';
import { IUserRequestFilter } from 'api/services/addUserRequestService';

export enum UsersRequestActionTypes {
  GET_USERS_REQUESTS = 'GET_USER_REQUESTS',
  GET_USERS_REQUESTS_SUCCESS = 'GET_USER_REQUESTS_SUCCESS',
  GET_USERS_REQUESTS_ERROR = 'GET_USER_REQUESTS_ERROR',
  APPROVE_USER_REQUEST = 'APPROVE_USER_REQUEST',
  DELETE_USER_REQUESTS = 'DELETE_USER_REQUESTS',
  LOADING_USER_REQUESTS = 'LOADING_USER_REQUESTS',
}

export interface IUsersRequestAction {
  type: UsersRequestActionTypes.GET_USERS_REQUESTS;
  payload: {
    filter: IUserRequestFilter;
  };
}

export interface IUsersRequestDeleteAction {
  type: UsersRequestActionTypes.DELETE_USER_REQUESTS;
  payload: {
    id: number;
  };
}

export interface IUsersRequestActionSuccess {
  type: UsersRequestActionTypes.GET_USERS_REQUESTS_SUCCESS;
  payload: {
    userRequests: TypeUsersRequests[];
  };
}

export interface IUsersRequestActionError {
  type: UsersRequestActionTypes.GET_USERS_REQUESTS_ERROR;
  payload: {
    error: string;
  };
}

export interface UsersRequestState {
  userRequests: TypeUsersRequests[];
  error: string;
}

export type UsersRequestActions =
  | IUsersRequestActionSuccess
  | IUsersRequestActionError
  | IUsersRequestAction
  | IUsersRequestDeleteAction;

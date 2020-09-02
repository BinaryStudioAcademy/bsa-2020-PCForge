import { IUserRequestFilter } from 'api/services/addUserRequestService';
import { TypeUsersRequests, TypeUsersRequestsCreationAttributes } from 'common/models/typeUsersRequests';

export enum AddRequestActionTypes {
  GET_USERS_REQUESTS = 'GET_USER_REQUESTS',
  GET_USERS_REQUESTS_SUCCESS = 'GET_USER_REQUESTS_SUCCESS',
  GET_USERS_REQUESTS_ERROR = 'GET_USER_REQUESTS_ERROR',
  LOADING_USER_REQUESTS = 'LOADING_USER_REQUESTS',
  POST_USER_REQUEST_ACTION = 'POST_USER_REQUEST_ACTION',
  POST_USER_REQUEST_SUCCESS = 'POST_USER_REQUEST_SUCCESS',
}

export interface IGetActualUsersRequestAction {
  type: AddRequestActionTypes.GET_USERS_REQUESTS;
  payload: {
    filter: IUserRequestFilter;
  };
}

export interface IGetRequestActionSuccess {
  type: AddRequestActionTypes.GET_USERS_REQUESTS_SUCCESS;
  payload: {
    userRequests: TypeUsersRequests[];
  };
}

export interface IUsersRequestActionError {
  type: AddRequestActionTypes.GET_USERS_REQUESTS_ERROR;
  payload: {
    errorMessage: string;
  };
}

export interface IUsersRequestActionLoading {
  type: AddRequestActionTypes.LOADING_USER_REQUESTS;
  payload: {
    loadingStatus: boolean;
  };
}

export interface IUserSendRequestActiont {
  type: AddRequestActionTypes.POST_USER_REQUEST_ACTION;
  payload: {
    userRequest: TypeUsersRequestsCreationAttributes;
  };
}
export interface IUserSendRequestSuccess {
  type: AddRequestActionTypes.POST_USER_REQUEST_SUCCESS;
  payload: {
    sendingStatus: boolean;
  };
}

export interface AddRequestState {
  userRequests: TypeUsersRequests[];
  errorMessage: string;
  loadingStatus: boolean;
  sendingStatus: boolean;
}

export type AddRequestActions =
  | IUserSendRequestActiont
  | IUserSendRequestActiont
  | IUsersRequestActionLoading
  | IUsersRequestActionError
  | IGetRequestActionSuccess
  | IGetActualUsersRequestAction
  | IUserSendRequestSuccess;

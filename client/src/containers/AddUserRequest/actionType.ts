import { IUserRequestFilter } from 'api/services/addUserRequestService';
import { TypeUsersRequestsCreationAttributes } from 'common/models/typeUsersRequests';

export enum AddRequestActionTypes {
  GET_COUNT_USERS_REQUESTS = 'GET_COUNT_USERS_REQUESTS',
  GET_COUNT_USERS_REQUESTS_SUCCESS = 'GET_COUNT_USER_REQUESTS_SUCCESS',
  GET_COUNT_USERS_REQUESTS_ERROR = 'GET_COUNT_USER_REQUESTS_ERROR',
  LOADING_COUNT_USER_REQUESTS = 'LOADING_COUNT_USER_REQUESTS',
  POST_USER_REQUEST_ACTION = 'POST_USER_REQUEST_ACTION',
  POST_USER_REQUEST_SUCCESS = 'POST_USER_REQUEST_SUCCESS',
  CLEAR_STATE_VALUES_ACTION = 'CLEAR_STATE_VALUES_ACTION',
  CLEAR_STATE_VALUES_SUCCESS = 'CLEAR_STATE_VALUES_SUCCESS',
}

export interface IGetActualUsersRequestAction {
  type: AddRequestActionTypes.GET_COUNT_USERS_REQUESTS;
  payload: {
    filter: IUserRequestFilter;
  };
}

export interface IGetRequestActionSuccess {
  type: AddRequestActionTypes.GET_COUNT_USERS_REQUESTS_SUCCESS;
  payload: {
    countAlreadySentRequests: number;
  };
}

export interface IUsersRequestActionError {
  type: AddRequestActionTypes.GET_COUNT_USERS_REQUESTS_ERROR;
  payload: {
    errorMessage: string | null;
  };
}

export interface IUsersRequestActionLoading {
  type: AddRequestActionTypes.LOADING_COUNT_USER_REQUESTS;
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

export interface IClearStateValuesAction {
  type: AddRequestActionTypes.CLEAR_STATE_VALUES_ACTION;
}
export interface IClearStateValuesSuccess {
  type: AddRequestActionTypes.CLEAR_STATE_VALUES_SUCCESS;
}

export interface AddRequestState {
  countAlreadySentRequests: number;
  errorMessage: string | null;
  loadingStatus: boolean;
  sendingStatus: boolean;
}

export type AddRequestActions =
  | IUserSendRequestActiont
  | IUsersRequestActionLoading
  | IUsersRequestActionError
  | IGetRequestActionSuccess
  | IGetActualUsersRequestAction
  | IUserSendRequestSuccess
  | IClearStateValuesAction
  | IClearStateValuesSuccess;

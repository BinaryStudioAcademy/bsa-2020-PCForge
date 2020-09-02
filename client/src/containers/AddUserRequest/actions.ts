import { AddRequestActions, AddRequestActionTypes } from './actionType';
import { IUserRequestFilter } from 'api/services/addUserRequestService';
import { TypeUsersRequests, TypeUsersRequestsCreationAttributes } from 'common/models/typeUsersRequests';

export const getUsersRequests = (filter: IUserRequestFilter): AddRequestActions => ({
  type: AddRequestActionTypes.GET_USERS_REQUESTS,
  payload: {
    filter,
  },
});

export const loadAllUsersRequests = (userRequests: TypeUsersRequests[]): AddRequestActions => ({
  type: AddRequestActionTypes.GET_USERS_REQUESTS_SUCCESS,
  payload: {
    userRequests,
  },
});

export const loadError = (errorMessage: string): AddRequestActions => ({
  type: AddRequestActionTypes.GET_USERS_REQUESTS_ERROR,
  payload: {
    errorMessage,
  },
});

export const sendDataToAdmin = (userRequest: TypeUsersRequestsCreationAttributes) => ({
  type: AddRequestActionTypes.POST_USER_REQUEST_ACTION,
  payload: {
    userRequest,
  },
});

export const updateLoadingStatus = (loadingStatus: boolean) => ({
  type: AddRequestActionTypes.LOADING_USER_REQUESTS,
  payload: {
    loadingStatus,
  },
});

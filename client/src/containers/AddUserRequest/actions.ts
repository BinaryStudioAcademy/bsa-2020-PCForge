import { AddRequestActions, AddRequestActionTypes } from './actionType';
import { IUserRequestFilter } from 'api/services/addUserRequestService';
import { TypeUsersRequests, TypeUsersRequestsCreationAttributes } from 'common/models/typeUsersRequests';

export const getCountUsersRequests = (filter: IUserRequestFilter): AddRequestActions => ({
  type: AddRequestActionTypes.GET_COUNT_USERS_REQUESTS,
  payload: {
    filter,
  },
});

export const loadAllUsersRequests = (countAlreadySentRequests: number): AddRequestActions => ({
  type: AddRequestActionTypes.GET_COUNT_USERS_REQUESTS_SUCCESS,
  payload: {
    countAlreadySentRequests,
  },
});

export const loadError = (errorMessage: string): AddRequestActions => ({
  type: AddRequestActionTypes.GET_COUNT_USERS_REQUESTS_ERROR,
  payload: {
    errorMessage,
  },
});

export const sendDataToAdmin = (userRequest: TypeUsersRequestsCreationAttributes): AddRequestActions => ({
  type: AddRequestActionTypes.POST_USER_REQUEST_ACTION,
  payload: {
    userRequest,
  },
});

export const updateSendingStatus = (sendingStatus: boolean): AddRequestActions => ({
  type: AddRequestActionTypes.POST_USER_REQUEST_SUCCESS,
  payload: {
    sendingStatus,
  },
});

export const updateLoadingStatus = (loadingStatus: boolean): AddRequestActions => ({
  type: AddRequestActionTypes.LOADING_COUNT_USER_REQUESTS,
  payload: {
    loadingStatus,
  },
});

export const clearStateValues = (): AddRequestActions => ({
  type: AddRequestActionTypes.CLEAR_STATE_VALUES_ACTION,
});

export const clearingStateValues = (): AddRequestActions => ({
  type: AddRequestActionTypes.CLEAR_STATE_VALUES_SUCCESS,
});

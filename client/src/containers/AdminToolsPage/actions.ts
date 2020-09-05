import { UsersRequestActions, UsersRequestActionTypes } from './actionsTypes';
import { TypeUsersRequests } from 'common/models/typeUsersRequests';
import { IUserRequestFilter } from 'api/services/addUserRequestService';

export const getUsersRequests = (filter: IUserRequestFilter[]): UsersRequestActions => ({
  type: UsersRequestActionTypes.GET_USERS_REQUESTS,
  payload: {
    filter,
  },
});

export const loadAllUsersRequests = (
  userRequests: TypeUsersRequests[],
  countGamesRequests: number,
  countHardwaresRequests: number
): UsersRequestActions => ({
  type: UsersRequestActionTypes.GET_USERS_REQUESTS_SUCCESS,
  payload: {
    userRequests,
    countGamesRequests,
    countHardwaresRequests,
  },
});

export const getTotalCounts = (): UsersRequestActions => ({
  type: UsersRequestActionTypes.GET_TOTAL_COUNTS,
});

export const loadAllTotalCounts = (
  countUsers: number,
  countSetups: number,
  countHardWares: number,
  countGames: number
): UsersRequestActions => ({
  type: UsersRequestActionTypes.GET_TOTAL_COUNTS_SUCCESS,
  payload: {
    countUsers,
    countSetups,
    countHardWares,
    countGames,
  },
});

export const updateUserRequestsLoadingComponentStatus = (dataUserRequestsIsLoaded: boolean): UsersRequestActions => ({
  type: UsersRequestActionTypes.LOADING_USER_REQUESTS,
  payload: {
    dataUserRequestsIsLoaded,
  },
});

export const updateTotalsLoadingComponentStatus = (dataTotalsIsLoaded: boolean): UsersRequestActions => ({
  type: UsersRequestActionTypes.LOADING_TOTALS,
  payload: {
    dataTotalsIsLoaded,
  },
});

export const loadTotalInfoError = (errorTotalInfo: string): UsersRequestActions => ({
  type: UsersRequestActionTypes.GET_TOTAL_INFO_ERROR,
  payload: {
    errorTotalInfo,
  },
});
export const loadUserRequestError = (errorUserRequest: string): UsersRequestActions => ({
  type: UsersRequestActionTypes.GET_USERS_REQUESTS_ERROR,
  payload: {
    errorUserRequest,
  },
});
export const deleteUserRequest = (id: number): UsersRequestActions => ({
  type: UsersRequestActionTypes.DELETE_USER_ADDED_REQUESTS,
  payload: {
    id,
  },
});

export const clearStateValues = (): UsersRequestActions => ({
  type: UsersRequestActionTypes.CLEAR_ADMINPAGE_STATE_VALUES_ACTION,
});
export const clearingStateValues = (): UsersRequestActions => ({
  type: UsersRequestActionTypes.CLEAR_ADMINPAGE_STATE_VALUES_SUCCESS,
});

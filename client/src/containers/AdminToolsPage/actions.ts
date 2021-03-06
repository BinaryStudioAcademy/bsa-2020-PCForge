import { UsersRequestActions, UsersRequestActionTypes, UserRequestDeleteType } from './actionsTypes';
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
  countGames: number,
  countNews: number
): UsersRequestActions => ({
  type: UsersRequestActionTypes.GET_TOTAL_COUNTS_SUCCESS,
  payload: {
    countUsers,
    countSetups,
    countHardWares,
    countGames,
    countNews,
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

export const deleteUserRequest = (id: number, type: UserRequestDeleteType): UsersRequestActions => ({
  type: UsersRequestActionTypes.DELETE_USER_ADDED_REQUESTS,
  payload: {
    id,
    type,
  },
});

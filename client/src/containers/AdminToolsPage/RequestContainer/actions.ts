import {
  UsersRequestActions,
  UsersRequestActionTypes,
  IUsersRequestActionSuccess,
} from './actionsTypes';
import { TypeUsersRequests } from 'common/models/typeUsersRequests';
import { UserRequestedType } from 'common/enums/UserRequestedType';
import { IUserRequestFilter } from 'api/services/addUserRequestService';

export const getUsersRequests = (filter: IUserRequestFilter): UsersRequestActions => ({
  type: UsersRequestActionTypes.GET_USERS_REQUESTS,
  payload: {
    filter,
  },
});

export const loadUsersRequests = (userRequests: TypeUsersRequests[]): UsersRequestActions => ({
  type: UsersRequestActionTypes.GET_USERS_REQUESTS_SUCCESS,
  payload: {
    userRequests,
  },
});

export const updateLoadingComponentStatus = (dataIsLoaded: boolean): UsersRequestActions => ({
  type: UsersRequestActionTypes.LOADING_USER_REQUESTS,
  payload: {
    dataIsLoaded,
  },
});

export const loadError = (error: string): UsersRequestActions => ({
  type: UsersRequestActionTypes.GET_USERS_REQUESTS_ERROR,
  payload: {
    error,
  },
});
export const deleteUserRequest = (id: number): UsersRequestActions => ({
  type: UsersRequestActionTypes.DELETE_USER_REQUESTS,
  payload: {
    id,
  },
});

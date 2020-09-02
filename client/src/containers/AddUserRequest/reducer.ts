import { AddRequestActions, AddRequestActionTypes, AddRequestState } from './actionType';
import { IUserRequestFilter } from 'api/services/addUserRequestService';
import { TypeUsersRequests, TypeUsersRequestsCreationAttributes } from 'common/models/typeUsersRequests';

const initialState: AddRequestState = {
  userRequests: [],
  errorMessage: '',
  loadingStatus: true,
  sendingStatus: false,
};

export default function AddRequestReducer(state = initialState, action: AddRequestActions): AddRequestState {
  switch (action.type) {
    case AddRequestActionTypes.GET_USERS_REQUESTS_SUCCESS: {
      return {
        ...state,
        userRequests: action.payload.userRequests,
      };
    }
    case AddRequestActionTypes.LOADING_USER_REQUESTS: {
      return {
        ...state,
        loadingStatus: action.payload.loadingStatus,
      };
    }
    case AddRequestActionTypes.GET_USERS_REQUESTS_ERROR: {
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      };
    }
    case AddRequestActionTypes.POST_USER_REQUEST_SUCCESS: {
      return {
        ...state,
        sendingStatus: action.payload.sendingStatus,
      };
    }
    default:
      return state;
  }
}

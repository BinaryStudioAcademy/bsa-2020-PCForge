import { UsersRequestActions, UsersRequestState, UsersRequestActionTypes } from './actionsTypes';
import { UserRequestedType } from 'common/enums/UserRequestedType';

const initialState: UsersRequestState = {
  userRequests: [],
  error: '',
  dataIsLoaded: true,
};

export default function UserRequestsReducer(state = initialState, action: UsersRequestActions): UsersRequestState {
  switch (action.type) {
    case UsersRequestActionTypes.GET_USERS_REQUESTS_SUCCESS: {
      return {
        ...state,
        userRequests: action.payload.userRequests,
      };
    }
    case UsersRequestActionTypes.GET_USERS_REQUESTS_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case UsersRequestActionTypes.LOADING_USER_REQUESTS: {
      return {
        ...state,
        dataIsLoaded: action.payload.dataIsLoaded,
      };
    }
    default:
      return state;
  }
}

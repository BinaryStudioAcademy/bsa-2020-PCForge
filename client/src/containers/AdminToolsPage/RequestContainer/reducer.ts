import { UsersRequestActions, UsersRequestState, UsersRequestActionTypes } from './actionsTypes';
import { UserRequestedType } from 'common/enums/UserRequestedType';

const initialState: UsersRequestState = {
  userRequests: [],
  error: '',
};

export default function UserRequestsReducer(state = initialState, action: UsersRequestActions): UsersRequestState {
  switch (action.type) {
    case UsersRequestActionTypes.GET_USERS_REQUESTS_SUCCESS: {
      return {
        ...state,
        userRequests: action.payload.userRequests,
      };
    }
    default:
      return state;
  }
}

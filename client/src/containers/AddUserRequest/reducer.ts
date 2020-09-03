import { AddRequestActions, AddRequestActionTypes, AddRequestState } from './actionType';

const initialState: AddRequestState = {
  countAlreadySentRequests: 0,
  errorMessage: null,
  loadingStatus: true,
  sendingStatus: false,
};

export default function AddRequestReducer(state = initialState, action: AddRequestActions): AddRequestState {
  switch (action.type) {
    case AddRequestActionTypes.GET_COUNT_USERS_REQUESTS_SUCCESS: {
      return {
        ...state,
        countAlreadySentRequests: action.payload.countAlreadySentRequests,
      };
    }
    case AddRequestActionTypes.LOADING_COUNT_USER_REQUESTS: {
      return {
        ...state,
        loadingStatus: action.payload.loadingStatus,
      };
    }
    case AddRequestActionTypes.GET_COUNT_USERS_REQUESTS_ERROR: {
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
    case AddRequestActionTypes.CLEAR_STATE_VALUES_SUCCESS: {
      return {
        ...state,
        countAlreadySentRequests: 0,
        errorMessage: null,
        loadingStatus: true,
        sendingStatus: false,
      };
    }
    default:
      return state;
  }
}

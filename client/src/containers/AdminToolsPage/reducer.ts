import { UsersRequestActions, UsersRequestState, UsersRequestActionTypes } from './actionsTypes';

const initialState: UsersRequestState = {
  userRequests: [],
  dataTotalsIsLoaded: true,
  dataUserRequestsIsLoaded: true,
  countGamesRequests: 0,
  countHardwaresRequests: 0,
  countUsers: 0,
  countSetups: 0,
  countHardWares: 0,
  countGames: 0,
  countNews: 0,
};

export default function UserRequestsReducer(state = initialState, action: UsersRequestActions): UsersRequestState {
  switch (action.type) {
    case UsersRequestActionTypes.GET_USERS_REQUESTS_SUCCESS: {
      return {
        ...state,
        userRequests: action.payload.userRequests,
        countGamesRequests: action.payload.countGamesRequests,
        countHardwaresRequests: action.payload.countHardwaresRequests,
      };
    }

    case UsersRequestActionTypes.LOADING_USER_REQUESTS: {
      return {
        ...state,
        dataUserRequestsIsLoaded: action.payload.dataUserRequestsIsLoaded,
      };
    }
    case UsersRequestActionTypes.LOADING_TOTALS: {
      return {
        ...state,
        dataTotalsIsLoaded: action.payload.dataTotalsIsLoaded,
      };
    }
    case UsersRequestActionTypes.GET_TOTAL_COUNTS_SUCCESS: {
      return {
        ...state,
        countUsers: action.payload.countUsers,
        countSetups: action.payload.countSetups,
        countHardWares: action.payload.countHardWares,
        countGames: action.payload.countGames,
        countNews: action.payload.countNews,
      };
    }
    default:
      return state;
  }
}

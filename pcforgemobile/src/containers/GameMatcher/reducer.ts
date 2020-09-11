import { MatcherActions, MatcherState, MatcherActionTypes } from './actionTypes';

const initialState: MatcherState = {
  games: [],
  cpus: [],
  gpus: [],
  error: null,
};

export function MatcherReducer(state: MatcherState = initialState, action: MatcherActions): MatcherState {
  switch (action.type) {
    case MatcherActionTypes.FETCH_CPUS_SUCCESS: {
      return {
        ...state,
        cpus: action.payload.cpus,
      }
    }

    case MatcherActionTypes.FETCH_GPUS_SUCCESS: {
      return {
        ...state,
        gpus: action.payload.gpus,
      }
    }

    case MatcherActionTypes.FETCH_GAMES_SUCCESS: {
      return {
        ...state,
        games: action.payload.games,
      }
    }

    case MatcherActionTypes.SET_ERROR: {
      return {
        ...state,
        error: action.payload.message,
      }
    }

    default:
      return state;
  }
}

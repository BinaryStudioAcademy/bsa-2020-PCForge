import { defaultGame, defaultPerformance } from 'common/models/defaults';
import { QuickMatcherActions, QuickMatcherActionTypes, QuickMatcherState } from './actionTypes';

const initialState: QuickMatcherState = {
  games: [],
  selectedGame: defaultGame,
  error: '',
  performance: defaultPerformance,
};

export function QuickMatcherReducer(state = initialState, action: QuickMatcherActions): QuickMatcherState {
  switch (action.type) {
    case QuickMatcherActionTypes.FETCH_GAMES_SUCCESS: {
      return {
        ...state,
        games: action.payload.games,
      };
    }

    case QuickMatcherActionTypes.FETCH_PERFORMANCE_SUCCESS: {
      return {
        ...state,
        performance: action.payload.performance,
      };
    }

    case QuickMatcherActionTypes.SELECT_GAME: {
      return {
        ...state,
        selectedGame: action.payload.game,
      };
    }

    default:
      return state;
  }
}

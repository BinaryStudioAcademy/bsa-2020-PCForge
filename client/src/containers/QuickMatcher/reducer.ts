import { GameActions, GameActionTypes, GameState } from './actionTypes';

const initialState: GameState = {
  games: [],
  error: '',
};

export function QuickMatcherReducer(state = initialState, action: GameActions): GameState {
  switch (action.type) {
    case GameActionTypes.FETCH_GAMES_SUCCESS: {
      return {
        ...state,
        games: action.games,
      };
    }

    default:
      return state;
  }
}

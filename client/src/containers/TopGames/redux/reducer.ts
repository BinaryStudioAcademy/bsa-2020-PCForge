import { TopGamesActions, TopGamesState, TopGamesTypes } from './actionTypes';

const initialState: TopGamesState = {
  topGames: [],
};

export function TopGamesReducer(state = initialState, action: TopGamesActions): TopGamesState {
  switch (action.type) {
    case TopGamesTypes.FETCH_TOP_GAMES_SUCCESS: {
      return {
        ...state,
        topGames: action.payload.topGames,
      };
    }

    default:
      return state;
  }
}

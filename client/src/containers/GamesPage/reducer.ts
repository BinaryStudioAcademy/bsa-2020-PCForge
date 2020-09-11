import { GamesActions, GameState, GamesActionsTypes } from './actionTypes';

const initialState: GameState = {
  games: [],
  gamesCount: 0,
  topGames: [],
  filter: { sort: 'mostRated', viewCount: 12 },
  error: '',
  showSpinner: true,
};

export function GamesPageReducer(state = initialState, action: GamesActions): GameState {
  switch (action.type) {
    case GamesActionsTypes.FETCH_GAMES_SUCCESS: {
      return {
        ...state,
        games: action.payload.games,
        gamesCount: action.payload.gamesCount,
      };
    }
    case GamesActionsTypes.FETCH_TOP_GAMES_SUCCESS: {
      return {
        ...state,
        topGames: action.payload.games,
      };
    }
    case GamesActionsTypes.CHANGE_SORTING_TYPE: {
      const newFilter = { ...state.filter };
      console.log('functionGamesReducer -> newFilter', newFilter);
      return {
        ...state,
        filter: {
          ...newFilter,
          sort: action.payload.sort,
        },
      };
    }
    case GamesActionsTypes.SHOW_SPINNER: {
      return {
        ...state,
        showSpinner: action.payload.showSpinner,
      };
    }
    default:
      return state;
  }
}

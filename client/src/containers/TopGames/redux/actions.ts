import { TopGame } from 'common/models/topGame';
import { TopGamesActions, TopGamesTypes } from './actionTypes';

export const fetchTopGames = (): TopGamesActions => ({
  type: TopGamesTypes.FETCH_TOP_GAMES_REQUEST,
  payload: {
    from: 0,
    count: 5,
  },
});

export const setTopGames = (topGames: TopGame[]): TopGamesActions => ({
  type: TopGamesTypes.FETCH_TOP_GAMES_SUCCESS,
  payload: {
    topGames,
  },
});

export const setError = (error: string): TopGamesActions => ({
  type: TopGamesTypes.ERROR,
  payload: {
    error,
  },
});

import { Game } from 'common/models/game';
import { GameActionTypes, GameActions } from './actionTypes';

export const fetchGames = (name: string): GameActions => ({
  type: GameActionTypes.FETCH_GAMES_REQUEST,
  payload: {
    name,
  },
});

export const setGames = (games: Game[]): GameActions => ({
  type: GameActionTypes.FETCH_GAMES_SUCCESS,
  payload: {
    games,
  },
});

export const setError = (error: string): GameActions => ({
  type: GameActionTypes.ERROR,
  payload: {
    error,
  },
});

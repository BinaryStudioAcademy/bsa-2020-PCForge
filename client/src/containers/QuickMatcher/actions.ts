import { Game } from 'common/models/game';
import { GameActionTypes, GameActions } from './actionTypes';

export const fetchGames = (name: string): GameActions => ({
  type: GameActionTypes.FETCH_GAMES_REQUEST,
  name,
});

export const setGames = (games: Game[]): GameActions => ({
  type: GameActionTypes.FETCH_GAMES_SUCCESS,
  games,
});

export const setError = (error: string): GameActions => ({
  type: GameActionTypes.ERROR,
  error,
});

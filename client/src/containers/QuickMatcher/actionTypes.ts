import { Game } from 'common/models/game';

export enum GameActionTypes {
  ERROR = 'QuickMatcher/ERROR',
  FETCH_GAMES_REQUEST = 'QuickMatcher/FETCH_GAMES_REQUEST',
  FETCH_GAMES_SUCCESS = 'QuickMatcher/FETCH_GAMES_SUCCESS',
}

export interface IFetchGamesRequestAction {
  type: GameActionTypes.FETCH_GAMES_REQUEST;
  payload: {
    name: string;
  };
}

interface IFetchGamesAction {
  type: GameActionTypes.FETCH_GAMES_SUCCESS;
  payload: {
    games: Game[];
  };
}

interface IErrorAction {
  type: GameActionTypes.ERROR;
  payload: {
    error: string;
  };
}

type GameRequests = IFetchGamesRequestAction;

type GameSuccess = IFetchGamesAction;

export type GameErrors = IErrorAction;

export type GameActions = GameRequests | GameSuccess | GameErrors;

export interface GameState {
  games: Game[];
  error: string;
}

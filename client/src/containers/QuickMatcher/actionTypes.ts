import { Game } from 'common/models/game';

export enum GameActionTypes {
  ERROR = 'QuickMatcher/ERROR',
  FETCH_GAMES_REQUEST = 'QuickMatcher/FETCH_GAMES_REQUEST',
  FETCH_GAMES_SUCCESS = 'QuickMatcher/FETCH_GAMES_SUCCESS',
}

export interface IFetchGamesRequestAction {
  type: GameActionTypes.FETCH_GAMES_REQUEST;
  name: string;
}

interface IFetchGamesAction {
  type: GameActionTypes.FETCH_GAMES_SUCCESS;
  games: Game[];
}

interface IErrorAction {
  type: GameActionTypes.ERROR;
  error: string;
}

type GameRequests = IFetchGamesRequestAction;

type GameSuccess = IFetchGamesAction;

export type GameErrors = IErrorAction;

export type GameActions = GameRequests | GameSuccess | GameErrors;

export interface GameState {
  games: Game[];
  error: string;
}

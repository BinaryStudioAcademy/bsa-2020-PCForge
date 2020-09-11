import { Game } from 'common/models/game';
import { IGameFilter } from 'api/services/gameService';

export enum GamesActionsTypes {
  FETCH_GAMES_REQUEST = 'Games/FETCH_GAMES_REQUEST',
  FETCH_GAMES_SUCCESS = 'Games/FETCH_GAMES_SUCCESS',
  FETCH_GAMES_FAILURE = 'Games/FETCH_GAMES_FAILURE',

  FETCH_TOP_GAMES_REQUEST = 'Games/FETCH_TOP_GAMES_REQUEST',
  FETCH_TOP_GAMES_SUCCESS = 'Games/FETCH_TOP_GAMES_SUCCESS',
  FETCH_TOP_GAMES_FAILURE = 'Games/FETCH_TOP_GAMES_FAILURE',

  CHANGE_SORTING_TYPE = 'Games/CHANGE_SORTING_TYPE',
  SHOW_SPINNER = 'Games/SHOW_SPINNER',
}

export interface IFetchGamesRequest {
  type: GamesActionsTypes.FETCH_GAMES_REQUEST;
  payload: IGameFilter;
}

export interface IFetchGamesSuccess {
  type: GamesActionsTypes.FETCH_GAMES_SUCCESS;
  payload: {
    games: Array<Game>;
    gamesCount: number;
  };
}

export interface IFetchGamesFailure {
  type: GamesActionsTypes.FETCH_GAMES_FAILURE;
  payload: {
    error: string;
  };
}

export interface IFetchTopGamesRequest {
  type: GamesActionsTypes.FETCH_TOP_GAMES_REQUEST;
}

export interface IFetchTopGamesSuccess {
  type: GamesActionsTypes.FETCH_TOP_GAMES_SUCCESS;
  payload: {
    games: Array<Game>;
  };
}

export interface IFetchTopGamesFailure {
  type: GamesActionsTypes.FETCH_TOP_GAMES_FAILURE;
  payload: {
    error: string;
  };
}

export interface IChangeSortingTypes {
  type: GamesActionsTypes.CHANGE_SORTING_TYPE;
  payload: {
    sort: string;
  };
}

export interface IShowSpinner {
  type: GamesActionsTypes.SHOW_SPINNER;
  payload: {
    showSpinner: boolean;
  };
}

export type GamesActions =
  | IFetchGamesRequest
  | IFetchGamesSuccess
  | IFetchGamesFailure
  | IFetchTopGamesRequest
  | IFetchTopGamesSuccess
  | IChangeSortingTypes
  | IFetchTopGamesFailure
  | IShowSpinner;

export interface GameState {
  games: Game[];
  topGames: Game[];
  gamesCount: number;
  filter: { sort: string; viewCount: number };
  error: string;
  showSpinner: boolean;
}

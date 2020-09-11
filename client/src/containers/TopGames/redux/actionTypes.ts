import { TopGame } from 'common/models/topGame';

export enum TopGamesTypes {
  ERROR = 'TopGames/ERROR',
  FETCH_TOP_GAMES_REQUEST = 'TopGames/FETCH_TOP_GAMES_REQUEST',
  FETCH_TOP_GAMES_SUCCESS = 'TopGames/FETCH_TOP_GAMES_SUCCESS',
}

export interface IFetchTopGamesRequestAction {
  type: TopGamesTypes.FETCH_TOP_GAMES_REQUEST;
  payload: {
    from: number;
    count: number;
  };
}

interface IFetchTopGamesAction {
  type: TopGamesTypes.FETCH_TOP_GAMES_SUCCESS;
  payload: {
    topGames: TopGame[];
  };
}

interface IErrorAction {
  type: TopGamesTypes.ERROR;
  payload: {
    error: string;
  };
}

type TopGamesRequests = IFetchTopGamesRequestAction;

type TopGamesSuccess = IFetchTopGamesAction;

export type TopGamesErrors = IErrorAction;

export type TopGamesActions = TopGamesRequests | TopGamesSuccess | TopGamesErrors;

export interface TopGamesState {
  topGames: TopGame[];
}

import { Game } from 'common/models/game';
import { ISetupPerformance } from 'common/models/setupPerformance';

export enum QuickMatcherActionTypes {
  ERROR = 'QuickMatcher/ERROR',
  FETCH_GAMES_REQUEST = 'QuickMatcher/FETCH_GAMES_REQUEST',
  FETCH_GAMES_SUCCESS = 'QuickMatcher/FETCH_GAMES_SUCCESS',
  FETCH_PERFORMANCE_REQUEST = 'QuickMatcher/FETCH_PERFORMANCE_REQUEST',
  FETCH_PERFORMANCE_SUCCESS = 'QuickMatcher/FETCH_PERFORMANCE_SUCCESS',
  SELECT_GAME = 'QuickMatcher/SELECT_GAME',
}

export interface IFetchGamesRequestAction {
  type: QuickMatcherActionTypes.FETCH_GAMES_REQUEST;
  payload: {
    name: string;
  };
}

export interface IFetchPerformanceRequestAction {
  type: QuickMatcherActionTypes.FETCH_PERFORMANCE_REQUEST;
  payload: {
    cpuId: number;
    gpuId: number;
    ramSize: number;
    gameId: number;
  };
}

interface IFetchGamesAction {
  type: QuickMatcherActionTypes.FETCH_GAMES_SUCCESS;
  payload: {
    games: Game[];
  };
}

interface IFetchPerformanceAction {
  type: QuickMatcherActionTypes.FETCH_PERFORMANCE_SUCCESS;
  payload: {
    performance: ISetupPerformance;
  };
}

interface ISelectGameAction {
  type: QuickMatcherActionTypes.SELECT_GAME;
  payload: {
    game: Game;
  };
}

interface IErrorAction {
  type: QuickMatcherActionTypes.ERROR;
  payload: {
    error: string;
  };
}

type QuickMatcherRequests = IFetchGamesRequestAction | IFetchPerformanceRequestAction;

type QuickMatcherSuccess = IFetchGamesAction | IFetchPerformanceAction;

export type QuickMatcherErrors = IErrorAction;

export type QuickMatcherActions = QuickMatcherRequests | QuickMatcherSuccess | QuickMatcherErrors | ISelectGameAction;

export interface QuickMatcherState {
  games: Game[];
  selectedGame: Game;
  error: string;
  performance: ISetupPerformance;
}

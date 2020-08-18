import { Game } from 'common/models/game';
import { TopGame } from 'common/models/topGame';
import { ISetupPerformance } from './types';

export enum SetupChartTypes {
  ERROR = 'SetupChart/ERROR',
  FETCH_PERFORMANCE_REQUEST = 'SetupChart/FETCH_PERFORMANCE_REQUEST',
  FETCH_PERFORMANCE_SUCCESS = 'SetupChart/FETCH_PERFORMANCE_SUCCESS',
  FETCH_TOP_GAMES_REQUEST = 'SetupChart/FETCH_TOP_GAMES_REQUEST',
  FETCH_TOP_GAMES_SUCCESS = 'SetupChart/FETCH_TOP_GAMES_SUCCESS',
  FETCH_GAMES_REQUEST = 'SetupChart/FETCH_GAMES_REQUEST',
  FETCH_GAMES_SUCCESS = 'SetupChart/FETCH_GAMES_SUCCESS',
}

export interface IFetchPerformanceRequestAction {
  type: SetupChartTypes.FETCH_PERFORMANCE_REQUEST;
  payload: {
    setupId: string;
  };
}

export interface IFetchTopGamesRequestAction {
  type: SetupChartTypes.FETCH_TOP_GAMES_REQUEST;
  payload: {
    from: number;
    count: number;
  };
}

export interface IFetchGamesRequestAction {
  type: SetupChartTypes.FETCH_GAMES_REQUEST;
  payload: {
    name: string;
  };
}

interface IFetchPerformanceAction {
  type: SetupChartTypes.FETCH_PERFORMANCE_SUCCESS;
  payload: {
    performance: ISetupPerformance;
  };
}

interface IFetchTopGamesAction {
  type: SetupChartTypes.FETCH_TOP_GAMES_SUCCESS;
  payload: {
    topGames: TopGame[];
  };
}

interface IFetchGamesAction {
  type: SetupChartTypes.FETCH_GAMES_SUCCESS;
  payload: {
    games: Game[];
  };
}

interface IErrorAction {
  type: SetupChartTypes.ERROR;
  payload: {
    error: string;
  };
}

type SetupChartRequests = IFetchPerformanceRequestAction | IFetchTopGamesRequestAction | IFetchGamesRequestAction;

type SetupChartSuccess = IFetchPerformanceAction | IFetchTopGamesAction | IFetchGamesAction;

export type SetupChartErrors = IErrorAction;

export type SetupChartActions = SetupChartRequests | SetupChartSuccess | SetupChartErrors;

export interface SetupChartState {
  topGames: TopGame[];
  searchedGames: Game[];
  performance: ISetupPerformance;
  error: string;
}

import { Game } from 'common/models/game';
import { Setup } from 'common/models/setup';
import { SetupPerformance } from 'common/models/setupPerformance';
import { TopGame } from 'common/models/topGame';

export enum SetupChartTypes {
  ERROR = 'SetupChart/ERROR',
  FETCH_PERFORMANCE_REQUEST = 'SetupChart/FETCH_PERFORMANCE_REQUEST',
  FETCH_PERFORMANCE_SUCCESS = 'SetupChart/FETCH_PERFORMANCE_SUCCESS',
  FETCH_SETUP_REQUEST = 'SetupChart/FETCH_SETUP_REQUEST',
  FETCH_SETUP_SUCCESS = 'SetupChart/FETCH_SETUP_SUCCESS',
  FETCH_TOP_GAMES_REQUEST = 'SetupChart/FETCH_TOP_GAMES_REQUEST',
  FETCH_TOP_GAMES_SUCCESS = 'SetupChart/FETCH_TOP_GAMES_SUCCESS',
  FETCH_GAMES_REQUEST = 'SetupChart/FETCH_GAMES_REQUEST',
  FETCH_GAMES_SUCCESS = 'SetupChart/FETCH_GAMES_SUCCESS',
}

export interface IFetchPerformanceRequestAction {
  type: SetupChartTypes.FETCH_PERFORMANCE_REQUEST;
  payload: {
    setupId: number;
    gameId: number;
  };
}

export interface IFetchSetupRequestAction {
  type: SetupChartTypes.FETCH_SETUP_REQUEST;
  payload: {
    id: number;
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
    performance: SetupPerformance;
  };
}

interface IFetchSetupAction {
  type: SetupChartTypes.FETCH_SETUP_SUCCESS;
  payload: {
    setup: Setup;
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

type SetupChartRequests =
  | IFetchPerformanceRequestAction
  | IFetchTopGamesRequestAction
  | IFetchGamesRequestAction
  | IFetchSetupRequestAction;

type SetupChartSuccess = IFetchPerformanceAction | IFetchTopGamesAction | IFetchGamesAction | IFetchSetupAction;

export type SetupChartErrors = IErrorAction;

export type SetupChartActions = SetupChartRequests | SetupChartSuccess | SetupChartErrors;

export interface SetupChartState {
  topGames: TopGame[];
  searchedGames: Game[];
  performance: SetupPerformance;
  setup: Setup;
  error: string;
}

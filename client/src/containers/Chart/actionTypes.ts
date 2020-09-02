import { Cpu } from 'common/models/cpu';
import { Game } from 'common/models/game';
import { Gpu } from 'common/models/gpu';
import { ISetupPerformance } from 'common/models/setupPerformance';
import { TopGame } from 'common/models/topGame';

export enum SetupChartTypes {
  ERROR = 'SetupChart/ERROR',
  FETCH_PERFORMANCE_REQUEST = 'SetupChart/FETCH_PERFORMANCE_REQUEST',
  FETCH_PERFORMANCE_SUCCESS = 'SetupChart/FETCH_PERFORMANCE_SUCCESS',
  FETCH_TOP_GAMES_REQUEST = 'SetupChart/FETCH_TOP_GAMES_REQUEST',
  FETCH_TOP_GAMES_SUCCESS = 'SetupChart/FETCH_TOP_GAMES_SUCCESS',
  FETCH_GAMES_REQUEST = 'SetupChart/FETCH_GAMES_REQUEST',
  FETCH_GAMES_SUCCESS = 'SetupChart/FETCH_GAMES_SUCCESS',
  SET_CPU = 'SetupChart/SET_CPU',
  SET_GPU = 'SetupChart/SET_GPU',
  SET_RAM = 'SetupChart/SET_RAM',
  SET_GAME = 'SetupChart/SET_GAME',
}

export interface IFetchPerformanceRequestAction {
  type: SetupChartTypes.FETCH_PERFORMANCE_REQUEST;
  payload: {
    cpuId: number;
    gpuId: number;
    ramSize: number;
    gameId: number;
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

interface ISetCpuAction {
  type: SetupChartTypes.SET_CPU;
  payload: {
    cpu: Cpu;
  };
}

interface ISetGpuAction {
  type: SetupChartTypes.SET_GPU;
  payload: {
    gpu: Gpu;
  };
}

interface ISetRamAction {
  type: SetupChartTypes.SET_RAM;
  payload: {
    ramSize: number;
  };
}

interface ISetGameAction {
  type: SetupChartTypes.SET_GAME;
  payload: {
    game: Game;
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

export type SetupChartActions =
  | SetupChartRequests
  | SetupChartSuccess
  | SetupChartErrors
  | ISetCpuAction
  | ISetGpuAction
  | ISetRamAction
  | ISetGameAction;

export interface SetupChartState {
  topGames: TopGame[];
  searchedGames: Game[];
  performance: ISetupPerformance;
  game: Game;
  cpu: Cpu | null;
  gpu: Gpu | null;
  ramSize: number | null;
  error: string;
}

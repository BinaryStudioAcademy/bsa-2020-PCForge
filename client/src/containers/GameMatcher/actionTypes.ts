import { TypeFilter } from 'common/models/typeFilterBuilder';
import { TypeResponseAllCpus } from 'api/services/cpuService';
import { Cpu } from 'common/models/cpu';
import { Gpu } from 'common/models/gpu';
import { TypeResponseAllGpus } from 'api/services/gpuService';
import { Ram } from 'common/models/ram';
import { TypeResponseAllRams } from 'api/services/ramService';
import { TypeResponseAllGames } from 'api/services/gamesService';
import { Game } from 'common/models/game';

export const SET_GAMES = 'SET_GAMES';
export const GET_GAMES = 'GET_GAMES';
export const GET_GAMES_SUCCESS = 'GET_GAMES_SUCCESS';
export const GET_GAMES_FAILURE = 'GET_GAMES_FAILURE';
export const SET_CPUS = 'SET_CPUS';
export const GET_CPUS = 'GET_CPUS';
export const GET_CPUS_SUCCESS = 'GET_CPUS_SUCCESS';
export const GET_CPUS_FAILURE = 'GET_CPUS_FAILURE';
export const SET_GPUS = 'SET_GPUS';
export const GET_GPUS = 'GET_GPUS';
export const GET_GPUS_SUCCESS = 'GET_GPUS_SUCCESS';
export const GET_GPUS_FAILURE = 'GET_GPUS_FAILURE';
export const SET_RAMS = 'SET_RAMS';
export const GET_RAMS = 'GET_RAMS';
export const GET_RAMS_SUCCESS = 'GET_RAMS_SUCCESS';
export const GET_RAMS_FAILURE = 'GET_RAMS_FAILURE';

export interface ISetGames {
  type: typeof SET_GAMES;
  payload: Game[];
}

export interface IGetGames {
  type: typeof GET_GAMES;
  payload: TypeFilter;
}

export interface IGetGamesSuccess {
  type: typeof GET_GAMES_SUCCESS;
  payload: TypeResponseAllGames;
}

export interface IGetGamesFailure {
  type: typeof GET_GAMES_FAILURE;
  payload: {
    message: string;
  };
}

export interface ISetCpus {
  type: typeof SET_CPUS;
  payload: Cpu[];
}

export interface IGetCpus {
  type: typeof GET_CPUS;
  payload: TypeFilter;
}

export interface IGetCpusSuccess {
  type: typeof GET_CPUS_SUCCESS;
  payload: TypeResponseAllCpus;
}

export interface IGetCpusFailure {
  type: typeof GET_CPUS_FAILURE;
  payload: {
    message: string;
  };
}

export interface ISetGpus {
  type: typeof SET_GPUS;
  payload: Gpu[];
}

export interface IGetGpus {
  type: typeof GET_GPUS;
  payload: TypeFilter;
}

export interface IGetGpusSuccess {
  type: typeof GET_GPUS_SUCCESS;
  payload: TypeResponseAllGpus;
}

export interface IGetGpusFailure {
  type: typeof GET_GPUS_FAILURE;
  payload: {
    message: string;
  };
}

export interface ISetRams {
  type: typeof SET_RAMS;
  payload: Ram[];
}

export interface IGetRams {
  type: typeof GET_RAMS;
  payload: TypeFilter;
}

export interface IGetRamsSuccess {
  type: typeof GET_RAMS_SUCCESS;
  payload: TypeResponseAllRams;
}

export interface IGetRamsFailure {
  type: typeof GET_RAMS_FAILURE;
  payload: {
    message: string;
  };
}

export type MatcherActionTypes =
  | ISetGames
  | IGetGames
  | IGetGamesSuccess
  | IGetGamesFailure
  | ISetCpus
  | IGetCpus
  | IGetCpusSuccess
  | IGetCpusFailure
  | ISetGpus
  | IGetGpus
  | IGetGpusSuccess
  | IGetGpusFailure
  | ISetRams
  | IGetRams
  | IGetRamsSuccess
  | IGetRamsFailure;

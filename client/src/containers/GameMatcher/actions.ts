import {
  IGetCpus,
  GET_CPUS,
  ISetCpus,
  SET_CPUS,
  ISetGpus,
  SET_GPUS,
  IGetGpus,
  GET_GPUS,
  ISetRams,
  IGetRams,
  SET_RAMS,
  GET_RAMS,
  ISetGames,
  SET_GAMES,
  IGetGames,
  GET_GAMES,
} from './actionTypes';
import { TypeFilter } from 'common/models/typeFilterBuilder';
import { Cpu } from 'common/models/cpu';
import { Gpu } from 'common/models/gpu';
import { Ram } from 'common/models/ram';
import { Game } from 'common/models/game';

export const setGames = (games: Game[]): ISetGames => ({
  type: SET_GAMES,
  payload: games,
});

export const getGames = (filters: TypeFilter): IGetGames => ({
  type: GET_GAMES,
  payload: filters,
});

export const setCPUS = (cpu: Cpu[]): ISetCpus => ({
  type: SET_CPUS,
  payload: cpu,
});

export const getCPUS = (filters: TypeFilter): IGetCpus => ({
  type: GET_CPUS,
  payload: filters,
});

export const setGPUS = (gpu: Gpu[]): ISetGpus => ({
  type: SET_GPUS,
  payload: gpu,
});

export const getGPUS = (filters: TypeFilter): IGetGpus => ({
  type: GET_GPUS,
  payload: filters,
});

export const setRAMS = (rams: Ram[]): ISetRams => ({
  type: SET_RAMS,
  payload: rams,
});

export const getRAMS = (filters: TypeFilter): IGetRams => ({
  type: GET_RAMS,
  payload: filters,
});

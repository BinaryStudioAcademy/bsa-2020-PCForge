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
  SET_ALERT_MESSAGE,
  ISetMessage,
} from './actionTypes';
import { Cpu } from 'common/models/cpu';
import { Gpu } from 'common/models/gpu';
import { Ram } from 'common/models/ram';
import { Game } from 'common/models/game';
import { FilterModel } from 'common/models/filter.model';
import { AlertType } from 'components/BasicComponents/Alert';

export const setGames = (payload: Game[]): ISetGames => ({
  type: SET_GAMES,
  payload,
});

export const getGames = (payload: FilterModel): IGetGames => ({
  type: GET_GAMES,
  payload,
});

export const setCPUS = (payload: Cpu[]): ISetCpus => ({
  type: SET_CPUS,
  payload,
});

export const getCPUS = (payload: FilterModel): IGetCpus => ({
  type: GET_CPUS,
  payload,
});

export const setGPUS = (payload: Gpu[]): ISetGpus => ({
  type: SET_GPUS,
  payload,
});

export const getGPUS = (payload: FilterModel): IGetGpus => ({
  type: GET_GPUS,
  payload,
});

export const setRAMS = (payload: Ram[]): ISetRams => ({
  type: SET_RAMS,
  payload,
});

export const getRAMS = (payload: FilterModel): IGetRams => ({
  type: GET_RAMS,
  payload,
});

export const setAlertValue = (payload: { message: string; type: AlertType }): ISetMessage => ({
  type: SET_ALERT_MESSAGE,
  payload,
});

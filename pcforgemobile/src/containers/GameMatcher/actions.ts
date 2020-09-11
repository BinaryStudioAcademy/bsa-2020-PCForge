import {Cpu} from 'common/models/cpu';
import {Game} from 'common/models/game';
import {Gpu} from 'common/models/gpu';
import {MatcherActions, MatcherActionTypes} from './actionTypes';
import {ISetupPerformance} from '~/common/models/setupPerformance.model';

export const fetchGames = (name: string): MatcherActions => ({
  type: MatcherActionTypes.FETCH_GAMES,
  payload: {
    name,
  },
});

export const fetchCpus = (name: string): MatcherActions => ({
  type: MatcherActionTypes.FETCH_CPUS,
  payload: {
    name,
  },
});

export const fetchGpus = (name: string): MatcherActions => ({
  type: MatcherActionTypes.FETCH_GPUS,
  payload: {
    name,
  },
});

export const fetchSetupPerformance = (
  cpuId: number,
  gpuId: number,
  ramSize: number,
  gameId: number,
): MatcherActions => ({
  type: MatcherActionTypes.FETCH_SETUP_PERFORMANCE,
  payload: {
    cpuId,
    gpuId,
    ramSize,
    gameId,
  },
});

export const fetchSetupPerformanceSuccess = (payload: ISetupPerformance) => ({
  type: MatcherActionTypes.FETCH_SETUP_PERFORMANCE_SUCCESS,
  payload,
});

export const setGames = (games: Game[]): MatcherActions => ({
  type: MatcherActionTypes.FETCH_GAMES_SUCCESS,
  payload: {
    games,
  },
});

export const setCpus = (cpus: Cpu[]): MatcherActions => ({
  type: MatcherActionTypes.FETCH_CPUS_SUCCESS,
  payload: {
    cpus,
  },
});

export const setGpus = (gpus: Gpu[]): MatcherActions => ({
  type: MatcherActionTypes.FETCH_GPUS_SUCCESS,
  payload: {
    gpus,
  },
});

export const clearStorage = (): MatcherActions => ({
  type: MatcherActionTypes.CLEAR_STORAGE,
});

export const setError = (message: string): MatcherActions => ({
  type: MatcherActionTypes.SET_ERROR,
  payload: {
    message,
  },
});

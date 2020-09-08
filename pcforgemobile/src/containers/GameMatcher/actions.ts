import { Cpu } from 'common/models/cpu';
import { Game } from 'common/models/game';
import { Gpu } from 'common/models/gpu';
import { MatcherActions, MatcherActionTypes } from './actionTypes';

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

export const setGames = (games: Game[]): MatcherActions => ({
  type: MatcherActionTypes.FETCH_GAMES_SUCCESS,
  payload: {
    games,
  }
});

export const setCpus = (cpus: Cpu[]): MatcherActions => ({
  type: MatcherActionTypes.FETCH_CPUS_SUCCESS,
  payload: {
    cpus,
  }
});

export const setGpus = (gpus: Gpu[]): MatcherActions => ({
  type: MatcherActionTypes.FETCH_GPUS_SUCCESS,
  payload: {
    gpus,
  }
});

export const setError = (message: string): MatcherActions => ({
  type: MatcherActionTypes.SET_ERROR,
  payload: {
    message,
  },
});
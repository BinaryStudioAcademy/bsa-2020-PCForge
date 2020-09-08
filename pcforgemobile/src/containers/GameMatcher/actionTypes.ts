import { Game } from 'common/models/game';
import { Cpu } from 'common/models/cpu';
import { Gpu } from 'common/models/gpu';

export enum MatcherActionTypes {
  SET_ERROR = 'Matcher/SET_ERROR',
  FETCH_CPUS = 'Matcher/FETCH_CPUS',
  FETCH_GAMES = 'Matcher/FETCH_GAMES',
  FETCH_GPUS = 'Matcher/FETCH_GPUS',
  FETCH_CPUS_SUCCESS = 'Matcher/FETCH_CPUS_SUCCESS',
  FETCH_GAMES_SUCCESS = 'Matcher/FETCH_GAMES_SUCCESS',
  FETCH_GPUS_SUCCESS = 'Matcher/FETCH_GPUS_SUCCESS',
}

export interface IFetchGamesRequestAction {
  type: MatcherActionTypes.FETCH_GAMES,
  payload: {
    name: string;
  }
}

export interface IFetchCpusRequestAction {
  type: MatcherActionTypes.FETCH_CPUS,
  payload: {
    name: string;
  }
}

export interface IFetchGpusRequestAction {
  type: MatcherActionTypes.FETCH_GPUS,
  payload: {
    name: string;
  }
}

interface IFetchGamesAction {
  type: MatcherActionTypes.FETCH_GAMES_SUCCESS,
  payload: {
    games: Game[];
  }
}

interface IFetchCpusAction {
  type: MatcherActionTypes.FETCH_CPUS_SUCCESS,
  payload: {
    cpus: Cpu[];
  }
}

interface IFetchGpusAction {
  type: MatcherActionTypes.FETCH_GPUS_SUCCESS,
  payload: {
    gpus: Gpu[];
  }
}

interface ISetErrorAction {
  type: MatcherActionTypes.SET_ERROR,
  payload: {
    message: string;
  }
}

type MatcherRequests = IFetchCpusRequestAction | IFetchGamesRequestAction | IFetchGpusRequestAction;

type MatcherSuccess = IFetchCpusAction | IFetchGamesAction | IFetchGpusAction;

export type MatcherActions = MatcherRequests | MatcherSuccess | ISetErrorAction;

export interface MatcherState {
  games: Game[];
  cpus: Cpu[];
  gpus: Gpu[];
  error: string | null;
}

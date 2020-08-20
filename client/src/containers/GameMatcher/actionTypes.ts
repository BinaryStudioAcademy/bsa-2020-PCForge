import { AlertType } from 'components/BasicComponents/Alert';
import { GameMatcherState } from './interfaces';
import { Game } from 'common/models/game';
import { Cpu } from 'common/models/cpu';
import { Gpu } from 'common/models/gpu';
import { Ram } from 'common/models/ram';

export const MATCHER_GET_DATA = 'MATCHER_GET_DATA';
// export const MATCHER_GET_DATA_SUCCESS = 'MATCHER_GET_DATA_SUCCESS';
export const MATCHER_GET_DATA_FAILURE = 'MATCHER_GET_DATA_FAILURE';

export const MATCHER_ADD_GAMES = 'MATCHER_ADD_GAMES';
export const MATCHER_REPLACE_GAMES = 'MATCHER_REPLACE_GAMES';
export const MATCHER_ADD_CPUS = 'MATCHER_ADD_CPUS';
export const MATCHER_REPLACE_CPUS = 'MATCHER_REPLACE_CPUS';
export const MATCHER_ADD_GPUS = 'MATCHER_ADD_GPUS';
export const MATCHER_REPLACE_GPUS = 'MATCHER_REPLACE_GPUS';
export const MATCHER_ADD_RAMS = 'MATCHER_ADD_RAMS';
export const MATCHER_REPLACE_RAMS = 'MATCHER_REPLACE_RAMS';

export const SET_ALERT_MESSAGE = 'SET_ALERT_MESSAGE';

export type MatcherSettableVariants = 'games' | 'cpus' | 'gpus' | 'rams';

export interface IMatcherGetData {
  type: typeof MATCHER_GET_DATA;
  payload: {
    variant: MatcherSettableVariants;
    name: string;
    offset: number;
    type: string;
  };
}

export interface IMatcherAddGames {
  type: typeof MATCHER_ADD_GAMES;
  payload: Game[];
}

export interface IMatcherReplaceGames {
  type: typeof MATCHER_REPLACE_GAMES;
  payload: Game[];
}

export interface IMatcherAddCpus {
  type: typeof MATCHER_ADD_CPUS;
  payload: Cpu[];
}

export interface IMatcherReplaceCpus {
  type: typeof MATCHER_REPLACE_CPUS;
  payload: Cpu[];
}

export interface IMatcherAddGpus {
  type: typeof MATCHER_ADD_GPUS;
  payload: Gpu[];
}
export interface IMatcherReplaceGpus {
  type: typeof MATCHER_REPLACE_GPUS;
  payload: Gpu[];
}
export interface IMatcherAddRams {
  type: typeof MATCHER_ADD_RAMS;
  payload: Ram[];
}
export interface IMatcherReplaceRams {
  type: typeof MATCHER_REPLACE_RAMS;
  payload: Ram[];
}

export interface ISetMessage {
  type: typeof SET_ALERT_MESSAGE;
  payload: {
    message: string;
    type: AlertType;
  };
}

export type MatcherActionTypes =
  | IMatcherGetData
  | IMatcherAddGames
  | IMatcherReplaceGames
  | IMatcherAddCpus
  | IMatcherReplaceCpus
  | IMatcherAddGpus
  | IMatcherReplaceGpus
  | IMatcherAddRams
  | IMatcherReplaceRams
  | ISetMessage;

export const MatcherServerActions = {
  MATCHER_ADD_CPUS,
  MATCHER_ADD_GPUS,
  MATCHER_ADD_RAMS,
  MATCHER_ADD_GAMES,
  MATCHER_REPLACE_CPUS,
  MATCHER_REPLACE_GPUS,
  MATCHER_REPLACE_GAMES,
  MATCHER_REPLACE_RAMS,
};

export type MatcherServerActions = typeof MatcherServerActions;

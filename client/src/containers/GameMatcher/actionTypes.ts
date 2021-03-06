import { AlertType } from 'components/BasicComponents/Alert';
import { GameMatcherSetupFilter, GameMatcherState } from './interfaces';
import { Game } from 'common/models/game';
import { Cpu } from 'common/models/cpu';
import { Gpu } from 'common/models/gpu';
import { Ram } from 'common/models/ram';
import { Setup } from 'common/models/setup';

export const MATCHER_GET_DATA = 'MATCHER_GET_DATA';
// export const MATCHER_GET_DATA_SUCCESS = 'MATCHER_GET_DATA_SUCCESS';
export const MATCHER_GET_DATA_FAILURE = 'MATCHER_GET_DATA_FAILURE';

export const MATCHER_GET_SETUPS = 'Matcher/MATCHER_GET_SETUPS';
// export const MATCHER_GET_DATA_SUCCESS = 'MATCHER_GET_DATA_SUCCESS';
export const MATCHER_GET_SETUPS_FAILURE = 'Matcher/MATCHER_GET_SETUPS_FAILURE';

export const MATCHER_GET_MORE_SETUPS = 'Matcher/MATCHER_GET_MORE_SETUPS';

export const MATCHER_ADD_GAMES = 'MATCHER_ADD_GAMES';
export const MATCHER_REPLACE_GAMES = 'MATCHER_REPLACE_GAMES';
export const MATCHER_ADD_CPUS = 'MATCHER_ADD_CPUS';
export const MATCHER_REPLACE_CPUS = 'MATCHER_REPLACE_CPUS';
export const MATCHER_ADD_GPUS = 'MATCHER_ADD_GPUS';
export const MATCHER_REPLACE_GPUS = 'MATCHER_REPLACE_GPUS';
export const MATCHER_ADD_SETUPS = 'MATCHER_ADD_SETUPS';
export const MATCHER_REPLACE_SETUPS = 'MATCHER_REPLACE_SETUPS';

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

export interface IMatcherGetSetupData {
  type: typeof MATCHER_GET_SETUPS;
  payload: {
    authorId: string;
    title: string;
  };
}

export interface IMatcherGetMoreSetups {
  type: typeof MATCHER_GET_MORE_SETUPS;
  payload: {
    authorId: string;
    title: string;
    from: number;
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

export interface IMatcherAddSetups {
  type: typeof MATCHER_ADD_SETUPS;
  payload: Setup[];
}

export interface IMatcherReplaceSetups {
  type: typeof MATCHER_REPLACE_SETUPS;
  payload: Setup[];
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
  | ISetMessage
  | IMatcherGetSetupData
  | IMatcherAddSetups
  | IMatcherReplaceSetups
  | IMatcherGetMoreSetups;

export const MatcherServerActions = {
  MATCHER_ADD_CPUS,
  MATCHER_ADD_GPUS,
  MATCHER_ADD_GAMES,
  MATCHER_REPLACE_CPUS,
  MATCHER_REPLACE_GPUS,
  MATCHER_REPLACE_GAMES,
};

export type MatcherServerActions = typeof MatcherServerActions;

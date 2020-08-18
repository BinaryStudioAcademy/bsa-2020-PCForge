import { Game } from 'common/models/game';
import { Cpu } from 'common/models/cpu';
import { Gpu } from 'common/models/gpu';
import { Ram } from 'common/models/ram';
import { MatcherActionTypes } from './actionTypes';
import { FilterModel } from 'common/models/filter.model';
import { AlertType } from 'components/BasicComponents/Alert';

export interface GameMatcherState {
  games: Game[];
  cpus: Cpu[];
  gpus: Gpu[];
  rams: Ram[];

  alertMessage?: string;
  alertMessageType?: AlertType;

  gamesErrorMessage?: string | boolean;
  cpusErrorMessage?: string | boolean;
  gpusErrorMessage?: string | boolean;
  ramsErrorMessage?: string | boolean;
}

export interface GameMatcherProps {
  state: GameMatcherState;

  setGames: (games: Game[]) => MatcherActionTypes;
  getGames: (filter: FilterModel) => MatcherActionTypes;

  setCPUS: (cpus: Cpu[]) => MatcherActionTypes;
  getCPUS: (filter: FilterModel) => MatcherActionTypes;

  setGPUS: (gpus: Gpu[]) => MatcherActionTypes;
  getGPUS: (filter: FilterModel) => MatcherActionTypes;

  setRAMS: (rams: Ram[]) => MatcherActionTypes;
  getRAMS: (filter: FilterModel) => MatcherActionTypes;

  setAlertValue: (payload: { message: string; type: AlertType }) => MatcherActionTypes;
}

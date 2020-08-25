import { Game } from 'common/models/game';
import { Cpu } from 'common/models/cpu';
import { Gpu } from 'common/models/gpu';
import { Ram } from 'common/models/ram';
import { MatcherActionTypes, MatcherSettableVariants, MatcherServerActions } from './actionTypes';
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

export interface GameMatcherFilter {
  variant: MatcherSettableVariants;
  name: string;
  offset: number;
  type: string;
}

export interface GameMatcherProps {
  state: GameMatcherState;

  getMatcherData: (payload: GameMatcherFilter) => MatcherActionTypes;
  setAlertValue: (payload: { message: string; type: AlertType }) => MatcherActionTypes;

  setCpu: (cpu: Cpu) => void;
  setGpu: (gpu: Gpu) => void;
  setRam: (ram: Ram) => void;
}

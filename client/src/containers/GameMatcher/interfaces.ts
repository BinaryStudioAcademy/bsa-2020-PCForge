import { Game } from 'common/models/game';
import { Cpu } from 'common/models/cpu';
import { Gpu } from 'common/models/gpu';
import { Ram } from 'common/models/ram';
import { MatcherActionTypes, MatcherSettableVariants } from './actionTypes';
import { AlertType } from 'components/BasicComponents/Alert';
import { Setup } from 'common/models/setup';

export interface GameMatcherState {
  games: Game[];
  cpus: Cpu[];
  gpus: Gpu[];
  rams: Ram[];
  setups: Setup[];

  alertMessage?: string;
  alertMessageType?: AlertType;

  gamesErrorMessage?: string | boolean;
  cpusErrorMessage?: string | boolean;
  gpusErrorMessage?: string | boolean;
  ramsErrorMessage?: string | boolean;
  setupErrorMessage?: string | boolean;
}

export interface GameMatcherFilter {
  variant: MatcherSettableVariants;
  name: string;
  offset: number;
  type: string;
}

export interface GameMatcherSetupFilter {
  authorId: string;
  name: string;
  offset: number;
  type: string;
}

export interface GameMatcherProps {
  state: GameMatcherState;
  userId: number | undefined;

  getMatcherData: (payload: GameMatcherFilter) => MatcherActionTypes;
  getSetupsData: (payload: { authorId: string; title: string }) => MatcherActionTypes;
  getMoreSetups: (payload: { authorId: string; title: string; from: number }) => MatcherActionTypes;
  setAlertValue: (payload: { message: string; type: AlertType }) => MatcherActionTypes;

  setCpu: (cpu: Cpu) => void;
  setGpu: (gpu: Gpu) => void;
  setGame: (game: Game) => void;
  setRamSize: (ramSize: number) => void;
}

import { Game } from 'common/models/game.model';
import { Cpu } from 'common/models/cpu.model';
import { Gpu } from 'common/models/gpu.model';
import { MatcherActionTypes, MatcherSettableVariants } from './actionTypes';

export interface GameMatcherState {
  games: Game[];
  cpus: Cpu[];
  gpus: Gpu[];

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

  setCpu: (cpu: Cpu) => void;
  setGpu: (gpu: Gpu) => void;
  setGame: (game: Game) => void;
  setRamSize: (ramSize: number) => void;
}
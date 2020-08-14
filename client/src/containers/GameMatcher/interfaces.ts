import { Game } from "common/models/game";
import { Cpu } from "common/models/cpu";
import { Gpu } from "common/models/gpu";
import { Ram } from "common/models/ram";
import { TypeFilter } from "common/models/typeFilterBuilder";
import { MatcherActionTypes } from "./actionTypes";

export interface GameMatcherState {
  games: Game[];
  cpus: Cpu[];
  gpus: Gpu[];
  rams: Ram[];
}

export interface GameMatcherProps {
  state: GameMatcherState;
  setCPUS: (cpus: Cpu[]) => MatcherActionTypes;
  getCPUS: (filter: TypeFilter) => MatcherActionTypes;

  setGPUS: (gpus: Gpu[]) => MatcherActionTypes;
  getGPUS: (filter: TypeFilter) => MatcherActionTypes;

  setRAMS: (rams: Ram[]) => MatcherActionTypes;
  getRAMS: (filter: TypeFilter) => MatcherActionTypes;
}
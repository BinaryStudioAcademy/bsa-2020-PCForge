import { GameMatcherState } from './interfaces';
import {
  MatcherActionTypes,
  MATCHER_ADD_CPUS,
  MATCHER_ADD_GPUS,
  MATCHER_ADD_GAMES,
  MATCHER_REPLACE_CPUS,
  MATCHER_REPLACE_GPUS,
  MATCHER_REPLACE_GAMES,
  SET_ALERT_MESSAGE,
  MATCHER_ADD_SETUPS,
  MATCHER_REPLACE_SETUPS,
} from './actionTypes';

const initialState: GameMatcherState = {
  setups: [],
  games: [],
  cpus: [],
  gpus: [],
  rams: [],
  gamesErrorMessage: false,
  cpusErrorMessage: false,
  gpusErrorMessage: false,
  ramsErrorMessage: false,
  alertMessageType: undefined,
  alertMessage: undefined,
};

export function MatcherReducer(state: GameMatcherState = initialState, action: MatcherActionTypes): GameMatcherState {
  switch (action.type) {
    case MATCHER_ADD_CPUS:
      return {
        ...state,
        cpus: [...state.cpus, ...action.payload],
      };
    case MATCHER_ADD_GPUS:
      return {
        ...state,
        gpus: [...state.gpus, ...action.payload],
      };
    case MATCHER_ADD_GAMES:
      return {
        ...state,
        games: [...state.games, ...action.payload],
      };
    case MATCHER_ADD_SETUPS:
      return {
        ...state,
        setups: [...state.setups, ...action.payload],
      };
    case MATCHER_REPLACE_CPUS:
      return {
        ...state,
        cpus: action.payload,
      };
    case MATCHER_REPLACE_GPUS:
      return {
        ...state,
        gpus: action.payload,
      };
    case MATCHER_REPLACE_GAMES:
      return {
        ...state,
        games: action.payload,
      };
    case MATCHER_REPLACE_SETUPS:
      return {
        ...state,
        setups: action.payload,
      };
    case SET_ALERT_MESSAGE:
      return {
        ...state,
        alertMessage: action.payload.message,
        alertMessageType: action.payload.type,
      };
    default:
      return state;
  }
}

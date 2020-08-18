import { GameMatcherState } from './interfaces';
import {
  MatcherActionTypes,
  GET_CPUS_SUCCESS,
  SET_CPUS,
  SET_GPUS,
  GET_GPUS_SUCCESS,
  SET_RAMS,
  GET_RAMS_SUCCESS,
  GET_GAMES_SUCCESS,
  SET_GAMES,
  GET_GAMES_FAILURE,
  GET_CPUS_FAILURE,
  GET_RAMS_FAILURE,
  GET_GPUS_FAILURE,
  SET_ALERT_MESSAGE,
} from './actionTypes';

const initialState: GameMatcherState = {
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
    case SET_GAMES:
      return {
        ...state,
        games: action.payload,
      };
    case GET_GAMES_SUCCESS:
      return {
        ...state,
        gamesErrorMessage: false,
        games: [...state.games, ...action.payload.data],
      };
    case GET_GAMES_FAILURE:
      return {
        ...state,
        gamesErrorMessage: true,
      };
    case SET_CPUS:
      return {
        ...state,
        cpus: action.payload,
      };
    case GET_CPUS_SUCCESS:
      return {
        ...state,
        cpusErrorMessage: false,
        cpus: [...state.cpus, ...action.payload.data],
      };
    case GET_CPUS_FAILURE:
      return {
        ...state,
        cpusErrorMessage: true,
      };
    case SET_GPUS:
      return {
        ...state,
        gpus: action.payload,
      };
    case GET_GPUS_SUCCESS:
      return {
        ...state,
        gpusErrorMessage: false,
        gpus: [...state.gpus, ...action.payload.data],
      };
    case GET_GPUS_FAILURE:
      return {
        ...state,
        gpusErrorMessage: true,
      };
    case SET_RAMS:
      return {
        ...state,
        rams: action.payload,
      };
    case GET_RAMS_SUCCESS:
      return {
        ...state,
        ramsErrorMessage: false,
        rams: [...state.rams, ...action.payload.data],
      };
    case GET_RAMS_FAILURE:
      return {
        ...state,
        ramsErrorMessage: true,
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

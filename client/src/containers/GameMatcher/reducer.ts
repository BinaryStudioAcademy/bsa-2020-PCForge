import { GameMatcherState } from "./interfaces";
import { MatcherActionTypes, GET_CPUS_SUCCESS, SET_CPUS, SET_GPUS, GET_GPUS_SUCCESS, SET_RAMS, GET_RAMS_SUCCESS } from "./actionTypes";

const initialState: GameMatcherState = {
  games: [],
  cpus: [],
  gpus: [],
  rams: []
}

export function MatcherReducer(state: GameMatcherState = initialState, action: MatcherActionTypes): GameMatcherState {
  switch (action.type) {
    case SET_CPUS:
      return {
        ...state,
        cpus: action.payload
      }
    case GET_CPUS_SUCCESS:
      return {
        ...state,
        cpus: [...state.cpus, ...action.payload.data]
      };
    case SET_GPUS:
      return {
        ...state,
        gpus: action.payload
      }
    case GET_GPUS_SUCCESS:
      return {
        ...state,
        gpus: [...state.gpus, ...action.payload.data]
      };
    case SET_RAMS:
      return {
        ...state,
        rams: action.payload
      }
    case GET_RAMS_SUCCESS:
      console.log('reduce remas')
      return {
        ...state,
        rams: [...state.rams, ...action.payload.data]
      }
    default:
      return state;
  }
}

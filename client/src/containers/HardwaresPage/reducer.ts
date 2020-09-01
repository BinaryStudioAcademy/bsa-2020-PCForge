import { HARDWARES_GET_HARDWARES_SUCESS, hardwaresActionTypes, HARDWARES_GET_HARDWARES_FAILURE } from './actionTypes';
import { IHardwaresState } from './interfaces';

const initialState: IHardwaresState = {
  hardwares: [],
  errorMessage: null,
};

export function HardwaresReducer(state = initialState, action: hardwaresActionTypes): IHardwaresState {
  switch (action.type) {
    case HARDWARES_GET_HARDWARES_SUCESS: {
      return {
        ...state,
        hardwares: action.payload.hardwares,
      };
    }
    case HARDWARES_GET_HARDWARES_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload.message,
      };
    }
    default:
      return state;
  }
}

import {
  HARDWARES_GET_HARDWARES_SUCESS,
  hardwaresActionTypes,
  HARDWARES_GET_HARDWARES_FAILURE,
  SET_SELECTED_HARDWARE,
} from './actionTypes';
import { IHardwaresState } from './interfaces';

const initialState: IHardwaresState = {
  hardwares: [],
  selectedHardware: null,
  totalItems: 0,
  errorMessage: null,
};

export function HardwaresReducer(state = initialState, action: hardwaresActionTypes): IHardwaresState {
  switch (action.type) {
    case HARDWARES_GET_HARDWARES_SUCESS: {
      return {
        ...state,
        hardwares: action.payload.hardwares,
        totalItems: action.payload.totalItemsCount,
      };
    }
    case HARDWARES_GET_HARDWARES_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload.message,
      };
    }
    case SET_SELECTED_HARDWARE: {
      console.log('functionHardwaresReducer -> SET_SELECTED_HARDWARE', SET_SELECTED_HARDWARE);
      return {
        ...state,
        selectedHardware: action.payload,
      };
    }
    default:
      return state;
  }
}

import { AnyAction } from 'redux';
import { TypeCpu } from 'common/models/typeCpu';
import { TypeGpu } from 'common/models/typeGpu';
import { TypeRam } from 'common/models/typeRam';
import { TypeMotherboard } from 'common/models/typeMotherboard';
import { TypePowersupplies } from 'common/models/typePowersupplies';
import { FETCH_COMPONENT_SUCCESS, REMOVE_COMPONENT_FROM_SETUP, RESET_SETUP, SET_SETUP } from './actionTypes';

export type TypeSetup = {
  cpu: TypeCpu | null;
  gpu: TypeGpu | null;
  ram: TypeRam | null;
  motherboard: TypeMotherboard | null;
  powersupply: TypePowersupplies | null;
};

const initialState = {
  cpu: null,
  gpu: null,
  ram: null,
  motherboard: null,
  powersupply: null,
} as TypeSetup;

export default function (state = initialState, action: AnyAction): TypeSetup {
  switch (action.type) {
    case FETCH_COMPONENT_SUCCESS: {
      return {
        ...state,
        [action.payload.group]: action.payload.component,
      };
    }

    case REMOVE_COMPONENT_FROM_SETUP: {
      return {
        ...state,
        [action.payload.group]: null,
      };
    }

    case SET_SETUP: {
      return action.payload;
    }

    case RESET_SETUP: {
      return initialState;
    }

    default:
      return state;
  }
}

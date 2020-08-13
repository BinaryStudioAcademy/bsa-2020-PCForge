import { AnyAction } from 'redux';
import { TypeCpu } from 'common/models/typeCpu';
import { TypeGpu } from 'common/models/typeGpu';
import { TypeRam } from 'common/models/typeRam';
import { TypeMotherboard } from 'common/models/typeMotherboard';
import { TypePowersupplies } from 'common/models/typePowersupplies';
import {
  FETCH_CPU_SUCCESS,
  FETCH_GPU_SUCCESS,
  FETCH_MOTHERBOARD_SUCCESS,
  FETCH_POWERSUPPLY_SUCCESS,
  FETCH_RAM_SUCCESS,
  REMOVE_CPU_FROM_SETUP,
  REMOVE_GPU_FROM_SETUP,
  REMOVE_MOTHERBOARD_FROM_SETUP,
  REMOVE_POWERSUPPLY_FROM_SETUP,
  REMOVE_RAM_FROM_SETUP,
  RESET_SETUP,
} from './actionTypes';

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
    case FETCH_CPU_SUCCESS: {
      return {
        ...state,
        cpu: action.payload,
      };
    }

    case FETCH_GPU_SUCCESS: {
      return {
        ...state,
        gpu: action.payload,
      };
    }

    case FETCH_RAM_SUCCESS: {
      return {
        ...state,
        ram: action.payload,
      };
    }

    case FETCH_MOTHERBOARD_SUCCESS: {
      return {
        ...state,
        motherboard: action.payload,
      };
    }

    case FETCH_POWERSUPPLY_SUCCESS: {
      return {
        ...state,
        powersupply: action.payload,
      };
    }

    case REMOVE_CPU_FROM_SETUP: {
      return {
        ...state,
        cpu: null,
      };
    }

    case REMOVE_GPU_FROM_SETUP: {
      return {
        ...state,
        gpu: null,
      };
    }

    case REMOVE_RAM_FROM_SETUP: {
      return {
        ...state,
        ram: null,
      };
    }

    case REMOVE_MOTHERBOARD_FROM_SETUP: {
      return {
        ...state,
        motherboard: null,
      };
    }

    case REMOVE_POWERSUPPLY_FROM_SETUP: {
      return {
        ...state,
        powersupply: null,
      };
    }

    case RESET_SETUP: {
      return initialState;
    }

    default:
      return state;
  }
}

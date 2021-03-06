import { AnyAction } from 'redux';
import { TypeCpu } from 'common/models/typeCpu';
import { TypeGpu } from 'common/models/typeGpu';
import { TypeRam } from 'common/models/typeRam';
import { TypeMotherboard } from 'common/models/typeMotherboard';
import { TypePowersupplies } from 'common/models/typePowersupplies';
import { TypeHdd } from 'common/models/typeHdd';
import { TypeSsd } from 'common/models/typeSsd';
import {
  FETCH_COMPONENT_SUCCESS,
  REMOVE_COMPONENT_FROM_SETUP,
  BUILDER_RESET_SETUP,
  BUILDER_SET_SETUP,
} from './actionTypes';
import { setCount } from 'helpers/setupHelper';

export type TypeSetup = {
  id?: number | null;
  title?: string;
  description?: string;
  image?: string;
  cpu: TypeCpu | null;
  gpu: TypeGpu | null;
  ram: TypeRam | null;
  ramCount: number | null;
  motherboard: TypeMotherboard | null;
  powersupply: TypePowersupplies | null;
  hdd: TypeHdd | null;
  ssd: TypeSsd | null;
};

export type TypeSetupForPost = {
  id?: number | null;
  title?: string;
  description?: string;
  image?: string;
  cpuId: number;
  gpuId: number;
  motherboardId: number;
  ramId: number;
  ramCount: number;
  powerSupplyId: number;
  hddId: number;
  ssdId: number;
};

const initialState = {
  id: null,
  title: '',
  description: '',
  image: '',
  cpu: null,
  gpu: null,
  ram: null,
  ramCount: null,
  motherboard: null,
  powersupply: null,
  hdd: null,
  ssd: null,
} as TypeSetup;

export default function (state = initialState, action: AnyAction): TypeSetup {
  switch (action.type) {
    case FETCH_COMPONENT_SUCCESS: {
      const stateCopy = { ...state };

      if (typeof action.payload.component === 'string') setCount(action.payload.group, action.payload.component);

      if (action.payload.group === 'ram' && !stateCopy.ramCount) stateCopy.ramCount = 1;

      return {
        ...stateCopy,
        [action.payload.group]: action.payload.component,
      };
    }

    case REMOVE_COMPONENT_FROM_SETUP: {
      return {
        ...state,
        [action.payload.group]: null,
      };
    }

    case BUILDER_SET_SETUP: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case BUILDER_RESET_SETUP: {
      return initialState;
    }

    default:
      return state;
  }
}

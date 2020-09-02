import { HardWareFormAction, HardwareFormActionTypes, HardwareFormState } from './actionsTypes';

const initialState: HardwareFormState = {
  socketList: [],
  RAMList: [],
  RAMtypeList: [],
  error: '',
  createdHardwareName: '',
};

export function HardwareFormReducer(state = initialState, action: HardWareFormAction): HardwareFormState {
  switch (action.type) {
    case HardwareFormActionTypes.GET_INITIAL_VALUES_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    // upload initial values
    case HardwareFormActionTypes.GET_INITIAL_VALUES_MOTHERBOARD_SUCCESS: {
      return {
        ...state,
        socketList: action.payload.socketList,
        RAMList: action.payload.RAMList,
      };
    }
    case HardwareFormActionTypes.GET_INITIAL_VALUES_RAM_SUCCESS: {
      return {
        ...state,
        RAMtypeList: action.payload.RAMtypeList,
      };
    }
    case HardwareFormActionTypes.GET_INITIAL_VALUES_CPU_SUCCESS: {
      return {
        ...state,
        socketList: action.payload.socketList,
      };
    }
    // upload new values
    case HardwareFormActionTypes.UPLOAD_MORE_RAMTYPE_VALUES: {
      return {
        ...state,
        RAMtypeList: [...state.RAMtypeList, ...action.payload.valuesList],
      };
    }
    case HardwareFormActionTypes.UPLOAD_MORE_ENTERED_RAMTYPE_VALUES: {
      return {
        ...state,
        RAMtypeList: action.payload.valuesList,
      };
    }
    case HardwareFormActionTypes.UPLOAD_MORE_SOCKET_VALUES: {
      return {
        ...state,
        socketList: [...state.socketList, ...action.payload.valuesList],
      };
    }
    case HardwareFormActionTypes.UPLOAD_MORE_ENTERED_SOCKET_VALUES: {
      return {
        ...state,
        socketList: action.payload.valuesList,
      };
    }
    case HardwareFormActionTypes.UPLOAD_MORE_RAM_VALUES: {
      return {
        ...state,
        RAMList: [...state.RAMList, ...action.payload.valuesList],
      };
    }
    case HardwareFormActionTypes.UPLOAD_MORE_ENTERED_RAM_VALUES: {
      return {
        ...state,
        RAMList: action.payload.valuesList,
      };
    }
    case HardwareFormActionTypes.CREATE_NEW_HARDWARE_SUCCESS: {
      return {
        ...state,
        createdHardwareName: action.payload.hardwareName,
      };
    }
    default:
      return state;
  }
}

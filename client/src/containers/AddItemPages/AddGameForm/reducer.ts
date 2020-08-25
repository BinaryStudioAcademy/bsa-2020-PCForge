import { GameFormAction, GameFormActionTypes, GameFormState } from './actionTypes';

const initialState: GameFormState = {
  minCPUList: [],
  minGPUList: [],
  recCPUList: [],
  recGPUList: [],
  error: '',
  gameName: '',
};

export function GameFormReducer(state = initialState, action: GameFormAction): GameFormState {
  switch (action.type) {
    case GameFormActionTypes.GET_INITIAL_VALUES_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case GameFormActionTypes.GET_INITIAL_VALUES_SUCCESS: {
      return {
        ...state,
        recCPUList: action.payload.recCPUList,
        recGPUList: action.payload.recGPUList,
        minCPUList: action.payload.minCPUList,
        minGPUList: action.payload.minGPUList,
      };
    }
    case GameFormActionTypes.CREATE_NEW_GAME_SUCCESS: {
      return {
        ...state,
        gameName: action.payload.gameName,
      };
    }
    case GameFormActionTypes.UPLOAD_MORE_REC_CPU_VALUES: {
      return {
        ...state,
        recCPUList: [...state.recCPUList, ...action.payload.valuesList],
      };
    }
    case GameFormActionTypes.UPLOAD_MORE_ENTERED_REC_CPU_VALUES: {
      return {
        ...state,
        recCPUList: action.payload.valuesList,
      };
    }
    case GameFormActionTypes.UPLOAD_MORE_REC_GPU_VALUES: {
      return {
        ...state,
        recGPUList: [...state.recGPUList, ...action.payload.valuesList],
      };
    }
    case GameFormActionTypes.UPLOAD_MORE_ENTERED_REC_GPU_VALUES: {
      return {
        ...state,
        recGPUList: action.payload.valuesList,
      };
    }

    case GameFormActionTypes.UPLOAD_MORE_MIN_CPU_VALUES: {
      return {
        ...state,
        minCPUList: [...state.minCPUList, ...action.payload.valuesList],
      };
    }
    case GameFormActionTypes.UPLOAD_MORE_ENTERED_MIN_CPU_VALUES: {
      return {
        ...state,
        minCPUList: action.payload.valuesList,
      };
    }
    case GameFormActionTypes.UPLOAD_MORE_MIN_GPU_VALUES: {
      return {
        ...state,
        minGPUList: [...state.minGPUList, ...action.payload.valuesList],
      };
    }
    case GameFormActionTypes.UPLOAD_MORE_ENTERED_MIN_GPU_VALUES: {
      return {
        ...state,
        minGPUList: action.payload.valuesList,
      };
    }
    default:
      return state;
  }
}

import { SelectOption } from 'components/BasicComponents/InputBasedSelect';
import { GameCreationAttributes } from 'common/models/game';
import { AlertType } from 'components/BasicComponents/Alert';

export enum GameFormActionTypes {
  GET_INITIAL_VALUES = 'GET_INITIAL_VALUES',
  GET_INITIAL_VALUES_SUCCESS = 'GET_INITIAL_VALUES_SUCCESS',
  CLEAR_GAME_STATE_VALUES_ACTION = 'CLEAR_GAME_STATE_VALUES_ACTION',
  CLEAR_GAME_STATE_VALUES_SUCCESS = 'CLEAR_GAME_STATE_VALUES_SUCCESS',
  GET_INITIAL_VALUES_ERROR = 'GET_INITIAL_VALUES_ERROR',
  UPLOAD_MORE_VALUES = 'UPLOAD_MORE_VALUES',
  CREATE_NEW_GAME_ACTION = 'CREATE_NEW_GAME_ACTION',
  CREATE_NEW_GAME_SUCCESS = 'CREATE_NEW_GAME_SUCCESS',

  UPLOAD_MORE_REC_CPU_VALUES = 'UPLOAD_MORE_REC_CPU_VALUES',
  UPLOAD_MORE_ENTERED_REC_CPU_VALUES = 'UPLOAD_MORE_ENTERED_REC_CPU_VALUES',
  UPLOAD_MORE_REC_GPU_VALUES = 'UPLOAD_MORE_REC_GPU_VALUES',
  UPLOAD_MORE_ENTERED_REC_GPU_VALUES = 'UPLOAD_MORE_ENTERED_REC_GPU_VALUES',

  UPLOAD_MORE_MIN_CPU_VALUES = 'UPLOAD_MORE_MIN_CPU_VALUES',
  UPLOAD_MORE_ENTERED_MIN_CPU_VALUES = 'UPLOAD_MORE_ENTERED_MIN_CPU_VALUES',
  UPLOAD_MORE_MIN_GPU_VALUES = 'UPLOAD_MORE_MIN_GPU_VALUES',
  UPLOAD_MORE_ENTERED_MIN_GPU_VALUES = 'UPLOAD_MORE_ENTERED_MIN_GPU_VALUES',
}
export enum GameFormActions {
  UPLOAD_MORE_REC_CPU_VALUES = 'UPLOAD_MORE_REC_CPU_VALUES',
  UPLOAD_MORE_ENTERED_REC_CPU_VALUES = 'UPLOAD_MORE_ENTERED_REC_CPU_VALUES',
  UPLOAD_MORE_REC_GPU_VALUES = 'UPLOAD_MORE_REC_GPU_VALUES',
  UPLOAD_MORE_ENTERED_REC_GPU_VALUES = 'UPLOAD_MORE_ENTERED_REC_GPU_VALUES',

  UPLOAD_MORE_MIN_CPU_VALUES = 'UPLOAD_MORE_MIN_CPU_VALUES',
  UPLOAD_MORE_ENTERED_MIN_CPU_VALUES = 'UPLOAD_MORE_ENTERED_MIN_CPU_VALUES',
  UPLOAD_MORE_MIN_GPU_VALUES = 'UPLOAD_MORE_MIN_GPU_VALUES',
  UPLOAD_MORE_ENTERED_MIN_GPU_VALUES = 'UPLOAD_MORE_ENTERED_MIN_GPU_VALUES',
}

export enum typesHardware {
  cpu = 'cpu',
  gpu = 'gpu',
}
export enum typesField {
  min = 'min',
  rec = 'rec',
}

export interface IHardwareFilter {
  offset?: number;
  name?: string;
  typeHardware: typesHardware;
  typeAction: string;
}

export interface IGetInitialValueAction {
  type: GameFormActionTypes.GET_INITIAL_VALUES;
}

export interface ILoadInitialValuesSuccess {
  type: GameFormActionTypes.GET_INITIAL_VALUES_SUCCESS;
  payload: {
    recCPUList: SelectOption[];
    recGPUList: SelectOption[];
    minCPUList: SelectOption[];
    minGPUList: SelectOption[];
  };
}
export interface IClearStateValuesAction {
  type: GameFormActionTypes.CLEAR_GAME_STATE_VALUES_ACTION;
}
export interface IClearStateValuesSuccess {
  type: GameFormActionTypes.CLEAR_GAME_STATE_VALUES_SUCCESS;
}

export interface ICreateGameAction {
  type: GameFormActionTypes.CREATE_NEW_GAME_ACTION;
  payload: {
    game: GameCreationAttributes;
    imageData: Blob;
  };
}

export interface ICreateGameSuccess {
  type: GameFormActionTypes.CREATE_NEW_GAME_SUCCESS;
  payload: {
    gameName: string;
  };
}

export interface ILoadGameFormError {
  type: GameFormActionTypes.GET_INITIAL_VALUES_ERROR;
  payload: {
    errorMessage: string;
    alertType?: AlertType;
  };
}

export interface IUploadMoreItemsAction {
  type: GameFormActionTypes.UPLOAD_MORE_VALUES;
  payload: IHardwareFilter;
}
export interface IUploadMoreRECCPU {
  type: GameFormActionTypes.UPLOAD_MORE_REC_CPU_VALUES;
  payload: {
    valuesList: SelectOption[];
  };
}
export interface IUploadMoreEnteredRECCPU {
  type: GameFormActionTypes.UPLOAD_MORE_ENTERED_REC_CPU_VALUES;
  payload: {
    valuesList: SelectOption[];
  };
}

export interface IUploadMoreRECGPU {
  type: GameFormActionTypes.UPLOAD_MORE_REC_GPU_VALUES;
  payload: {
    valuesList: SelectOption[];
  };
}
export interface IUploadMoreEnteredRECGPU {
  type: GameFormActionTypes.UPLOAD_MORE_ENTERED_REC_GPU_VALUES;
  payload: {
    valuesList: SelectOption[];
  };
}

export interface IUploadMoreMINCPU {
  type: GameFormActionTypes.UPLOAD_MORE_MIN_CPU_VALUES;
  payload: {
    valuesList: SelectOption[];
  };
}
export interface IUploadMoreEnteredMINCPU {
  type: GameFormActionTypes.UPLOAD_MORE_ENTERED_MIN_CPU_VALUES;
  payload: {
    valuesList: SelectOption[];
  };
}

export interface IUploadMoreMINGPU {
  type: GameFormActionTypes.UPLOAD_MORE_MIN_GPU_VALUES;
  payload: {
    valuesList: SelectOption[];
  };
}
export interface IUploadMoreEnteredMINGPU {
  type: GameFormActionTypes.UPLOAD_MORE_ENTERED_MIN_GPU_VALUES;
  payload: {
    valuesList: SelectOption[];
  };
}

export interface GameFormState {
  minCPUList: SelectOption[];
  minGPUList: SelectOption[];
  recCPUList: SelectOption[];
  recGPUList: SelectOption[];
  errorMessage?: string;
  gameName?: string;
  alertType?: AlertType;
}

export type GameFormAction =
  | IGetInitialValueAction
  | ILoadInitialValuesSuccess
  | ICreateGameAction
  | ICreateGameSuccess
  | ILoadGameFormError
  | IUploadMoreItemsAction
  | IUploadMoreRECCPU
  | IUploadMoreEnteredRECCPU
  | IUploadMoreRECGPU
  | IUploadMoreEnteredRECGPU
  | IUploadMoreMINCPU
  | IUploadMoreEnteredMINCPU
  | IUploadMoreMINGPU
  | IUploadMoreEnteredMINGPU
  | IClearStateValuesAction
  | IClearStateValuesSuccess;

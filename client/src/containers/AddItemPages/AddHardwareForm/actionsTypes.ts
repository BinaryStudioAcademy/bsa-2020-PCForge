import { SelectOption } from 'components/BasicComponents/InputBasedSelect';
import { HardwareFields } from 'common/enums/AdminTools/HardwareFields';
import { CpuCreationAttributes } from 'common/models/cpu';
import { GpuCreationAttributes } from 'common/models/gpu';
import { MotherboardCreationAttributes } from 'common/models/motherboard';
import { PowerSupplyCreationAttributes } from 'common/models/powerSupply';
import { RamCreationAttributes } from 'common/models/ram';
import { SsdCreationAttributes } from 'common/models/ssd';
import { HddCreationAttributes } from 'common/models/hdd';
import { AlertType } from 'components/BasicComponents/Alert';

export enum HardwareFormActionTypes {
  GET_INITIAL_VALUES_ERROR = 'GET_INITIAL_VALUES_ERROR',
  UPLOAD_MORE_VALUES = 'UPLOAD_MORE_VALUES',
  CREATE_NEW_HARDWARE_SUCCESS = 'CREATE_NEW_HARDWARE_SUCCESS',
  UPDATE_STATE_TO_INIT_ACTION = 'UPDATE_STATE_TO_INIT_ACTION',
  UPDATE_STATE_TO_INIT_SUCCESS = 'UPDATE_STATE_TO_INIT_SUCCESS',

  GET_INITIAL_VALUES_MOTHERBOARD_ACTION = 'GET_INITIAL_VALUES_MOTHERBOARD_ACTION',
  GET_INITIAL_VALUES_MOTHERBOARD_SUCCESS = 'GET_INITIAL_VALUES_MOTHERBOARD_SUCCESS',
  GET_INITIAL_VALUES_RAM_ACTION = 'GET_INITIAL_VALUES_RAM_ACTION',
  GET_INITIAL_VALUES_RAM_SUCCESS = 'GET_INITIAL_VALUES_RAM_SUCCESS',
  GET_INITIAL_VALUES_CPU_ACTION = 'GET_INITIAL_VALUES_CPU_ACTION',
  GET_INITIAL_VALUES_CPU_SUCCESS = 'GET_INITIAL_VALUES_CPU_SUCCESS',

  CREATE_NEW_MOTHERBOARD_ACTION = 'CREATE_NEW_MOTHERBOARD_ACTION',
  CREATE_NEW_MOTHERBOARD_SUCCESS = 'CREATE_NEW_MOTHERBOARD_SUCCESS',

  CREATE_NEW_RAM_ACTION = 'CREATE_NEW_RAM_ACTION',
  CREATE_NEW_RAM_SUCCESS = 'CREATE_NEW_RAM_SUCCESS',

  CREATE_NEW_POWERSUPPLY_ACTION = 'CREATE_NEW_POWERSUPPLY_ACTION',
  CREATE_NEW_POWERSUPPLY_SUCCESS = 'CREATE_NEW_POWERSUPPLY_SUCCESS',

  CREATE_NEW_GPU_ACTION = 'CREATE_NEW_GPU_ACTION',
  CREATE_NEW_GPU_SUCCESS = 'CREATE_NEW_GPU_SUCCESS',

  CREATE_NEW_CPU_ACTION = 'CREATE_NEW_CPU_ACTION',
  CREATE_NEW_CPU_SUCCESS = 'CREATE_NEW_CPU_SUCCESS',

  CREATE_NEW_SSD_ACTION = 'CREATE_NEW_SSD_ACTION',
  CREATE_NEW_HDD_ACTION = 'CREATE_NEW_HDD_ACTION',

  UPLOAD_MORE_SOCKET_VALUES = 'UPLOAD_MORE_SOCKET_VALUES',
  UPLOAD_MORE_ENTERED_SOCKET_VALUES = 'UPLOAD_MORE_ENTERED_SOCKET_VALUES',
  UPLOAD_MORE_RAM_VALUES = 'UPLOAD_MORE_RAM_VALUES',
  UPLOAD_MORE_ENTERED_RAM_VALUES = 'UPLOAD_MORE_ENTERED_RAM_VALUES',
  UPLOAD_MORE_RAMTYPE_VALUES = 'UPLOAD_MORE_RAMTYPE_VALUES',
  UPLOAD_MORE_ENTERED_RAMTYPE_VALUES = 'UPLOAD_MORE_ENTERED_RAMTYPE_VALUES',
}
export enum HardwareFormActions {
  UPLOAD_MORE_SOCKET_VALUES = 'UPLOAD_MORE_SOCKET_VALUES',
  UPLOAD_MORE_ENTERED_SOCKET_VALUES = 'UPLOAD_MORE_ENTERED_SOCKET_VALUES',
  UPLOAD_MORE_RAM_VALUES = 'UPLOAD_MORE_RAM_VALUES',
  UPLOAD_MORE_ENTERED_RAM_VALUES = 'UPLOAD_MORE_ENTERED_RAM_VALUES',
  UPLOAD_MORE_RAMTYPE_VALUES = 'UPLOAD_MORE_RAMTYPE_VALUES',
  UPLOAD_MORE_ENTERED_RAMTYPE_VALUES = 'UPLOAD_MORE_ENTERED_RAMTYPE_VALUES',
}

export interface IHardwareFilter {
  offset?: number;
  name?: string;
  typeHardware: HardwareFields;
  typeAction: string;
}
// Loading initial values
export interface IGetInitialValueMotherboardAction {
  type: HardwareFormActionTypes.GET_INITIAL_VALUES_MOTHERBOARD_ACTION;
}
export interface ILoadInitialValuesMotherboardSuccess {
  type: HardwareFormActionTypes.GET_INITIAL_VALUES_MOTHERBOARD_SUCCESS;
  payload: {
    socketList: SelectOption[];
    RAMList: SelectOption[];
  };
}

export interface IGetInitialValueRAMAction {
  type: HardwareFormActionTypes.GET_INITIAL_VALUES_RAM_ACTION;
}
export interface ILoadInitialValuesRAMSuccess {
  type: HardwareFormActionTypes.GET_INITIAL_VALUES_RAM_SUCCESS;
  payload: {
    RAMtypeList: SelectOption[];
  };
}

export interface IGetInitialValueCPUAction {
  type: HardwareFormActionTypes.GET_INITIAL_VALUES_CPU_ACTION;
}
export interface ILoadInitialValuesCPUSuccess {
  type: HardwareFormActionTypes.GET_INITIAL_VALUES_CPU_SUCCESS;
  payload: {
    socketList: SelectOption[];
  };
}

// Create new hardware requests
export interface ICreateRAMAction {
  type: HardwareFormActionTypes.CREATE_NEW_RAM_ACTION;
  payload: {
    ram: RamCreationAttributes;
  };
}
export interface ICreatePowerSupplyAction {
  type: HardwareFormActionTypes.CREATE_NEW_POWERSUPPLY_ACTION;
  payload: {
    powerSupply: PowerSupplyCreationAttributes;
  };
}
export interface ICreateMotherboardAction {
  type: HardwareFormActionTypes.CREATE_NEW_MOTHERBOARD_ACTION;
  payload: {
    motherboard: MotherboardCreationAttributes;
  };
}
export interface ICreateGPUAction {
  type: HardwareFormActionTypes.CREATE_NEW_GPU_ACTION;
  payload: {
    gpu: GpuCreationAttributes;
  };
}
export interface ICreateCPUAction {
  type: HardwareFormActionTypes.CREATE_NEW_CPU_ACTION;
  payload: {
    cpu: CpuCreationAttributes;
  };
}

export interface ICreateSSDAction {
  type: HardwareFormActionTypes.CREATE_NEW_SSD_ACTION;
  payload: {
    ssd: SsdCreationAttributes;
  };
}
export interface ICreateHDDAction {
  type: HardwareFormActionTypes.CREATE_NEW_HDD_ACTION;
  payload: {
    hdd: HddCreationAttributes;
  };
}

export interface ICreateHardwareSuccess {
  type: HardwareFormActionTypes.CREATE_NEW_HARDWARE_SUCCESS;
  payload: {
    hardwareName: string;
  };
}

export interface ILoadHardwareFormError {
  type: HardwareFormActionTypes.GET_INITIAL_VALUES_ERROR;
  payload: {
    errorMessage: string;
    //alertType?: AlertType;
  };
}

// upload more items actions
export interface IUploadMoreItemsAction {
  type: HardwareFormActionTypes.UPLOAD_MORE_VALUES;
  payload: IHardwareFilter;
}
export interface IUploadMoreSocket {
  type: HardwareFormActionTypes.UPLOAD_MORE_SOCKET_VALUES;
  payload: {
    valuesList: SelectOption[];
  };
}
export interface IUploadMoreEnteredSocket {
  type: HardwareFormActionTypes.UPLOAD_MORE_ENTERED_SOCKET_VALUES;
  payload: {
    valuesList: SelectOption[];
  };
}

export interface IUploadMoreRAM {
  type: HardwareFormActionTypes.UPLOAD_MORE_RAM_VALUES;
  payload: {
    valuesList: SelectOption[];
  };
}
export interface IUploadMoreEnteredRAM {
  type: HardwareFormActionTypes.UPLOAD_MORE_ENTERED_RAM_VALUES;
  payload: {
    valuesList: SelectOption[];
  };
}

export interface IUploadMoreRAMtype {
  type: HardwareFormActionTypes.UPLOAD_MORE_RAMTYPE_VALUES;
  payload: {
    valuesList: SelectOption[];
  };
}
export interface IUploadMoreEnteredRamtype {
  type: HardwareFormActionTypes.UPLOAD_MORE_ENTERED_RAMTYPE_VALUES;
  payload: {
    valuesList: SelectOption[];
  };
}

export interface IUpdateStateToInitAction {
  type: HardwareFormActionTypes.UPDATE_STATE_TO_INIT_ACTION;
}

export interface IUpdateStateToInitSuccess {
  type: HardwareFormActionTypes.UPDATE_STATE_TO_INIT_SUCCESS;
  payload: {
    errorMessage: string;
    createdHardwareName: string;
  };
}

export interface HardwareFormState {
  socketList: SelectOption[];
  RAMList: SelectOption[];
  RAMtypeList: SelectOption[];
  errorMessage: string;
  createdHardwareName: string;
  //alertType?: AlertType;
}

export type HardWareFormAction =
  | IGetInitialValueMotherboardAction
  | ILoadInitialValuesMotherboardSuccess
  | IGetInitialValueRAMAction
  | ILoadInitialValuesRAMSuccess
  | IGetInitialValueCPUAction
  | IUploadMoreItemsAction
  | ILoadInitialValuesCPUSuccess
  | ICreateRAMAction
  | ICreatePowerSupplyAction
  | ICreateMotherboardAction
  | ICreateGPUAction
  | ICreateCPUAction
  | ICreateSSDAction
  | ICreateHDDAction
  | ICreateHardwareSuccess
  | ILoadHardwareFormError
  | IUploadMoreItemsAction
  | IUploadMoreSocket
  | IUploadMoreEnteredSocket
  | IUploadMoreRAM
  | IUploadMoreEnteredRAM
  | IUploadMoreRAMtype
  | IUploadMoreEnteredRamtype
  | IUpdateStateToInitAction
  | IUpdateStateToInitSuccess;

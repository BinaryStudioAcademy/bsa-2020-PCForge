import { HardWareFormAction, HardwareFormActionTypes, IHardwareFilter } from './actionsTypes';
import { SelectOption } from 'components/BasicComponents/InputBasedSelect';
import { CpuCreationAttributes } from 'common/models/cpu';
import { GpuCreationAttributes } from 'common/models/gpu';
import { MotherboardCreationAttributes } from 'common/models/motherboard';
import { PowerSupplyCreationAttributes } from 'common/models/powerSupply';
import { RamCreationAttributes } from 'common/models/ram';

// load initial values
export const getAllSelectsInitialValuesMotherboard = (): HardWareFormAction => ({
  type: HardwareFormActionTypes.GET_INITIAL_VALUES_MOTHERBOARD_ACTION,
});

export const loadAllSelectsInitialValuesMotherBoard = (
  socketList: SelectOption[],
  RAMList: SelectOption[]
): HardWareFormAction => ({
  type: HardwareFormActionTypes.GET_INITIAL_VALUES_MOTHERBOARD_SUCCESS,
  payload: {
    socketList,
    RAMList,
  },
});

export const getAllSelectsInitialValuesRAM = (): HardWareFormAction => ({
  type: HardwareFormActionTypes.GET_INITIAL_VALUES_RAM_ACTION,
});

export const loadAllSelectsInitialValuesRAM = (RAMtypeList: SelectOption[]): HardWareFormAction => ({
  type: HardwareFormActionTypes.GET_INITIAL_VALUES_RAM_SUCCESS,
  payload: {
    RAMtypeList,
  },
});

export const getAllSelectsInitialValuesCPU = (): HardWareFormAction => ({
  type: HardwareFormActionTypes.GET_INITIAL_VALUES_CPU_ACTION,
});

export const loadAllSelectsInitialValuesCPU = (socketList: SelectOption[]): HardWareFormAction => ({
  type: HardwareFormActionTypes.GET_INITIAL_VALUES_CPU_SUCCESS,
  payload: {
    socketList,
  },
});

// Create new hardware requests
export const loadCreatedHardware = (hardwareName: string): HardWareFormAction => ({
  type: HardwareFormActionTypes.CREATE_NEW_HARDWARE_SUCCESS,
  payload: {
    hardwareName,
  },
});
export const createRAM = (ram: RamCreationAttributes): HardWareFormAction => ({
  type: HardwareFormActionTypes.CREATE_NEW_RAM_ACTION,
  payload: {
    ram,
  },
});
export const createPowerSupply = (powerSupply: PowerSupplyCreationAttributes): HardWareFormAction => ({
  type: HardwareFormActionTypes.CREATE_NEW_POWERSUPPLY_ACTION,
  payload: {
    powerSupply,
  },
});
export const createMotherboard = (motherboard: MotherboardCreationAttributes): HardWareFormAction => ({
  type: HardwareFormActionTypes.CREATE_NEW_MOTHERBOARD_ACTION,
  payload: {
    motherboard,
  },
});

export const createGPU = (gpu: GpuCreationAttributes): HardWareFormAction => ({
  type: HardwareFormActionTypes.CREATE_NEW_GPU_ACTION,
  payload: {
    gpu,
  },
});

export const createCPU = (cpu: CpuCreationAttributes): HardWareFormAction => ({
  type: HardwareFormActionTypes.CREATE_NEW_CPU_ACTION,
  payload: {
    cpu,
  },
});

//
export const loadError = (error: string): HardWareFormAction => ({
  type: HardwareFormActionTypes.GET_INITIAL_VALUES_ERROR,
  payload: {
    error,
  },
});

export const uploadMoreItems = (filter: IHardwareFilter): HardWareFormAction => ({
  type: HardwareFormActionTypes.UPLOAD_MORE_VALUES,
  payload: filter,
});

import { AnyAction } from 'redux';
import {
  ADD_CPU_TO_SETUP,
  ADD_GPU_TO_SETUP,
  ADD_MOTHERBOARD_TO_SETUP,
  ADD_POWERSUPPLY_TO_SETUP,
  ADD_RAM_TO_SETUP,
  REMOVE_CPU_FROM_SETUP,
  REMOVE_GPU_FROM_SETUP,
  REMOVE_MOTHERBOARD_FROM_SETUP,
  REMOVE_POWERSUPPLY_FROM_SETUP,
  REMOVE_RAM_FROM_SETUP,
  RESET_SETUP,
} from './actionTypes';

export const addCpuToSetupAction = (id: number): AnyAction => ({
  type: ADD_CPU_TO_SETUP,
  payload: id,
});

export const addGpuToSetupAction = (id: number): AnyAction => ({
  type: ADD_GPU_TO_SETUP,
  payload: id,
});

export const addRamToSetupAction = (id: number): AnyAction => ({
  type: ADD_RAM_TO_SETUP,
  payload: id,
});

export const addMotherboardToSetupAction = (id: number): AnyAction => ({
  type: ADD_MOTHERBOARD_TO_SETUP,
  payload: id,
});

export const addPowersupplyToSetupAction = (id: number): AnyAction => ({
  type: ADD_POWERSUPPLY_TO_SETUP,
  payload: id,
});

export const removeCpuFromSetupAction = (): AnyAction => ({
  type: REMOVE_CPU_FROM_SETUP,
});

export const removeGpuFromSetupAction = (): AnyAction => ({
  type: REMOVE_GPU_FROM_SETUP,
});

export const removeRamFromSetupAction = (): AnyAction => ({
  type: REMOVE_RAM_FROM_SETUP,
});

export const removeMotherboardFromSetupAction = (): AnyAction => ({
  type: REMOVE_MOTHERBOARD_FROM_SETUP,
});

export const removePowersupplyFromSetupAction = (): AnyAction => ({
  type: REMOVE_POWERSUPPLY_FROM_SETUP,
});

export const resetSetupAction = (): AnyAction => ({
  type: RESET_SETUP,
});

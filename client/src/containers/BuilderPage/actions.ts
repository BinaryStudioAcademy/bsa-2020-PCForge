import { AnyAction } from 'redux';
import {
  ADD_COMPONENT_TO_SETUP,
  BUILDER_INIT_SETUP,
  REMOVE_COMPONENT_FROM_SETUP,
  BUILDER_RESET_SETUP,
  SAVE_SETUP_REQUEST,
  SET_RAM_CAPACITY,
} from './actionTypes';
import { SetupItem } from 'common/models/setup';
import { GroupName } from './config';

export const addComponentToSetupAction = (props: { id: number; group: GroupName }): AnyAction => ({
  type: ADD_COMPONENT_TO_SETUP,
  payload: props,
});

export const removeComponentFromSetupAction = (props: { group: GroupName }): AnyAction => ({
  type: REMOVE_COMPONENT_FROM_SETUP,
  payload: props,
});

export const initSetupAction = (): AnyAction => ({
  type: BUILDER_INIT_SETUP,
});

export const resetSetupAction = (): AnyAction => ({
  type: BUILDER_RESET_SETUP,
});

export const saveSetupRequest = (data: SetupItem, image: Blob): AnyAction => ({
  type: SAVE_SETUP_REQUEST,
  payload: {
    data,
    image,
  },
});

export const setRamCapacity = (value: number) => ({
  type: SET_RAM_CAPACITY,
  payload: {
    value,
  },
});

import { AnyAction } from 'redux';
import {
  ADD_COMPONENT_TO_SETUP,
  BUILDER_INIT_SETUP,
  REMOVE_COMPONENT_FROM_SETUP,
  BUILDER_RESET_SETUP,
  SAVE_SETUP_REQUEST,
  FETCH_COMPONENT_SUCCESS,
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

export const saveSetupRequest = (data: SetupItem, image?: Blob): AnyAction => ({
  type: SAVE_SETUP_REQUEST,
  payload: {
    data,
    image,
  },
});

export const setCounter = (group: string, component: number): AnyAction => ({
  type: FETCH_COMPONENT_SUCCESS,
  payload: {
    group,
    component,
  },
});

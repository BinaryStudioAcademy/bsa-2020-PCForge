import { AnyAction } from 'redux';
import { ADD_COMPONENT_TO_SETUP, INIT_SETUP, REMOVE_COMPONENT_FROM_SETUP, RESET_SETUP } from './actionTypes';
import { Group } from './config';

export const addComponentToSetupAction = (props: { id: number; group: Group }): AnyAction => ({
  type: ADD_COMPONENT_TO_SETUP,
  payload: props,
});

export const removeComponentFromSetupAction = (props: { group: Group }): AnyAction => ({
  type: REMOVE_COMPONENT_FROM_SETUP,
  payload: props,
});

export const initSetupAction = (): AnyAction => ({
  type: INIT_SETUP,
});

export const resetSetupAction = (): AnyAction => ({
  type: RESET_SETUP,
});

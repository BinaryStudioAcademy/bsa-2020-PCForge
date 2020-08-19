import { AnyAction } from 'redux';
import {
  ADD_COMPONENT_TO_SETUP,
  BUILDER_INIT_SETUP,
  REMOVE_COMPONENT_FROM_SETUP,
  BUILDER_RESET_SETUP,
} from './actionTypes';
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

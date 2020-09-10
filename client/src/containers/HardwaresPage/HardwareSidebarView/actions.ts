import {
  HardwareActionTypes,
  GET_HARDWARE_COMMENTS,
  CREATE_HARDWARE_COMMENT,
  DELETE_HARDWARE_COMMENT,
  GET_HARDWARE_RATE,
  SET_HARDWARE_RATE,
  HARDWARE_WIPE_SNACKBAR_DATA,
  hardwareTypes,
} from './actionTypes';

export const getHardwareComments = (payload: {
  id: number;
  count: number;
  from: number;
  type: hardwareTypes;
}): HardwareActionTypes => ({
  type: GET_HARDWARE_COMMENTS,
  payload,
});

export const createHardwareComment = (payload: {
  id: number;
  value: string;
  type: hardwareTypes;
}): HardwareActionTypes => ({
  type: CREATE_HARDWARE_COMMENT,
  payload,
});

export const deleteHardwareComment = (payload: { id: number; idHardware: number }): HardwareActionTypes => ({
  type: DELETE_HARDWARE_COMMENT,
  payload,
});

export const getHardwareRate = (payload: { id: number; type: hardwareTypes }): HardwareActionTypes => ({
  type: GET_HARDWARE_RATE,
  payload,
});

export const setHardwareRate = (payload: { id: number; value: number; type: hardwareTypes }): HardwareActionTypes => ({
  type: SET_HARDWARE_RATE,
  payload,
});

export const wipeSnackbarData = (): HardwareActionTypes => ({
  type: HARDWARE_WIPE_SNACKBAR_DATA,
});

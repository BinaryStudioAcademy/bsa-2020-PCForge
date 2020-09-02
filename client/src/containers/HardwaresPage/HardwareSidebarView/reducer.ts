import { IHardwareState } from 'containers/HardwaresPage/HardwareSidebarView/interfaces';
import {
  HardwareActionTypes,
  GET_HARDWARE_COMMENTS_SUCCESS,
  GET_HARDWARE_RATE_SUCCESS,
  GET_HARDWARE_RATE_FAILURE,
  GET_HARDWARE_COMMENTS_FAILURE,
  HARDWARE_WIPE_SNACKBAR_DATA,
  SET_HARDWARE_RATE_FAILURE,
  CREATE_HARDWARE_COMMENT_FAILURE,
} from './actionTypes';
import { AlertType } from 'components/BasicComponents/Alert';

const initialState: IHardwareState = {
  comments: [],
  rate: 0,
  commentsPerPage: 20,
  commentsCountTotal: 0,
  hasErrorDuringHardwareFetch: false,
};

export function HardwareReducer(state: IHardwareState = initialState, action: HardwareActionTypes): IHardwareState {
  switch (action.type) {
    case GET_HARDWARE_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload.data,
        commentsCountTotal: action.payload.meta.countAfterFiltering,
      };
    case GET_HARDWARE_RATE_SUCCESS: {
      return {
        ...state,
        rate: action.payload.average,
      };
    }
    case HARDWARE_WIPE_SNACKBAR_DATA: {
      return {
        ...state,
        snackbarMessage: undefined,
        snackbarMessageType: undefined,
      };
    }
    case GET_HARDWARE_RATE_FAILURE:
    case GET_HARDWARE_COMMENTS_FAILURE:
    case SET_HARDWARE_RATE_FAILURE:
    case CREATE_HARDWARE_COMMENT_FAILURE: {
      return {
        ...state,
        snackbarMessage: action.payload.message,
        snackbarMessageType: AlertType.error,
      };
    }
    default:
      return state;
  }
}

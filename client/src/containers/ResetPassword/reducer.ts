import { ResetPasswordActions, ResetPasswordActionTypes, ResetPasswordState } from './actionTypes';

const initialState: ResetPasswordState = {
  error: null,
  loading: false,
  success: false,
};

export function ResetPasswordReducer(state = initialState, action: ResetPasswordActions): ResetPasswordState {
  switch (action.type) {
    case ResetPasswordActionTypes.FETCH_RESET_PASSWORD_REQUEST_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case ResetPasswordActionTypes.FETCH_RESET_PASSWORD_REQUEST_SUCCESS: {
      return {
        ...state,
        success: true,
        loading: false,
        error: null,
      };
    }

    case ResetPasswordActionTypes.FETCH_RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case ResetPasswordActionTypes.FETCH_RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        success: true,
        loading: false,
        error: null,
      };
    }

    case ResetPasswordActionTypes.ERROR: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        success: false,
      };
    }

    default:
      return state;
  }
}

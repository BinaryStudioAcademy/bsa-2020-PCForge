import { ResetPasswordActions, ResetPasswordActionTypes, ResetPasswordState } from './actionTypes';

const initialState: ResetPasswordState = {
  email: '',
  error: '',
};

export function ResetPasswordReducer(state = initialState, action: ResetPasswordActions): ResetPasswordState {
  switch (action.type) {
    case ResetPasswordActionTypes.FETCH_RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        email: action.payload.email,
      };
    }

    case ResetPasswordActionTypes.FETCH_RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
      };
    }

    case ResetPasswordActionTypes.ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }

    default:
      return state;
  }
}

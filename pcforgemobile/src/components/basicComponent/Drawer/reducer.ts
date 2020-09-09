import {DrawerState} from './interfaces';
import {CLOSE_DRAWER, OPEN_DRAWER, drawerActions} from './actionTypes';

const initialState: DrawerState = {
  open: false,
};

export function DrawerReducer(
  state: DrawerState = initialState,
  action: drawerActions,
): DrawerState {
  switch (action.type) {
    case CLOSE_DRAWER:
      return {
        ...state,
        open: false,
      };
    case OPEN_DRAWER:
      return {
        ...state,
        open: true,
      };
    default:
      return state;
  }
}

import {drawerActions} from './actionTypes';

export interface DrawerState {
  open: boolean;
}

export interface DrawerProps {
  state: DrawerState;
  openDrawerAction: () => drawerActions;
  closeDrawerAction: () => drawerActions;
  children: JSX.Element;
}

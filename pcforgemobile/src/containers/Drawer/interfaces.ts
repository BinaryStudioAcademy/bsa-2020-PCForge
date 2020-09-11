import {drawerActions} from './actionTypes';
import {User} from 'common/models/user.model';

export interface DrawerState {
  open: boolean;
}

export interface DrawerProps {
  state: DrawerState;
  user: User | null;
  openDrawerAction: () => drawerActions;
  closeDrawerAction: () => drawerActions;
  children: JSX.Element;
  navigate: (routeName: string) => void;
  signOut: () => void;
}

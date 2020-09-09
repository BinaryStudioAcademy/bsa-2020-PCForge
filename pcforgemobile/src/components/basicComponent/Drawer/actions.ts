import {OPEN_DRAWER, CLOSE_DRAWER, drawerActions} from './actionTypes';

export const openDrawerAction = (): drawerActions => ({
  type: OPEN_DRAWER,
});

export const closeDrawerAction = (): drawerActions => ({
  type: CLOSE_DRAWER,
});

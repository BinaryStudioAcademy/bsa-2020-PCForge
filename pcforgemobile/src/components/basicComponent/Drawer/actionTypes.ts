export const OPEN_DRAWER = 'OPEN_DRAWER';
export const CLOSE_DRAWER = 'CLOSE_DRAWER';

export type openDrawerAction = {
  type: typeof OPEN_DRAWER;
};

export type closeDrawerAction = {
  type: typeof CLOSE_DRAWER;
};

export type drawerActions = openDrawerAction | closeDrawerAction;

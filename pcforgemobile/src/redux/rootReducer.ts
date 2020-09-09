import {combineReducers} from 'redux';
import {AuthReducer} from 'containers/Auth/reducer';
import {HomeReducer} from 'containers/Home/reducer';
import {DrawerReducer} from 'containers/Drawer/reducer';

const RootReducer = combineReducers({
  authReducer: AuthReducer,
  homeReducer: HomeReducer,
  DrawerReducer: DrawerReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;

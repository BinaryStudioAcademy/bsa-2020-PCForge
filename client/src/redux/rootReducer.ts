import { combineReducers } from 'redux';
import { AuthReducer } from 'containers/Auth/reducer';
import UserReducer from 'containers/UserPage/logic/reducer';

const RootReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;

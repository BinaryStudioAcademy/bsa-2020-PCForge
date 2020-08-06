import { combineReducers } from 'redux';
import { AuthReducer } from "containers/Auth/reducer";

const RootReducer = combineReducers({
  auth: AuthReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>

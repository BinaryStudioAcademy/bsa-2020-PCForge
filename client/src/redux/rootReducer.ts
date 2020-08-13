import { combineReducers } from 'redux';
import { AuthReducer } from 'containers/Auth/reducer';
import builderReducer from 'containers/BuilderPage/reducer';

const RootReducer = combineReducers({
  auth: AuthReducer,
  setup: builderReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;

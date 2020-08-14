import { combineReducers } from 'redux';
import { AuthReducer } from 'containers/Auth/reducer';
import UserReducer from 'containers/UserPage/logic/reducer';
import builderReducer from 'containers/BuilderPage/reducer';
import { QuickMatcherReducer } from 'containers/QuickMatcher/reducer';

const RootReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
  setup: builderReducer,
  quickMatcher: QuickMatcherReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;

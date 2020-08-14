import { combineReducers } from 'redux';
import { AuthReducer } from 'containers/Auth/reducer';
import UserReducer from 'containers/UserPage/logic/reducer';
import builderReducer from 'containers/BuilderPage/reducer';
import { MatcherReducer } from 'containers/GameMatcher/reducer';

const RootReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
  matcher: MatcherReducer,
  setup: builderReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;

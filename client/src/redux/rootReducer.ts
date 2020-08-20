import { combineReducers } from 'redux';
import { AuthReducer } from 'containers/Auth/reducer';
import NotificationReducer from 'containers/Notification/logic/reducer';
import UserReducer from 'containers/UserPage/logic/reducer';
import builderReducer from 'containers/BuilderPage/reducer';
import { MatcherReducer } from 'containers/GameMatcher/reducer';
import { QuickMatcherReducer } from 'containers/QuickMatcher/reducer';
import { SetupsReducer } from 'containers/SetupsPage/reducer';
import { SetupReducer } from 'containers/SetupPage/reducer';
import { SetupChartReducer } from 'containers/Chart/reducer';

const RootReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
  matcher: MatcherReducer,
  setup: builderReducer,
  quickMatcher: QuickMatcherReducer,
  notification: NotificationReducer,
  setups: SetupsReducer,
  setupPage: SetupReducer,
  setupChart: SetupChartReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;

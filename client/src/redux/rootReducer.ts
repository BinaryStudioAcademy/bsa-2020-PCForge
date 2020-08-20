import { combineReducers } from 'redux';
import { AuthReducer } from 'containers/Auth/reducer';
import NotificationReducer from 'containers/Notification/logic/reducer';
import UserReducer from 'containers/UserPage/logic/reducer';
import builderReducer from 'containers/BuilderPage/reducer';
import { QuickMatcherReducer } from 'containers/QuickMatcher/reducer';
import { SetupsReducer } from 'containers/SetupsPage/reducer';

const RootReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
  setup: builderReducer,
  quickMatcher: QuickMatcherReducer,
  notification: NotificationReducer,
  setups: SetupsReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;

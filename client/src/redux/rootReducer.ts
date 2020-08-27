import { combineReducers } from 'redux';
import { AuthReducer } from 'containers/Auth/reducer';
import NotificationReducer from 'containers/Notification/logic/reducer';
import HomePageReducer from 'containers/Home/logic/reducer';
import UserReducer from 'containers/UserPage/logic/reducer';
import builderReducer from 'containers/BuilderPage/reducer';
import { MatcherReducer } from 'containers/GameMatcher/reducer';
import { QuickMatcherReducer } from 'containers/QuickMatcher/reducer';
import UserRequestsReducer from 'containers/AdminToolsPage/reducer';
import { SetupsReducer } from 'containers/SetupsPage/reducer';
import { SetupReducer } from 'containers/SetupPage/reducer';
import { SetupChartReducer } from 'containers/Chart/reducer';
import { GameFormReducer } from 'containers/AddItemPages/AddGameForm/reducer';
import { HardwareFormReducer } from 'containers/AddItemPages/AddHardwareForm/reducer';
import AddRequestReducer from 'containers/AddUserRequest/reducer';

const RootReducer = combineReducers({
  auth: AuthReducer,
  homePage: HomePageReducer,
  user: UserReducer,
  matcher: MatcherReducer,
  setup: builderReducer,
  quickMatcher: QuickMatcherReducer,
  notification: NotificationReducer,
  userRequests: UserRequestsReducer,
  setups: SetupsReducer,
  setupPage: SetupReducer,
  setupChart: SetupChartReducer,
  gameForm: GameFormReducer,
  hardwareForm: HardwareFormReducer,
  addRequest: AddRequestReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;

import { combineReducers } from 'redux';
import { AuthReducer } from 'containers/Auth/reducer';
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
import { EmailVerifyReducer } from 'containers/EmailVerificationPage/reducer';
import { ResetPasswordReducer } from 'containers/ResetPassword/reducer';
import NewsReducer from 'containers/NewsPage/reducer';
import LikeCommentReducer from 'components/Comments/Comment/reducer';
import { NotificationsReducer } from 'containers/Notifications/redux/reducer';
import AddRequestReducer from 'containers/AddUserRequest/reducer';
import { HardwareReducer } from 'containers/HardwaresPage/HardwareSidebarView/reducer';
import { HardwaresReducer } from 'containers/HardwaresPage/reducer';
import { TopGamesReducer } from 'containers/TopGames/redux/reducer';
import { AlertsReducer } from 'containers/Alerts/redux/reducer';
import ToastNotificationsReducer from 'containers/ToastNotifications/logic/reducer';

const RootReducer = combineReducers({
  auth: AuthReducer,
  emailVerification: EmailVerifyReducer,
  gameForm: GameFormReducer,
  hardware: HardwareReducer,
  hardwares: HardwaresReducer,
  hardwareForm: HardwareFormReducer,
  homePage: HomePageReducer,
  matcher: MatcherReducer,
  notification: ToastNotificationsReducer,
  quickMatcher: QuickMatcherReducer,
  resetPassword: ResetPasswordReducer,
  setup: builderReducer,
  setups: SetupsReducer,
  setupPage: SetupReducer,
  setupChart: SetupChartReducer,
  user: UserReducer,
  userRequests: UserRequestsReducer,
  news: NewsReducer,
  likeComment: LikeCommentReducer,
  topGames: TopGamesReducer,
  notifications: NotificationsReducer,
  alerts: AlertsReducer,
  addRequest: AddRequestReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;

import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { Routes } from 'common/enums';
import UserPage from 'containers/UserPage';
import Chart from 'containers/Chart';
import GameMatcherPage from 'containers/GameMatcher';
import Login from 'containers/Auth';
import NotFound from 'containers/NotFound';
import ViewSetupPage from 'containers/SetupPage';
import ViewSetupPageWithCommentScroll from 'containers/SetupPage/withCommentScroll';
import Home from 'containers/Home';
import RootComponent from 'containers/Root';
import SetupPage from 'containers/SetupsPage';
import BuilderPage from 'containers/BuilderPage';
import AdminToolsPage from 'containers/AdminToolsPage';
import AddItemPages from 'containers/AddItemPages';
import GamePage from 'containers/GamePage';
import EmailVerificationPage from './EmailVerificationPage';
import ResetPasswordRequest from './ResetPassword/request';
import ResetPasswordCallback from './ResetPassword/callback';
import NewsPage from 'containers/NewsPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import ToastNotifications from 'containers/ToastNotifications';
import HardwaresPage from './HardwaresPage';

class App extends Component {
  render(): JSX.Element {
    return (
      <>
        <ToastNotifications />
        <RootComponent>
          <Switch>
            <PrivateRoute exact path={Routes.MATCHER} component={GameMatcherPage} />
            <PrivateRoute exact path={Routes.BUILDER} component={BuilderPage} />
            <PrivateRoute exact path={Routes.CHART} component={Chart} />
            <PublicRoute exact path={Routes.LOGIN} component={Login} />
            <PrivateRoute exact path={Routes.USER} component={UserPage} />
            <PrivateRoute exact path={Routes.SETUP} component={ViewSetupPage} />
            <PrivateRoute
              exact
              path={`${Routes.SETUP}/comment/:commentId`}
              component={ViewSetupPageWithCommentScroll}
            />
            <PrivateRoute exact path={Routes.DEFAULT} component={Home} />
            <PrivateRoute exact path={Routes.SETUPS} component={SetupPage} />
            <PrivateRoute exact path={Routes.ADMINTOOLS} component={AdminToolsPage} />
            <PrivateRoute exact path={`${Routes.ADDITEM}/:item`} component={AddItemPages} />
            <PrivateRoute exact path={Routes.GAME} component={GamePage} />
            <PrivateRoute exact path={Routes.EMAIL_VERIFICATION} component={EmailVerificationPage} />
            <PrivateRoute exact path={Routes.RESET_PASSWORD_REQUEST} component={ResetPasswordRequest} />
            <PrivateRoute exact path={Routes.RESET_PASSWORD} component={ResetPasswordCallback} />
            <PrivateRoute exact path={Routes.NEWS} component={NewsPage} />
            <PrivateRoute exact path={Routes.HARDWARES} component={HardwaresPage} />
            <PrivateRoute path="*" exact={true} component={NotFound} />
          </Switch>
        </RootComponent>
      </>
    );
  }
}

export default App;

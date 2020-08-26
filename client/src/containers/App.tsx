import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Routes } from 'common/enums';
import UserPage from 'containers/UserPage';
import Chart from 'containers/Chart';
import GameMatcherPage from 'containers/GameMatcher';
import Login from 'containers/Auth';
import NotFound from 'containers/NotFound';
import ViewSetupPage from 'containers/SetupPage';
import Home from 'containers/Home';
import RootComponent from 'containers/Root';
import SetupPage from 'containers/SetupsPage';
import BuilderPage from 'containers/BuilderPage';
import AdminToolsPage from 'containers/AdminToolsPage';
import AddItemPages from 'containers/AddItemPages';
import Notification from 'containers/Notification';
import GamePage from 'containers/GamePage';
import * as Sentry from '@sentry/react';
import ResetPasswordRequest from './ResetPassword/request';
import ResetPasswordCallback from './ResetPassword/callback';

const SentryRoute = Sentry.withSentryRouting(Route);

class App extends Component {
  render(): JSX.Element {
    return (
      <RootComponent>
        <Switch>
          <SentryRoute exact path={Routes.MATCHER} component={GameMatcherPage} />
          <SentryRoute exact path={Routes.BUILDER} component={BuilderPage} />
          <SentryRoute exact path={Routes.CHART} component={Chart} />
          <SentryRoute exact path={Routes.LOGIN} component={Login} />
          <SentryRoute exact path={Routes.USER} component={UserPage} />
          <SentryRoute exact path={Routes.SETUP} component={ViewSetupPage} />
          <SentryRoute exact path={Routes.DEFAULT} component={Home} />
          <SentryRoute exact path={Routes.SETUPS} component={SetupPage} />
          <SentryRoute exact path={Routes.ADMINTOOLS} component={AdminToolsPage} />
          <SentryRoute exact path={`${Routes.ADDITEM}/:item`} component={AddItemPages} />
          <SentryRoute exact path={Routes.GAME} component={GamePage} />
          <SentryRoute exact path={Routes.RESET_PASSWORD_REQUEST} component={ResetPasswordRequest} />
          <SentryRoute exact path={Routes.RESET_PASSWORD} component={ResetPasswordCallback} />
          <SentryRoute path="*" exact={true} component={NotFound} />
        </Switch>
        <Notification />
      </RootComponent>
    );
  }
}

export default App;

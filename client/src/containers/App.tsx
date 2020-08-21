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
import QuickMatcher from 'containers/QuickMatcher';
import AdminToolsPage from 'containers/AdminToolsPage';
import AddItemPages from 'containers/AddItemPages';
import Notification from 'containers/Notification';
import GamePage from 'containers/GamePage';

export default class App extends Component {
  render(): JSX.Element {
    return (
      <RootComponent>
        <Switch>
          <Route exact path={Routes.MATCHER} component={GameMatcherPage} />
          <Route exact path={Routes.BUILDER} component={BuilderPage} />
          <Route exact path={Routes.CHART} component={Chart} />
          <Route exact path={Routes.LOGIN} component={Login} />
          <Route exact path={Routes.USER} component={UserPage} />
          <Route exact path={Routes.SETUP} component={ViewSetupPage} />
          <Route exact path={Routes.DEFAULT} component={Home} />
          <Route exact path={Routes.SETUPS} component={SetupPage} />
          <Route exact path={Routes.ADMINTOOLS} component={AdminToolsPage} />
          <Route exact path={`${Routes.ADDITEM}/:item`} component={AddItemPages} />
          <Route exact path={Routes.GAME} component={GamePage} />
          <Route exact path={'/builder/quick-matcher'} component={QuickMatcher} />
          <Route path="*" exact={true} component={NotFound} />
        </Switch>
        <Notification />
      </RootComponent>
    );
  }
}

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Routes } from 'common/enums';
import UserPage from 'containers/UserPage';
import Chart from 'containers/Chart';
import GameMatcherPage from './GameMatcher';
import Login from 'containers/Auth';
import NotFound from 'containers/NotFound';
import ViewSetupPage from './SetupPage';
import BuilderPage from './BuilderPage';

export default class App extends Component {
  render(): JSX.Element {
    return (
      <Switch>
        <Route exact path={Routes.MATCHER} component={GameMatcherPage} />
        <Route exact path={Routes.BUILDER} component={BuilderPage} />
        <Route exact path={Routes.CHART} component={Chart} />
        <Route exact path={Routes.LOGIN} component={Login} />
        <Route exact path={Routes.USER} component={UserPage} />
        <Route exact path={Routes.SETUP} component={ViewSetupPage} />
        <Route exact path={Routes.DEFAULT} component={() => <div></div>} />
        <Route path="*" exact={true} component={NotFound} />
      </Switch>
    );
  }
}

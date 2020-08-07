import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Routes } from 'common/enums';
import Chart from 'containers/Chart';
import GameMatcherPage from './GameMatcher';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={Routes.MATCHER} component={GameMatcherPage} />
        <Route exact path={Routes.CHART} component={Chart} />
        <Route exact path={Routes.DEFAULT} component={() => <div></div>} />
      </Switch>
    );
  }
}

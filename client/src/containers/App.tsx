import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Routes } from 'common/enums';
import GameMatcherResult from 'containers/GameMatcherResult';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <GameMatcherResult />
        <Route exact path={Routes.DEFAULT} component={() => <div></div>} />
      </Switch>
    );
  }
}

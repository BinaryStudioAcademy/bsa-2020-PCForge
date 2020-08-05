import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Routes } from 'common/enums';
import GameMatcherPage from './game-matcher-page';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={Routes.DEFAULT} component={() => <div />} />
      </Switch>
    );
  }
}

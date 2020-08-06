import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Routes } from 'common/enums';
import Login from 'containers/Auth';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={Routes.DEFAULT} component={() => <div></div>} />
        <Route exact path={Routes.LOGIN} component={Login} />
      </Switch>
    );
  }
}

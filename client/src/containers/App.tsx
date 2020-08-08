import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Routes } from 'common/enums';

import Login from 'containers/Auth';
import NotFound from 'containers/NotFound';

export default class App extends Component {
  render(): JSX.Element {
    return (
      <Switch>
        <Route exact path={Routes.DEFAULT} component={() => <div />} />
        <Route exact path={Routes.LOGIN} component={Login} />
        <Route path="*" exact={true} component={NotFound} />
      </Switch>
    );
  }
}

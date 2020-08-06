import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Routes } from 'common/enums';
import UserPage from 'containers/UserPage'

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={Routes.DEFAULT} component={() => <div><UserPage></UserPage></div>} />
      </Switch>
    );
  }
}

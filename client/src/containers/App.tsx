import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Routes } from 'common/enums';
import Login from 'containers/Auth';
import Title from 'components/Title';

export default class App extends Component {
  render(): JSX.Element {
    return (
      <Switch>
        <Route
          exact
          path={Routes.DEFAULT}
          component={() => (
            <div>
              <Title title="Builder" subtitle={'Create your personal rig with ease'} />
            </div>
          )}
        />
        <Route exact path={Routes.LOGIN} component={Login} />
      </Switch>
    );
  }
}

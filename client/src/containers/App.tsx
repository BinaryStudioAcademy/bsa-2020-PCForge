import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Routes } from 'common/enums';
import UserPage from 'containers/UserPage';
import Chart from 'containers/Chart';
import GameMatcherPage from './GameMatcher';
import Login from 'containers/Auth';
import NotFound from 'containers/NotFound';
import ViewSetupPage from './SetupPage';
import Home from './Home';
import RootComponent from './Root';
import SetupPage from './SetupsPage';
import BuilderPage from './BuilderPage';
import AdminToolsPage from './AdminToolsPage';
//import AddHardwarePage from 'containers/AddHardwarePage';
import AddItemPages from 'containers/AddItemPages';
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
          {/* <Route exact path={Routes.ADDHARDWARE} component={AddHardwarePage} /> */}
          <Route exact path={`${Routes.ADDITEM}/:item`} component={AddItemPages} />
          <Route path="*" exact={true} component={NotFound} />
        </Switch>
      </RootComponent>
    );
  }
}

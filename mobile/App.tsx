import React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import { Router, Route } from './routing';
import Auth from './src/containers/Auth';
import { Home } from './src/containers/Home';

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router>
          <Route name="Login" component={Auth} />
          <Route name="Home" component={Home} />
        </Router>
      </NavigationContainer>
    </Provider>
  );
}

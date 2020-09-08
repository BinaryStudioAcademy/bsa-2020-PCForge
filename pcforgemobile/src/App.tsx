import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from 'redux/store';
import { Router, Route } from 'common/configs/routing';
import Auth from 'containers/Auth';
import Home from 'containers/Home';
import { StyleProvider } from 'native-base';
import getTheme from 'native-base-theme/components';
import material from 'native-base-theme/variables/material';
import AppTitle from 'components/basicComponent/Title';
import GameMatcher from './containers/GameMatcher';
import MyAutocomplete from './components/Autocomplete';

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      {/** Any change to theme won't be applied untill app reload */}
      <StyleProvider style={getTheme(material as any)}>
        <NavigationContainer>
          <Router headerMode='none'>
            <Route name="Login" component={Auth} />
            <Route name="Home" component={Home} options={{   }}/>
            <Route name="Matcher" component={GameMatcher}/>
            <Route name="Autocomplete" component={MyAutocomplete} options={{  }}/>
          </Router>
        </NavigationContainer>
      </StyleProvider>
    </Provider>
  );
}

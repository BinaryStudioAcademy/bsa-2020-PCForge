import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer, NavigationContainerRef} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from 'redux/store';
import {Router, Route, routes} from './routing';
import {StyleProvider} from 'native-base';
import getTheme from 'native-base-theme/components';
import material from 'native-base-theme/variables/material';
import Drawer from 'containers/Drawer';

export default class App extends React.PureComponent {
  constructor(props: any) {
    super(props);
    this.navigate = this.navigate.bind(this);
  }
  public navigatorRef: NavigationContainerRef | null = null;
  public navigate(routeName: string){
    this.navigatorRef?.navigate(routeName);
  }

  public render(): JSX.Element {
    return (
      <Provider store={store}>
        {/** Any change to theme won't be applied untill app reload */}
        <Drawer navigate={this.navigate}>
          <StyleProvider style={getTheme(material as any)}>
            <NavigationContainer ref={(ref) => {this.navigatorRef = ref; console.log(ref, this.navigatorRef, 'ref')}}>
                <Router>
                  {routes.map(routeProps => <Route {...routeProps} key={routeProps.name} />)}
                </Router>
            </NavigationContainer>
          </StyleProvider>
        </Drawer>
      </Provider>
    );
  }
}

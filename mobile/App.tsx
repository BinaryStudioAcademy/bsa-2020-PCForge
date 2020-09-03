import React from 'react';
import 'react-native-gesture-handler';
import ContactList from './src/components/contact-list';
import ContactView from './src/components/contact-view';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import configureStore from './src/store';
import {EXAMPLE} from '@env';

console.log(EXAMPLE);

const Stack = createStackNavigator();
const store = configureStore();

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ContactList} />
          <Stack.Screen name="Contact" component={ContactView} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

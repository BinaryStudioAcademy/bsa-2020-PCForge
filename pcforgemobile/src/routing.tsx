import React from 'react';
import Home from 'containers/Home';
import AppTitle from 'components/basicComponent/Title';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {RouteConfig, StackNavigationState} from '@react-navigation/native';
import {StackNavigationEventMap} from '@react-navigation/stack/lib/typescript/src/types';
import Auth from 'containers/Auth';
import ChartPage from 'containers/Chart';
import GameMatcher from 'containers/GameMatcher';
import AppAutocomplete from 'components/Autocomplete';

const Stack = createStackNavigator();

export const Route = Stack.Screen;
export const Router = Stack.Navigator;

export interface RouterItemProps<P = {}> {
  navigation: {
    navigate(routeName: string, data?: any): void;
    push(routeName: string, data?: any): void;
    goBack(): void;
  };
  route: {
    params: P;
  };
}

export type RouteProps = RouteConfig<
  Record<string, object | undefined>,
  string,
  StackNavigationState,
  StackNavigationOptions,
  StackNavigationEventMap
>;
export type CustomRouteProps = {
  initialParams: {
    type: 'public' | 'private';
    iconProps: null | {
      name?: string;
      type?:
        | 'AntDesign'
        | 'Entypo'
        | 'EvilIcons'
        | 'Feather'
        | 'FontAwesome'
        | 'FontAwesome5'
        | 'Foundation'
        | 'Ionicons'
        | 'MaterialCommunityIcons'
        | 'MaterialIcons'
        | 'Octicons'
        | 'SimpleLineIcons'
        | 'Zocial';
      style?: any;
      onPress?: (e?: any) => any;
      active?: boolean;
      ios?: string;
      android?: string;
      color?: string;
      fontSize?: number;
    };
    showInDrawer: boolean;
  };
} & RouteProps;

export const routes: Readonly<CustomRouteProps>[] = [
  {
    name: 'Login',
    initialParams: {
      type: 'public',
      iconProps: null,
      showInDrawer: false,
    },
    component: Auth,
    options: {header: (props) => <AppTitle {...props} noActions={true} />},
  },
  {
    name: 'Home',
    component: Home,
    initialParams: {
      type: 'private',
      iconProps: {
        type: 'MaterialIcons',
        name: 'home',
      },
      showInDrawer: true,
    },
    options: {header: (props) => <AppTitle {...props} />},
  },
  {
    name: 'Matcher',
    component: GameMatcher,
    initialParams: {
      type: 'private',
      iconProps: {
        type: 'MaterialIcons',
        name: 'videogame-asset',
      },
      showInDrawer: true,
    },
    options: {header: (props) => <AppTitle {...props} />},
  },
  {
    name: 'Autocomplete',
    component: AppAutocomplete,
    initialParams: {
      type: 'private',
      iconProps: null,
      showInDrawer: false,
    },
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Chart',
    component: ChartPage,
    initialParams: {
      type: 'private',
      iconProps: {
        type: 'MaterialIcons',
        name: 'pie-chart',
      },
      showInDrawer: false,
    },
    options: {header: (props) => <AppTitle {...props} />},
  },
];

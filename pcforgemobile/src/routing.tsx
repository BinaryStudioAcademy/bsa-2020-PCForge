import React from 'react';
import Home from "containers/Home";
import AppTitle from 'components/basicComponent/Title';
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { RouteConfig, StackNavigationState } from "@react-navigation/native";
import { StackNavigationEventMap } from "@react-navigation/stack/lib/typescript/src/types";
import Auth from './containers/Auth';
import { Icon } from 'native-base';

const Stack = createStackNavigator();

export const Route = Stack.Screen;
export const Router = Stack.Navigator;

export interface RouterItemProps {
    navigation: {
        navigate(routeName: string, data?: any): void;
        puhs(routeName: string, data?: any): void;
        goBack(): void;
    }
}

export type RouteProps = RouteConfig<Record<string, object | undefined>, string, StackNavigationState, StackNavigationOptions, StackNavigationEventMap>
export type CustomRouteProps = {
    initialParams: {
        type: 'public' | 'private',
        iconProps: null | {
            name?: string;
			type?: "AntDesign" | "Entypo" | "EvilIcons" | "Feather" | "FontAwesome" | "FontAwesome5" | "Foundation" | "Ionicons" | "MaterialCommunityIcons" | "MaterialIcons" | "Octicons" | "SimpleLineIcons" | "Zocial";
			style?: any;
			onPress?: (e?: any) => any;
			active?: boolean;
			ios?: string;
			android?: string;
			color?: string;
			fontSize?: number;
        },
        showInDrawer: boolean
    }
} & RouteProps;

export const routes: CustomRouteProps[] = [
    {
        name: 'Login',
        initialParams: { 
            type: 'public',
            iconProps: null,
            showInDrawer: false,
        },
        component: Auth,
        options: { header: (props) => <AppTitle {...props} /> }
    },
    {
        name: 'Home',
        component: Home,
        initialParams: {
            type: 'private',
            iconProps: {
                type: 'MaterialIcons',
                name: 'home'
            },
            showInDrawer: true
        },
        options: { header: (props) => <AppTitle {...props} />}
    },
    {
        name: 'Game Matcher',
        component: Home,
        initialParams: {
            type: 'private',
            iconProps: {
                type: 'MaterialIcons',
                name: 'videogame-asset',
            },
            showInDrawer: true
        },
        options: { header: (props) => <AppTitle {...props}  />}
    }
]

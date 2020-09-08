import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const Route = Stack.Screen;
export const Router = Stack.Navigator;

export interface RouterItemProps<P = {}> {
    navigation: {
        navigate(routeName: string, data?: any): void;
        puhs(routeName: string, data?: any): void;
        goBack(): void;
    },
    route: {
        params: P
    };
}
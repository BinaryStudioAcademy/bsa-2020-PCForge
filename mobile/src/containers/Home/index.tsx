import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export class Home extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <View style={styles.root}>
                <Text>Here will be app content</Text>
            </View>
        )
    }
}
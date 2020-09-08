import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import * as HomeActions from './actions';
import { RootState } from 'redux/rootReducer';
import { connect } from 'react-redux';
import { IHomeProps } from './interfaces';

class Home extends React.PureComponent<IHomeProps> {
    public componentDidMount(){
        this.props.getNewsRequest();
    };

    public render(): JSX.Element {
        const { news, itemsCount } = this.props.state;
        return (
            <View style={styles.root}>
                <Text>Here will be app content</Text>
            </View>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        state: state.homeReducer,
    }
}

const mapDispatchToProps = HomeActions;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
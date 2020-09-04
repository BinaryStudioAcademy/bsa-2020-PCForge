import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import * as AuthActions from './actions';
import styles from './styles';
import { IAuthProps } from './interfaces';
import { RootState } from 'src/redux/rootReducer';
import { connect } from 'react-redux';

interface State {
    email: string;
    password: string;
}

class Auth extends React.PureComponent<IAuthProps, State> {
    constructor(props: IAuthProps){
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.onEmailInput = this.onEmailInput.bind(this);
        this.onPasswordInput = this.onPasswordInput.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    public onEmailInput(email: string){
        this.setState({
            email
        });
    }

    public onPasswordInput(password: string) {
        this.setState({ password })
    }

    public onFormSubmit() {
        console.log(this.state, 'state', this.props);
        const { email, password } = this.state;
        this.props.loginRequest({ email, password });
    }

    public render() {
        return (
            <View style={styles.root}>
                <TextInput
                    placeholder="Email"
                    value={this.state.email}
                    style={styles.item}
                    onChangeText={this.onEmailInput}
                />
                <TextInput
                    placeholder="Password"
                    value={this.state.password}
                    style={styles.item}
                    onChangeText={this.onPasswordInput}
                />
                <Button 
                    title="Login"
                    onPress={this.onFormSubmit}
                ></Button>
            </View>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        state: state.authReducer
    }
}

const mapDispatchToProps = AuthActions;

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

import React from 'react';
import * as AuthActions from 'containers/Auth/actions';
import styles from 'containers/Auth/styles';
import { IAuthProps } from 'containers/Auth/interfaces';
import { RootState } from 'redux/rootReducer';
import { connect } from 'react-redux';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import {
  Container,
  Header,
  Input,
  Text,
  Item,
  Label,
  Button,
  View
} from 'native-base';
import AppTitle from 'components/basicComponent/Title';
import { REACT_APP_GOOGLE_OAUTH_CLIENT_ID } from '@env';
import { useScrollToTop } from '@react-navigation/native';

console.log(REACT_APP_GOOGLE_OAUTH_CLIENT_ID);

interface State {
    email: string;
    password: string;
}

GoogleSignin.configure({
  webClientId: REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
})

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
    const { email, password } = this.state;
    this.props.loginRequest({ email, password });
  }

  public async signInGoogle() {
    try {
      const userData = await GoogleSignin.signIn();
      console.log(userData);
    } catch(error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('canceled')
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('in progress')
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('not available')
        // play services not available or outdated
      } else {
        console.log('diff')
        // some other error happened
      }
      console.log(statusCodes)
      console.log(error.message, error.code)
    }
  }

  public render(): JSX.Element | null {
    setTimeout(() => {
      if (this.props.state.user) {
        this.props.navigation.navigate('Home');
        return null;
      }
    });

    return (
      <Container style={styles.root}>
        <AppTitle title="Login" />
        <View style={styles.content}>
          <Item floatingLabel style={[styles.inputItem]}>
            <Label style={styles.label}>Email</Label>
            <Input
              label="Email"
              value={this.state.email}
              style={[styles.input]}
              onChangeText={this.onEmailInput}
            />
          </Item>
          <Item floatingLabel style={[styles.inputItem]}>
            <Label style={styles.label}>Password</Label>
            <Input
              label="Password"
              style={[styles.input]}
              value={this.state.password}
              onChangeText={this.onPasswordInput}
            />
          </Item>
          {this.props.state.errorMessage ?
              <Text style={styles.errorMessage}>
                {'User with given credentials does not exists'}
              </Text> : null
          }
            <Button 
              onPress={this.onFormSubmit}
              style={styles.loginButton}
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </Button>
          <GoogleSigninButton
              style={[styles.loginButton]}
              // size={GoogleSigninButton.Size.Wide}
              // color={GoogleSigninButton.Color.Dark}
              onPress={this.signInGoogle}
              // disabled={this.state.isSigninInProgress} 
            />
        </View>
      </Container>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    state: state.authReducer,
  }
};

const mapDispatchToProps = AuthActions;

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

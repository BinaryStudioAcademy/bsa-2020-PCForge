import React from 'react';
import * as AuthActions from 'containers/Auth/actions';
import styles from 'containers/Auth/styles';
import {IAuthProps} from 'containers/Auth/interfaces';
import {RootState} from 'redux/rootReducer';
import {connect} from 'react-redux';
import {GoogleSignin} from '@react-native-community/google-signin';
import {ImageBackground} from 'react-native';
import {
  Container,
  Input,
  Text,
  Item,
  Label,
  Button,
  View,
  Spinner,
  H1,
} from 'native-base';
import {REACT_APP_GOOGLE_OAUTH_CLIENT_ID} from '@env';

interface State {
  email: string;
  password: string;
}

GoogleSignin.configure({
  webClientId: REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
});

class Auth extends React.PureComponent<IAuthProps, State> {
  constructor(props: IAuthProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.onEmailInput = this.onEmailInput.bind(this);
    this.onPasswordInput = this.onPasswordInput.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  public onEmailInput(email: string) {
    this.setState({
      email,
    });
  }

  public onPasswordInput(password: string) {
    this.setState({password});
  }

  public onFormSubmit() {
    const {email, password} = this.state;
    this.props.loginRequest({email, password});
  }

  public render(): JSX.Element | null {
    if (this.props.state.user) {
      setTimeout(() => {
        this.props.navigation.navigate('Home');
      });
    }

    return (
      <Container style={styles.root}>
        {this.props.state.loading ? (
          <Spinner color="#4972ff" size="large" />
        ) : (
          <>
            <ImageBackground
              source={{uri: 'https://wallpaperaccess.com/full/172758.jpg'}}
              style={styles.backgroundImage}
            />
            <H1 style={styles.header}>Welcome to PCForge</H1>
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
              <View>
                {this.props.state.errorMessage ? (
                  <Text style={styles.errorMessage}>
                    {this.props.state.errorMessage}
                  </Text>
                ) : null}
              </View>
              <View style={styles.buttonsContainer}>
                <Button
                  onPress={this.onFormSubmit}
                  style={[styles.loginButton]}>
                  <Text style={styles.loginButtonText}>Login</Text>
                </Button>
                {/* <GoogleSigninButton
                  style={[styles.loginGoogleButton]}
                  size={GoogleSigninButton.Size.Standard}
                  color={GoogleSigninButton.Color.Dark}
                  onPress={this.signInGoogle}
                /> */}
              </View>
            </View>
          </>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    state: state.authReducer,
  };
};

const mapDispatchToProps = AuthActions;

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

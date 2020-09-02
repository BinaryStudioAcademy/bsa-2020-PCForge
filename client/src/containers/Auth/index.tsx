import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import { RootState } from 'redux/rootReducer';
import styles from 'containers/Auth/styles.module.scss';
import * as AuthActions from 'containers/Auth/actions';
import LoginForm from 'components/Auth/LoginForm';
import RegistrationForm from 'components/Auth/RegistrationForm';
import { IAuthProps, IAuthState } from 'containers/Auth/interfaces';
import Spinner from 'components/Spinner';
import UserSchema from 'common/validation/user';

class Auth extends Component<IAuthProps, IAuthState> {
  constructor(props: IAuthProps) {
    super(props);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this);
    this.validate = this.validate.bind(this);
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
    this.sendData = this.sendData.bind(this);
    this.switchToRegistration = this.switchToRegistration.bind(this);
    this.switchToLogin = this.switchToLogin.bind(this);
  }

  handleChangeEmail(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const state = this.props.authState;
    const target: HTMLInputElement = event.target as HTMLInputElement;
    target.value !== state.email && this.props.changeEmail(target.value);
  }

  handleChangePassword(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const state = this.props.authState;
    const target: HTMLInputElement = event.target as HTMLInputElement;
    target.value !== state.password && this.props.changePassword(target.value);
  }

  handleChangeConfirmPassword(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const state = this.props.authState;
    const target: HTMLInputElement = event.target as HTMLInputElement;
    target.value !== state.confirmPassword && this.props.changeConfirmPassword(target.value);
  }

  validate() {
    return new Promise((resolve, reject) => {
      UserSchema.email
        .validate(this.props.authState.email)
        .then(() => {
          this.props.validationError('');

          UserSchema.password
            .validate(this.props.authState.password)
            .then(() => {
              this.props.validationError('');
              resolve();
            })
            .catch((err) => {
              this.props.validationError(err.message);
              reject();
            });
        })
        .catch((err) => {
          this.props.validationError(err.message);
          reject();
        });
    });
  }

  handleChangeCheckbox() {
    const state = this.props.authState;
    this.props.keepSignedIn(!state.keepSignedIn);
  }

  sendData(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    this.validate()
      .then((promise) => {
        const state = this.props.authState;
        if (state.email && state.password) {
          if (state.isRegistration) {
            if (state.password !== state.confirmPassword) {
              this.props.validationError('Passwords must match.');
              return;
            }
            this.props.registerRequest(state.email, state.password);
          } else {
            this.props.loginRequest(state.email, state.password, state.keepSignedIn);
          }
        } else {
          this.props.validationError('All fields must be filled in.');
        }
      })
      .catch(() => null);
  }

  switchToRegistration(event: React.MouseEvent) {
    const state = this.props.authState;
    event.preventDefault();
    if (state.isLoading) {
      return;
    }
    this.props.switchAuthPage(true);
  }

  switchToLogin(event: React.MouseEvent) {
    const state = this.props.authState;
    event.preventDefault();
    if (state.isLoading) {
      return;
    }
    this.props.switchAuthPage(false);
  }

  render() {
    const state = this.props.authState;
    if (getTokenSync()) {
      return <Redirect to={'/'} />;
    }

    return (
      <React.Fragment>
        <div className={styles.bgContainer} />
        <Container className={styles.authContainer} maxWidth="md">
          <Grid container spacing={4} direction="row" justify="center" alignItems="flex-start">
            <Grid item md>
              <div className={styles.infoWrapper}>
                <h1>Welcome to PCForge</h1>
                <h2>The easiest way to build your personal computer.</h2>
              </div>
            </Grid>
            <Grid item md>
              {state.isRegistration ? (
                state.isLoading ? (
                  <Spinner load={true} />
                ) : (
                  <RegistrationForm
                    email={state.email}
                    errorMessage={state.errorMessage}
                    isLoading={state.isLoading}
                    handleChangeEmail={this.handleChangeEmail}
                    handleChangePassword={this.handleChangePassword}
                    handleChangeConfirmPassword={this.handleChangeConfirmPassword}
                    register={this.sendData}
                    switchToLogin={this.switchToLogin}
                  />
                )
              ) : (
                <LoginForm
                  email={state.email}
                  errorMessage={state.errorMessage}
                  keepSignedIn={state.keepSignedIn}
                  isLoading={state.isLoading}
                  handleChangeEmail={this.handleChangeEmail}
                  handleChangePassword={this.handleChangePassword}
                  handleChangeCheckbox={this.handleChangeCheckbox}
                  login={this.sendData}
                  switchToRegistration={this.switchToRegistration}
                />
              )}
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    authState: state.auth,
  };
};

const mapDispatchToProps = AuthActions;

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

import React from 'react';
import styles from 'containers/Auth/styles.module.scss';
import Alert, { AlertType } from 'components/BasicComponents/Alert';
import Input from 'components/BasicComponents/Input';
import Button from 'components/BasicComponents/Button';
import Checkbox, { CheckboxType } from 'components/BasicComponents/Checkbox';
import PasswordInput from 'components/PasswordInput/PasswordInput';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { setLoginType, LoginType } from 'helpers/tokenHelper';
import gLogo from 'assets/images/g-logo.png';
import Spinner from 'components/Spinner';
import { Box } from '@material-ui/core';

interface ILoginFormProps {
  email: string;
  errorMessage: string;
  successMessage: string;
  keepSignedIn: boolean;
  isLoading: boolean;
  handleChangeEmail: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleChangePassword: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleChangeCheckbox: () => void;
  login: (event: React.FormEvent<HTMLButtonElement>) => void;
  onGoogleAuth: (response: GoogleLoginResponse) => void;
  switchToRegistration: (event: React.MouseEvent) => void;
  handleForgotPasswordClick: () => void;
}

const LoginForm = ({
  email,
  keepSignedIn,
  isLoading,
  errorMessage,
  successMessage,
  handleChangeEmail,
  handleChangePassword,
  handleChangeCheckbox,
  login,
  onGoogleAuth,
  switchToRegistration,
  handleForgotPasswordClick,
}: ILoginFormProps): JSX.Element => {
  const googleClientId = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID!;

  const googleLoginSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    setLoginType(LoginType.google);
    onGoogleAuth(response as GoogleLoginResponse);
  };

  return (
    <div className={styles.loginWrapper}>
      {isLoading ? (
        <Box className="spinnerWrapper">
          <Spinner load={true} />
        </Box>
      ) : (
        <React.Fragment>
          <form className={styles.loginForm}>
            <div className={styles.loginHeader}>Login</div>
            {errorMessage && (
              <Alert className={styles.errorAlert} alertType={AlertType.error}>
                {errorMessage}
              </Alert>
            )}
            {successMessage && (
              <Alert className={styles.errorAlert} alertType={AlertType.success}>
                {successMessage}
              </Alert>
            )}
            <Input
              name="Email"
              className={styles.emailInput}
              onChange={handleChangeEmail}
              value={email}
              placeholder="Email"
              type="text"
              required
            />
            <PasswordInput className={styles.passwordBox} inputHandler={handleChangePassword} />
            <span className={[styles.forgotPassword, 'link'].join(' ')} onClick={handleForgotPasswordClick}>
              Forgot password?
            </span>
            <div className={styles.loginButtonBox}>
              <Checkbox
                onChange={handleChangeCheckbox}
                checked={keepSignedIn}
                labelClassName={styles.keepSignedBox}
                className={styles.keepSigned}
                label="Keep me signed in"
                checkboxType={CheckboxType.primary}
              />
              <Button type="submit" onClick={login} disabled={isLoading}>
                Login
              </Button>
            </div>
            <div className={styles.googleBtnHolder}>
              <div className={styles.separator}>or</div>
              <GoogleLogin
                clientId={googleClientId}
                render={(renderProps) => (
                  <Button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                    <img src={gLogo} alt="logo" />
                    Sign in with Google
                  </Button>
                )}
                onSuccess={googleLoginSuccess}
                onFailure={(res) => console.log(res)}
                cookiePolicy={'single_host_origin'}
              />
            </div>
          </form>
          <span className={styles.registerBox}>
            Don't have an account?{' '}
            <span onClick={switchToRegistration} className={[styles.registerLink, 'link'].join(' ')}>
              Register now!
            </span>
          </span>
        </React.Fragment>
      )}
    </div>
  );
};

export default LoginForm;

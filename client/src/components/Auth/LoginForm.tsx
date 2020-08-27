import React from 'react';
import styles from 'containers/Auth/styles.module.scss';
import Alert, { AlertType } from 'components/BasicComponents/Alert';
import Input from 'components/BasicComponents/Input';
import Button from 'components/BasicComponents/Button';
import Checkbox, { CheckboxType } from 'components/BasicComponents/Checkbox';
import PasswordInput from 'components/PasswordInput/PasswordInput';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { setToken, setTokenType, TokenType } from 'helpers/tokenHelper';
import history from 'browserHistory';
import { Routes } from 'common/enums';
import gLogo from 'assets/images/g-logo.png';

interface ILoginFormProps {
  email: string;
  errorMessage: string;
  keepSignedIn: boolean;
  isLoading: boolean;
  handleChangeEmail: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleChangePassword: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  validate: () => void;
  handleChangeCheckbox: () => void;
  login: (event: React.FormEvent<HTMLButtonElement>) => void;
  switchToRegistration: (event: React.MouseEvent) => void;
}

const LoginForm = ({
  email,
  keepSignedIn,
  isLoading,
  errorMessage,
  handleChangeEmail,
  handleChangePassword,
  validate,
  handleChangeCheckbox,
  login,
  switchToRegistration,
}: ILoginFormProps): JSX.Element => {
  const googleClientId = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID!;

  const googleLoginSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    setToken((response as GoogleLoginResponse).tokenId);
    setTokenType(TokenType.google);
    history.push(Routes.DEFAULT);
  };

  const onForgotPasswordClick = () => {
    history.push(Routes.RESET_PASSWORD_REQUEST);
  };

  return (
    <div className={styles.loginWrapper}>
      <form className={styles.loginForm}>
        <div className={styles.loginHeader}>Login</div>
        {errorMessage ? (
          <Alert className={styles.errorAlert} alertType={AlertType.error}>
            {errorMessage}
          </Alert>
        ) : null}
        <Input
          name="Email"
          className={styles.emailInput}
          onChange={handleChangeEmail}
          onBlur={validate}
          value={email}
          placeholder="Email"
          type="text"
          required
        />
        <PasswordInput inputHandler={handleChangePassword} blurHandler={validate} />
        <span className={[styles.forgotPassword, 'link'].join(' ')} onClick={onForgotPasswordClick}>
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
          <Button type="submit" onClick={login} disabled={isLoading || errorMessage !== ''}>
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
    </div>
  );
};

export default LoginForm;

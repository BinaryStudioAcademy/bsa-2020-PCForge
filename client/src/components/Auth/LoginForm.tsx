import React from 'react';
import styles from 'containers/Auth/styles.module.scss';
import Alert, { AlertType } from '../BasicComponents/Alert';
import Input from 'components/BasicComponents/Input';
import Button from 'components/BasicComponents/Button';
import Checkbox, { CheckboxType } from 'components/BasicComponents/Checkbox';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import PasswordInput from '../PasswordInput/PasswordInput';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { setToken } from 'helpers/tokenHelper';
import history from 'browserHistory';
import { Routes } from 'common/enums';

interface ILoginFormProps {
  email: string;
  errorMessage: string;
  keepSignedIn: boolean;
  isLoading: boolean;
  handleChangeEmail: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleChangePassword: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
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
  handleChangeCheckbox,
  login,
  switchToRegistration,
}: ILoginFormProps): JSX.Element => {
  const googleClientId = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID!;

  const googleLoginSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    setToken((response as GoogleLoginResponse).tokenId);
    history.push(Routes.DEFAULT);
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
          value={email}
          placeholder="Email"
          type="text"
          required
        />
        <PasswordInput inputHandler={handleChangePassword} />
        <span className={[styles.forgotPassword, 'link'].join(' ')}>Forgot password?</span>
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
      </form>
      <div>
        <GoogleLogin
          clientId={googleClientId}
          buttonText="Login using Google"
          onSuccess={googleLoginSuccess}
          onFailure={(res) => console.log(res)}
          cookiePolicy={'single_host_origin'}
        />
      </div>
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

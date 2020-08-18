import React from 'react';
import styles from 'containers/Auth/styles.module.scss';
import Alert, { AlertType } from 'components/BasicComponents/Alert';
import Input from 'components/BasicComponents/Input';
import Button from 'components/BasicComponents/Button';
import Checkbox, { CheckboxType } from 'components/BasicComponents/Checkbox';
import PasswordInput from 'components/PasswordInput/PasswordInput';

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

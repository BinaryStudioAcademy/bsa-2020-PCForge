import React from 'react';
import styles from 'containers/Auth/styles.module.scss';
import Input from 'components/BasicComponents/Input';
import Button from 'components/BasicComponents/Button';
import Alert, { AlertType } from '../BasicComponents/Alert';

interface IRegistrationFormProps {
  email: string;
  errorMessage: string;
  isLoading: boolean;
  handleChangeEmail: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleChangePassword: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  register: (event: React.FormEvent<HTMLButtonElement>) => void;
  switchToLogin: (event: React.MouseEvent) => void;
}

const LoginForm = ({
  email,
  errorMessage,
  handleChangeEmail,
  handleChangePassword,
  register,
  isLoading,
  switchToLogin,
}: IRegistrationFormProps): JSX.Element => {
  return (
    <div className={[styles.loginWrapper, styles.registrationWrapper].join(' ')}>
      <form className={styles.loginForm}>
        <div className={styles.loginHeader}>Registration</div>
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
        <Input
          name="Password"
          className={styles.passwordInput}
          onChange={handleChangePassword}
          placeholder="Password"
          type="password"
          required
        />
        <div className={styles.registerButtonBox}>
          <Button type="submit" onClick={register} disabled={isLoading}>
            Register
          </Button>
        </div>
      </form>
      <span className={styles.registerBox}>
        Already have an account?{' '}
        <span onClick={switchToLogin} className={[styles.registerLink, 'link'].join(' ')}>
          Login now!
        </span>
      </span>
    </div>
  );
};

export default LoginForm;

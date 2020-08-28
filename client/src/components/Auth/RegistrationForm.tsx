import React from 'react';
import styles from 'containers/Auth/styles.module.scss';
import Input from 'components/BasicComponents/Input';
import Button from 'components/BasicComponents/Button';
import Alert, { AlertType } from 'components/BasicComponents/Alert';
import PasswordInput from 'components/PasswordInput/PasswordInput';

interface IRegistrationFormProps {
  email: string;
  errorMessage: string;
  isLoading: boolean;
  handleChangeEmail: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleChangePassword: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleChangeConfirmPassword: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  register: (event: React.FormEvent<HTMLButtonElement>) => void;
  switchToLogin: (event: React.MouseEvent) => void;
}

const LoginForm = ({
  email,
  errorMessage,
  handleChangeEmail,
  handleChangePassword,
  handleChangeConfirmPassword,
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
        <PasswordInput className={styles.passwordBox} inputHandler={handleChangePassword} placeholder="Password" />
        <PasswordInput
          className={styles.confirmPasswordBox}
          inputHandler={handleChangeConfirmPassword}
          placeholder="Confirm password"
        />
        <div className={styles.registerButtonBox}>
          <Button type="submit" onClick={register} disabled={isLoading || errorMessage !== ''}>
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

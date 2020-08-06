import React from "react";
import {withStyles} from "@material-ui/styles";
import styles from "containers/Auth/styles.module.scss";
import {Alert} from "@material-ui/lab";
import {Checkbox, CheckboxProps, FormControlLabel} from "@material-ui/core";
import Input from "components/BasicComponents/Input";
import Button from "components/BasicComponents/Button";

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

const BlueCheckbox = withStyles({
  root: {
    color: '#3ba1db',
    '&$checked': {
      color: '#3ba1db',
    },
  },
  checked: {},
})((props: CheckboxProps) => {
  return <Checkbox color='default' {...props} />;
});

const LoginForm =
  ({
     email, keepSignedIn, isLoading, errorMessage, handleChangeEmail,
     handleChangePassword, handleChangeCheckbox, login, switchToRegistration
   }: ILoginFormProps) => {
    return (
      <div className={styles.loginWrapper}>
        <form className={styles.loginForm}>
          <div className={styles.loginHeader}>Login</div>
          {errorMessage ?
            <Alert variant='outlined' severity='error' color='error'>{errorMessage}</Alert> : null}
          <Input className={styles.emailInput} onChange={handleChangeEmail} value={email}
                 placeholder='Email' type='text' required/>
          <Input className={styles.passwordInput} onChange={handleChangePassword} placeholder='Password'
                 type='password' required/>
          <span className={[styles.forgotPassword, 'link'].join(' ')}>Forgot password?</span>
          <div className={styles.loginButtonBox}>
            <FormControlLabel className={styles.keepSignedBox} label='Keep me signed in'
                              control={<BlueCheckbox onChange={handleChangeCheckbox}
                                                     checked={keepSignedIn} color='default'/>}/>
            <Button onClick={login} disabled={isLoading}>Login</Button>
          </div>
        </form>
        <span className={styles.registerBox}>
                  Don't have an account? <span onClick={switchToRegistration}
                                               className={[styles.registerLink, 'link'].join(' ')}>Register now!</span>
                </span>
      </div>
    )
  };

export default LoginForm;

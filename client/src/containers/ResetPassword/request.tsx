import { RootState } from 'redux/rootReducer';
import { ConnectedProps, connect } from 'react-redux';
import { sendResetPasswordRequest } from 'containers/ResetPassword/actions';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import { Routes } from 'common/enums';
import React from 'react';
import styles from 'containers/ResetPassword/styles.module.scss';
import { Box, Container } from '@material-ui/core';
import Button from 'components/BasicComponents/Button';
import Spinner from 'components/Spinner';
import Alert, { AlertType } from 'components/BasicComponents/Alert';
import Input from 'components/BasicComponents/Input';
import UserSchema from 'common/validation/user';
import { successMessage } from 'containers/Auth/actions';

const ResetPasswordRequest: React.FC<Props> = ({
  sendResetPasswordRequest: propsSendResetPasswordRequest,
  error,
  loading,
  success,
}): JSX.Element => {
  const [email, setEmail] = React.useState<string>('');
  const [errorMessage, validationError] = React.useState<string>('');
  const onEmailInputChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    setEmail(target.value);
  };
  const validateEmail = () => {
    return new Promise((resolve, reject) => {
      UserSchema.email
        .validate(email)
        .then(() => {
          validationError('');
          resolve();
        })
        .catch((err) => {
          validationError(err.message);
          reject();
        });
    });
  };

  const onSendRequestClick = () => {
    validateEmail().then(() => {
      propsSendResetPasswordRequest(email);
    });
  };

  const err = errorMessage || error;

  if (success) {
    return <Redirect to={Routes.LOGIN} />;
  }

  return (
    <React.Fragment>
      <div className={styles.bgContainer} />
      <Container className={styles.container} maxWidth="md">
        {loading ? (
          <Box className="spinnerWrapper">
            <Spinner />
          </Box>
        ) : (
          <Box>
            <Box className={styles.header}>
              <h2>Reset password</h2>
              <p>We'll send you an email with a password reset</p>
            </Box>
            <Box className={styles.contentWrapper}>
              {err && (
                <Alert className={styles.alert} alertType={AlertType.error}>
                  {err}
                </Alert>
              )}
              {success && (
                <Alert className={styles.alert} alertType={AlertType.success}>
                  Successfully sent
                </Alert>
              )}
              <Input
                name="Email"
                className={styles.emailInput}
                onChange={onEmailInputChange}
                value={email}
                placeholder="Email"
                type="text"
                required
              />
              <Button type="submit" onClick={onSendRequestClick}>
                Send Email
              </Button>
            </Box>
            <Box className={styles.loginWrapper}>
              <RouterLink to={Routes.LOGIN} className={'link ' + styles.login}>
                Back to login
              </RouterLink>
            </Box>
          </Box>
        )}
      </Container>
    </React.Fragment>
  );
};

const mapState = (state: RootState) => ({
  error: state.resetPassword.error,
  loading: state.resetPassword.loading,
  success: state.resetPassword.success,
});

const mapDispatch = {
  sendResetPasswordRequest,
  successMessage,
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

export default connector(ResetPasswordRequest);

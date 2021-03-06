import { RootState } from 'redux/rootReducer';
import { ConnectedProps, connect } from 'react-redux';
import { sendResetPassword } from './actions';
import { Link as RouterLink, RouteComponentProps } from 'react-router-dom';
import { Routes } from 'common/enums';

import React from 'react';
import styles from 'containers/ResetPassword/styles.module.scss';
import { Container, createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import InputWithValidation from 'components/InputWithValidation';
import PasswordSchema from 'common/validation/password';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Alert, { AlertType } from 'components/BasicComponents/Alert';
import Spinner from 'components/Spinner';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sendButton: {
      fontSize: 22,
      padding: 20,
      marginTop: 25,
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  })
);

const ResetPasswordCallback: React.FC<Props> = ({
  sendResetPassword: propsSendResetPassword,
  history,
  match,
  error: propsError,
  loading,
  success,
}): JSX.Element => {
  const materialStyles = useStyles();
  const [password1, setPassword1] = React.useState<string>('');
  const [password2, setPassword2] = React.useState<string>('');
  const [inputType, setInputType] = React.useState<'text' | 'password'>('password');

  const validate = (password1: string) => (password2: string): [boolean, string?] => {
    const isEqual = password1 === password2;
    const error = isEqual ? '' : 'passwords must be equal';
    try {
      PasswordSchema.password.validateSync(password1);
      return [isEqual, error];
    } catch (err) {
      return [false, err.message];
    }
  };
  const [isValid, error] = validate(password1)(password2);

  const onSubmitClick = () => {
    const { userId, token } = match.params;
    propsSendResetPassword({ userId, token, newPassword: password1 });
  };

  const toggleInputType = () => {
    if (inputType === 'password') setInputType('text');
    else setInputType('password');
  };

  return (
    <React.Fragment>
      <Container className={styles.container} maxWidth="xs">
        {loading ? (
          <Spinner />
        ) : (
          <Grid container spacing={4} direction="column" justify="center" alignItems="stretch">
            <Grid item md className={materialStyles.header}>
              <div>
                <h2>Confirm password</h2>
              </div>
              <Button onClick={toggleInputType}>
                <VisibilityIcon />
              </Button>
            </Grid>
            <Grid item>
              <InputWithValidation
                onChange={setPassword1}
                isValid={isValid}
                error={error}
                label="Password"
                type={inputType}
              />
            </Grid>
            <Grid item>
              <InputWithValidation
                onChange={setPassword2}
                isValid={isValid}
                error={error}
                label="Confirm Password"
                type={inputType}
              />
            </Grid>
            <Grid container justify="center">
              <Button
                variant="outlined"
                disabled={!isValid}
                className={materialStyles.sendButton}
                buttonType={isValid ? ButtonType.secondary : ButtonType.error}
                onClick={onSubmitClick}
              >
                Submit
              </Button>
            </Grid>
            <Grid container justify="center">
              <RouterLink to={Routes.LOGIN} className={styles.link}>
                back to login
              </RouterLink>
            </Grid>
            <Grid item>{success && <Alert alertType={AlertType.success}>Successfully sent</Alert>}</Grid>
            <Grid item>{propsError && <Alert alertType={AlertType.error}>{propsError}</Alert>}</Grid>
          </Grid>
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
  sendResetPassword,
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux &
  RouteComponentProps<{
    userId: string;
    token: string;
  }>;

export default connector(ResetPasswordCallback);

import { RootState } from 'redux/rootReducer';
import { ConnectedProps, connect } from 'react-redux';
import { sendResetPasswordRequest } from './actions';

import React from 'react';
import styles from 'containers/ResetPassword/styles.module.scss';
import { Container, createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import InputWithValidation from 'components/InputWithValidation';
import EmailSchema from 'common/validation/email';
import Button, { ButtonType } from 'components/BasicComponents/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sendButton: {
      fontSize: 22,
      padding: 20,
      marginTop: 25,
    },
  })
);

const ResetPasswordRequest: React.FC<Props> = ({
  sendResetPasswordRequest: propsSendResetPasswordRequest,
}): JSX.Element => {
  const materialStyles = useStyles();
  const [email, setEmail] = React.useState<string>('');
  const onEmailInputChange = (newEmail: string) => {
    setEmail(newEmail);
  };
  const validateEmail = (newEmail: string): [boolean, string?] => {
    try {
      EmailSchema.email.validateSync(newEmail);
      return [true, ''];
    } catch (err) {
      return [false, err.message];
    }
  };

  const onSendRequestClick = () => {
    propsSendResetPasswordRequest(email);
  };

  return (
    <React.Fragment>
      <Container className={styles.container} maxWidth="xs">
        <Grid container spacing={4} direction="column" justify="center" alignItems="stretch">
          <Grid item md>
            <div>
              <h2>Forgot password?</h2>
              <h3>Enter your email address and we will send you a link to reset your password</h3>
            </div>
          </Grid>
          <Grid item>
            <InputWithValidation onChange={onEmailInputChange} validate={validateEmail} label="Email" />
          </Grid>
          <Grid container justify="center">
            <Button
              variant="outlined"
              disabled={validateEmail(email)[0] ? false : true}
              className={materialStyles.sendButton}
              buttonType={validateEmail(email)[0] ? ButtonType.secondary : ButtonType.error}
              onClick={onSendRequestClick}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

const mapState = (state: RootState) => ({});

const mapDispatch = {
  sendResetPasswordRequest,
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

export default connector(ResetPasswordRequest);
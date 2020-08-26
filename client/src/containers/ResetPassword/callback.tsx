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

const ResetPasswordCallback: React.FC<Props> = ({
  sendResetPasswordRequest: propsSendResetPasswordRequest,
}): JSX.Element => {
  const materialStyles = useStyles();
  const [password1, setPassword1] = React.useState<string>('');
  const [password2, setPassword2] = React.useState<string>('');

  const validate = (password1: string) => (password2: string): [boolean, string?] => {
    const isEqual = password1 === password2;
    const error = isEqual ? '' : 'passwords must be equal';
    return [isEqual, error];
  };
  const isValid = validate(password1)(password2)[0];

  const onSubmitClick = () => {
    console.log('click');
  };

  return (
    <React.Fragment>
      <Container className={styles.container} maxWidth="xs">
        <Grid container spacing={4} direction="column" justify="center" alignItems="stretch">
          <Grid item md>
            <div>
              <h2>Confirm password</h2>
            </div>
          </Grid>
          <Grid item>
            <InputWithValidation
              onChange={setPassword1}
              isValid={isValid}
              error="passwords must be equal"
              label="Password"
            />
          </Grid>
          <Grid item>
            <InputWithValidation
              onChange={setPassword2}
              isValid={isValid}
              error="passwords must be equal"
              label="Confirm Password"
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

export default connector(ResetPasswordCallback);

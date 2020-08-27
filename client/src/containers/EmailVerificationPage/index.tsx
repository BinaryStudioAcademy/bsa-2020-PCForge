import React from 'react';
import Home from 'containers/Home';
import Alert, { AlertType } from 'components/BasicComponents/Alert';
import styles from './styles.module.scss';
import { connect } from 'react-redux';
import * as EmailVerificationActions from './actions';
import { IEmailVerificationState } from './reducer';
import { RootState } from 'redux/rootReducer';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<{token: string}> {
  verificationState: 'loading' | 'verified' | 'error';
  verifyEmail: (payload: {token: string}) => void;
}

class EmailVerificationPage extends React.PureComponent<Props> {
  public componentDidMount(){
    const token: string = this.props.match.params.token;
    console.log(this.props, 'this is props');
    console.log(token);
    this.props.verifyEmail({token});
  }

  public render(): JSX.Element {
    return (
      <>
        <Home>
          <div className={styles.alertWrapper}>
            {this.props.verificationState === 'loading' && null}
            {this.props.verificationState === 'verified' &&
              <Alert alertType={AlertType.success}>Congratulations! Your email has been successfully verified!</Alert>
            }
            {this.props.verificationState === 'error' &&
              <Alert alertType={AlertType.error}>An error occurred. Please check link correctness and try later</Alert>
            }
          </div>
        </Home>
      </>
    )
  }
}

const mapStateToProps = (state: RootState): IEmailVerificationState => {
  return {
    verificationState: state.emailVerification.verificationState,
  }
}

const connector = connect(mapStateToProps, EmailVerificationActions);

export default connector(EmailVerificationPage);
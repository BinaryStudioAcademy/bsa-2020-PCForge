import React from 'react';
import Alert from './Alert/alert';
import styles from './styles.module.scss';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import { closeAlert } from '../redux/actions';

const AlertsContainer: React.FC<Props> = ({ alerts, closeAlert }): JSX.Element => {
  return (
    <div className={styles.alertsContainer}>
      {alerts.map((alert) => (
        <Alert alert={alert} onClose={closeAlert} key={alert.id} />
      ))}
    </div>
  );
};

const mapState = (state: RootState) => ({
  alerts: state.alerts.alerts,
});

const mapDispatch = {
  closeAlert,
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

export default connector(AlertsContainer);

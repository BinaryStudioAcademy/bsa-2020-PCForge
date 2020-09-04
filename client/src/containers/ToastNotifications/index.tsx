import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import { hideNotification } from './logic/actions';
import Message from './components/Message';
import styles from './styles.module.scss';

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const Notification = (props: Props) => {
  const { open, message, notificationType, icon, hideNotification: notificationHide } = props;

  return (
    <div className={styles.notificationContainer}>
      <Message
        open={open}
        message={message}
        notificationType={notificationType}
        icon={icon}
        onClose={() => notificationHide()}
      />
    </div>
  );
};

const mapState = (state: RootState) => ({
  open: state.notification.open,
  message: state.notification.message,
  notificationType: state.notification.notificationType,
  icon: state.notification.icon,
});

const mapDispatch = {
  hideNotification,
};

const connector = connect(mapState, mapDispatch);

export default connector(Notification);

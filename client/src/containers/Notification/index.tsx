import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import { hideNotification } from './logic/actions';
import Message from './components/Message';

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const Notification = (props: Props) => {
  const { open, message, notificationType, icon, hideNotification: notificationHide } = props;

  return (
    <Message
      open={open}
      message={message}
      notificationType={notificationType}
      icon={icon}
      onClose={() => notificationHide()}
    />
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

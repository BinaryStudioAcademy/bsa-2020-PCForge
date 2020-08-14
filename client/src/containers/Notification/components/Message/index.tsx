import React from 'react';
import Snackbar, { SnackbarProps } from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { getIcon } from 'common/helpers/icon.helper';
import styles from './styles.module.scss';

interface INotificationProps {
  open: boolean;
  message: string;
  icon?: string;
  notificationType: MessageSeverity;
  onClose: () => void;
}

export enum MessageSeverity {
  success = 'success',
  error = 'error',
  warning = 'warning',
  info = 'info',
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Message: React.FC<SnackbarProps & INotificationProps> = (props) => {
  const { open, notificationType, message, icon, className, onClose } = props;

  const classes = [styles.notification];

  if (className) {
    classes.push(className);
  }

  switch (notificationType) {
    case MessageSeverity.error:
      classes.push(styles.errorNotification);
      break;
    case MessageSeverity.warning:
      classes.push(styles.warningNotification);
      break;
    case MessageSeverity.success:
      classes.push(styles.successNotification);
      break;
    case MessageSeverity.info:
      classes.push(styles.infoNotification);
      break;
  }

  const handleClose = (_?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    onClose();
  };
  return (
    <Snackbar
      open={open}
      className={classes.join(' ')}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      key={message}
    >
      <Alert onClose={handleClose} severity={notificationType} icon={icon ? getIcon(icon) : null}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Message;

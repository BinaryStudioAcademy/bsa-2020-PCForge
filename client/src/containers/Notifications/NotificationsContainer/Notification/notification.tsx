import React from 'react';
import { INotification, NotificationType } from '../../interfaces';
import InfoIcon from '@material-ui/icons/Info';
import ErrorIcon from '@material-ui/icons/Error';
import CheckIcon from '@material-ui/icons/Check';
import WarningIcon from '@material-ui/icons/Warning';
import CloseIcon from '@material-ui/icons/Close';
import styles from './styles.module.scss';

interface Props {
  notification: INotification;
}

const Notification: React.FC<Props> = ({ notification }): JSX.Element => {
  const getIcon = () => {
    switch (notification.type) {
      case NotificationType.INFO:
        return <InfoIcon />;
      case NotificationType.ERROR:
        return <ErrorIcon />;
      case NotificationType.SUCCESS:
        return <CheckIcon />;
      case NotificationType.WARNING:
        return <WarningIcon />;
    }
  };

  const getClassName = (): string => {
    switch (notification.type) {
      case NotificationType.INFO:
        return styles.info;
      case NotificationType.ERROR:
        return styles.error;
      case NotificationType.SUCCESS:
        return styles.success;
      case NotificationType.WARNING:
        return styles.warning;
    }
  };
  // ADADDDDDDDDDDDD DDDDDDDDDDDDDDDDDDD DDDDDDDDDDD DDDDDDDDDDDDDDDDDDDD
  //

  return (
    <div className={`${styles.notificationContainer} ${getClassName()}`}>
      <div className={styles.icon}>{getIcon()}</div>
      <div className={styles.text}>{notification.text}</div>
      <div className={styles.close}>
        <CloseIcon />
      </div>
    </div>
  );
};
export default Notification;

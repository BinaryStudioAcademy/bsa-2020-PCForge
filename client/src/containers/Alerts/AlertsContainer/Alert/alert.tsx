import React from 'react';
import { IAlert, AlertType } from 'common/services/AlertService/alert';
import InfoIcon from '@material-ui/icons/Info';
import ErrorIcon from '@material-ui/icons/Error';
import CheckIcon from '@material-ui/icons/Check';
import WarningIcon from '@material-ui/icons/Warning';
import CloseIcon from '@material-ui/icons/Close';
import styles from './styles.module.scss';
import { IconButton } from '@material-ui/core';

interface Props {
  alert: IAlert;
  onClose: (alert: IAlert) => void;
}

const Alert: React.FC<Props> = ({ alert, onClose }): JSX.Element => {
  const getIcon = () => {
    switch (alert.type) {
      case AlertType.INFO:
        return <InfoIcon />;
      case AlertType.ERROR:
        return <ErrorIcon />;
      case AlertType.SUCCESS:
        return <CheckIcon />;
      case AlertType.WARNING:
        return <WarningIcon />;
    }
  };

  const getClassName = (): string => {
    switch (alert.type) {
      case AlertType.INFO:
        return styles.info;
      case AlertType.ERROR:
        return styles.error;
      case AlertType.SUCCESS:
        return styles.success;
      case AlertType.WARNING:
        return styles.warning;
    }
  };

  return (
    <div className={`${styles.alertContainer} ${getClassName()}`}>
      <div className={styles.icon}>{getIcon()}</div>
      <div className={styles.text}>{alert.text}</div>
      <div className={styles.close} onClick={() => onClose(alert)}>
        <IconButton size="small">
          <CloseIcon />
        </IconButton>
      </div>
    </div>
  );
};
export default Alert;

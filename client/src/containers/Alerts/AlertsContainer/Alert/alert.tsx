import React from 'react';
import { IAlert, AlertType } from 'common/services/AlertService/alert';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

interface Props {
  alert: IAlert;
  onClose: (alert: IAlert) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontSize: 16,
      marginTop: 20,
    },
  })
);

const MyAlert: React.FC<Props> = ({ alert, onClose }): JSX.Element => {
  const materialStyles = useStyles();

  const getSeverity = (): 'info' | 'error' | 'success' | 'warning' => {
    switch (alert.type) {
      case AlertType.INFO:
        return 'info';
      case AlertType.ERROR:
        return 'error';
      case AlertType.SUCCESS:
        return 'success';
      case AlertType.WARNING:
        return 'warning';
    }
  };

  return (
    <Alert severity={getSeverity()} onClose={() => onClose(alert)} classes={{ root: materialStyles.root }}>
      {alert.text}
    </Alert>
  );
};
export default MyAlert;

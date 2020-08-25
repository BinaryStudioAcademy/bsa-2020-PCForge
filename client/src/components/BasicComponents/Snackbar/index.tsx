import React from 'react';
import MSnackBar, { SnackbarProps } from '@material-ui/core/Snackbar';
import Alert, { IAlertProps } from '../Alert';

type ISnackbarProps = {
  alertProps?: IAlertProps;
} & SnackbarProps;

const Snackbar: React.FC<ISnackbarProps> = (props) => {
  const { alertProps = {}, children, ...rest } = props;
  return (
    <MSnackBar autoHideDuration={4000} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} {...rest}>
      <Alert {...alertProps}>{children}</Alert>
    </MSnackBar>
  );
};

export default Snackbar;

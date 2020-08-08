import React from 'react';
import MAlert, { AlertProps } from '@material-ui/lab/Alert';
import MAlertTitle from '@material-ui/lab/AlertTitle';
import styles from 'components/BasicComponents/Alert/styles.module.scss';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';

export enum AlertType {
  success = 'success',
  info = 'info',
  warning = 'warning',
  error = 'error',
}

type IconType = typeof CheckCircleOutlinedIcon;

interface IAlertProps {
  alertType?: AlertType;
  alertTitle?: JSX.Element | string;
}

const Alert: React.FC<AlertProps & IAlertProps> = (props) => {
  const { className, alertType, alertTitle, children, ...restProps } = props;
  const classes = [styles.alert];
  const iconClasses = [styles.icon];
  let Icon: IconType = CheckCircleOutlinedIcon;

  if (className) {
    classes.push(className);
  }

  switch (alertType) {
    case AlertType.success:
      classes.push(styles.alertSuccess);
      iconClasses.push(styles.iconSuccess);
      break;
    case AlertType.info:
      classes.push(styles.alertInfo);
      iconClasses.push(styles.iconInfo);
      Icon = InfoOutlinedIcon;
      break;
    case AlertType.warning:
      classes.push(styles.alertWarning);
      iconClasses.push(styles.iconWarning);
      Icon = ReportProblemOutlinedIcon;
      break;
    case AlertType.error:
      classes.push(styles.alertError);
      iconClasses.push(styles.iconError);
      Icon = ErrorOutlineIcon;
      break;
  }

  return (
    <MAlert
      className={classes.join(' ')}
      icon={<Icon className={iconClasses.join(' ')} />}
      variant="outlined"
      severity={alertType}
      {...restProps}
    >
      {alertTitle ? <MAlertTitle>{alertTitle}</MAlertTitle> : null}
      {children}
    </MAlert>
  );
};

export default Alert;

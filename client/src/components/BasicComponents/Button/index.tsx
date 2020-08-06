import React from 'react';
import MButton, { ButtonProps } from '@material-ui/core/Button';
import { getIcon } from 'common/helpers/icon.helper';
import styles from './styles.module.scss';

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
  warning = 'warning',
  error = 'error',
}

interface IButtonProps {
  buttonType?: ButtonType;
  icon?: string;
}

const Button: React.FC<ButtonProps & IButtonProps> = (props) => {
  const { buttonType, icon, children, className, ...restProps } = props;
  const classes = [styles.btn];
  let buttonIcon = icon;

  if (className) {
    classes.push(className);
  }

  switch (buttonType) {
    case ButtonType.primary:
      classes.push(styles.btnPrimary);
      break;
    case ButtonType.secondary:
      classes.push(styles.btnSecondary);
      break;
    case ButtonType.warning:
      classes.push(styles.btnWarning);
      buttonIcon = 'Warning';
      break;
    case ButtonType.error:
      classes.push(styles.btnError);
      buttonIcon = 'Error';
      break;
  }

  return (
    <MButton
      variant="outlined"
      startIcon={buttonIcon ? getIcon(buttonIcon) : null}
      className={classes.join(' ')}
      {...restProps}
    >
      {children}
    </MButton>
  );
};

export default Button;

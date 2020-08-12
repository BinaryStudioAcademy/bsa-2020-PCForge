import React from 'react';
import MTextField, { TextFieldProps } from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { getIcon } from 'common/helpers/icon.helper';
import styles from './styles.module.scss';

export enum InputType {
  warning = 'warning',
  error = 'error',
}

interface IInputProps {
  inputType?: InputType;
  icon?: string;
  value?: unknown;
}

const Input: React.FC<TextFieldProps & IInputProps> = (props) => {
  const { inputType, icon, className, ...restProps } = props;
  const classes = [styles.input];
  let inputIcon = icon;

  if (className) {
    classes.push(className);
  }

  switch (inputType) {
    case InputType.warning:
      classes.push(styles.inputWarning);
      inputIcon = 'Warning';
      break;
    case InputType.error:
      classes.push(styles.inputError);
      inputIcon = 'Error';
  }

  const adornment = inputIcon ? <InputAdornment position="start">{getIcon(inputIcon)}</InputAdornment> : null;

  return <MTextField InputProps={{ startAdornment: adornment }} className={classes.join(' ')} {...restProps} />;
};

export default Input;

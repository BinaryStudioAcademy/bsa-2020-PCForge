import React from 'react';
import MFormControl from '@material-ui/core/FormControl';
import MTextField, { TextFieldProps } from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import styles from './styles.module.scss';

interface IInputFormProps {
  inputLabel: string;
  labelClassName?: string;
}

const InputForm: React.FC<IInputFormProps & TextFieldProps> = (props) => {
  const { inputLabel, ...restProps } = props;

  return (
    <>
      <span className={styles.labelInput}>{inputLabel}</span>
      <MFormControl variant="outlined" className={styles.formControl}>
        <MTextField {...restProps}>
        </MTextField>
      </MFormControl>
    </>
  );
};

export default InputForm;

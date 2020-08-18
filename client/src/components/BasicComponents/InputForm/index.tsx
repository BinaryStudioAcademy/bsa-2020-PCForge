import React from 'react';
import MFormControl from '@material-ui/core/FormControl';
import MTextField, { TextFieldProps } from '@material-ui/core/TextField';
import styles from './styles.module.scss';

interface IInputFormProps {
  inputLabel: string;
  labelClassName?: string;
}

const InputForm: React.FC<IInputFormProps & TextFieldProps> = (props) => {
  const { inputLabel, multiline, ...restProps } = props;
  console.log(multiline);

  return (
    <>
      <span className={styles.labelInput}>{inputLabel}</span>
      <MFormControl variant="outlined" className={styles.formControl}>
        {multiline ? <MTextField multiline {...restProps}></MTextField> : <MTextField {...restProps}></MTextField>}
      </MFormControl>
    </>
  );
};

export default InputForm;

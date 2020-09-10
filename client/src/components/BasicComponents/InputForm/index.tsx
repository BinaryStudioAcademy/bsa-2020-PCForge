import React from 'react';
import MFormControl from '@material-ui/core/FormControl';
import MTextField, { TextFieldProps } from '@material-ui/core/TextField';
import styles from './styles.module.scss';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

interface IInputFormProps {
  inputLabel?: string;
  labelClassName?: string;
}

const theme = createMuiTheme({
  overrides: {
    MuiInputBase: {
      inputMultiline: {
        padding: '0.5rem 1rem 0.5rem',
        textAlign: 'justify',
      },
      input: {
        padding: '0.3rem 1rem 0.5rem',
      },
    },
  },
});

const InputForm: React.FC<IInputFormProps & TextFieldProps> = (props) => {
  const { inputLabel, multiline, ...restProps } = props;

  return (
    <ThemeProvider theme={theme}>
      <span className={styles.labelInput}>{inputLabel}</span>
      <MFormControl variant="outlined" className={styles.formControl}>
        {multiline ? <MTextField multiline {...restProps}></MTextField> : <MTextField {...restProps}></MTextField>}
      </MFormControl>
    </ThemeProvider>
  );
};

export default InputForm;

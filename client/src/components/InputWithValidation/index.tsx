import { TextField } from '@material-ui/core';
import React from 'react';

interface IValidationResult {
  isValid: boolean;
  error: string;
}

interface Props {
  onChange: (newValue: string) => void;
  validate?: (inputValue: string) => [boolean, string?];
  label: string;
  defaultValue?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  classes?: object;
}

const InputWithValidation: React.FC<Props> = ({
  onChange,
  classes,
  validate = () => [true],
  label,
  defaultValue,
}): JSX.Element => {
  const [validationResult, setValidationResult] = React.useState<IValidationResult>({ isValid: true, error: '' });
  const onInputChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const newValue = event.target.value;
    const [isValid, error] = validate(newValue);
    setValidationResult({ isValid, error: error || '' });
    onChange(newValue);
  };

  console.log(!validationResult.isValid ? validationResult.error : label);

  return (
    <TextField
      error={!validationResult.isValid}
      id="input"
      label={!validationResult.isValid ? validationResult.error : label}
      defaultValue={defaultValue}
      variant="outlined"
      fullWidth={true}
      onChange={onInputChange}
      classes={classes}
    />
  );
};

export default InputWithValidation;

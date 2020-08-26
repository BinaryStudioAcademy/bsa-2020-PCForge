import { TextField } from '@material-ui/core';
import React from 'react';

interface IValidationResult {
  isValid: boolean;
  error: string;
}

interface Props {
  onChange: (newValue: string) => void;
  validate?: (inputValue: string) => [boolean, string?];
  isValid?: boolean;
  error?: string;
  label: string;
  defaultValue?: string;
  type?: 'text' | 'password';
  // eslint-disable-next-line @typescript-eslint/ban-types
  classes?: object;
}

const InputWithValidation: React.FC<Props> = ({
  onChange,
  classes,
  validate = () => [true],
  label,
  defaultValue,
  error = '',
  isValid = true,
  type = 'text',
}): JSX.Element => {
  const [validationResult, setValidationResult] = React.useState<IValidationResult>({ isValid: true, error: '' });
  const onInputChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const newValue = event.target.value;
    const [isValid, error] = validate(newValue);
    setValidationResult({ isValid, error: error || '' });
    onChange(newValue);
  };

  const getLabel = () => {
    if (isValid && validationResult.isValid) return label;
    if (!isValid) return error;
    if (!validationResult.isValid) return validationResult.error;
    return label;
  };

  return (
    <TextField
      error={!isValid || !validationResult.isValid}
      id="input"
      label={getLabel()}
      defaultValue={defaultValue}
      variant="outlined"
      fullWidth={true}
      onChange={onInputChange}
      classes={classes}
      type={type}
    />
  );
};

export default InputWithValidation;

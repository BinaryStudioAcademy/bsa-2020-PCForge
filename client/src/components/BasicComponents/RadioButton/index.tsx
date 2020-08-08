import React, { useState, useEffect } from 'react';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import styles from './styles.module.scss';

interface IRadioOptions {
  value: string | number;
  title: string;
}

interface IRadioProps {
  formName: string;
  formTitle?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  radioInfo: IRadioOptions[];
}

const RadioButton: React.FC<IRadioProps & RadioProps> = (props) => {
  const { formName, formTitle, value, onChange, radioInfo } = props;
  const radioArray = radioInfo.map((radio) => (
    <FormControlLabel value={radio.value.toString()} key={radio.value} control={<Radio />} label={radio.title} />
  ));

  const [selectedValue, setSelectedValue] = useState(value?.toString());
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  useEffect(() => setSelectedValue(value?.toString()), [value]);

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{formTitle}</FormLabel>
      <RadioGroup
        className={styles.radio}
        aria-label={formTitle}
        name={formName}
        value={selectedValue}
        onChange={handleChange}
      >
        {radioArray}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;

import React, { useState, useEffect } from 'react';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import styles from './styles.module.scss'

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
  const radioArray = props.radioInfo.map((radio) => (
    <FormControlLabel value={radio.value.toString()} control={<Radio />} label={radio.title} />
  ));

  const [value, setValue] = useState(props.value?.toString());
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (props.onChange) {
      props.onChange(event);
    }
  };

  useEffect(() => setValue(props.value?.toString()), [props.value]);

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{props.formTitle}</FormLabel>
      <RadioGroup className={styles.radio} aria-label={props.formTitle} name={props.formName} value={value} onChange={handleChange}>
        {radioArray}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;

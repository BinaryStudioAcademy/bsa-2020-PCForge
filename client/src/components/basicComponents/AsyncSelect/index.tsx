import React, { useState } from 'react';
import MFormControl from '@material-ui/core/FormControl';
import MSelect, { SelectProps } from '@material-ui/core/Select';
import MInputLabel from '@material-ui/core/InputLabel';
import styles from './styles.module.scss';

export interface IinputOptions {
  value: string | number;
  title: string;
}

interface ISelectProps {
  inputLabel: string;
  fetchCallback: () => Promise<IinputOptions[]>;
}

const Select: React.FC<ISelectProps & SelectProps> = (props) => {
  const [options, setOptions] = useState<Array<JSX.Element>>([]);

  props.fetchCallback().then((data) => {
    const optionsArray = data.map((opt) => <option value={opt.value}>{opt.title}</option>);
    optionsArray.unshift(<><option value="">{props.placeholder || ''}</option></>);
    setOptions(optionsArray);
  });

  return (
    <>
    <span className={styles.inputLabel}>{props.inputLabel}</span>
    <MFormControl variant="outlined" className={styles.formControl}>
      <MSelect native label={`${props.inputLabel}`} {...props}>
        {options}
      </MSelect>
    </MFormControl>
    </>
  );
};

export default Select;

import React, { useState, useEffect } from 'react';
import MFormControl from '@material-ui/core/FormControl';
import MSelect, { SelectProps } from '@material-ui/core/Select';
import styles from './styles.module.scss';

export interface IinputOptions {
  value: string | number;
  title: string;
}

interface ISelectProps {
  inputLabel: string;
  fetchCallback: () => Promise<IinputOptions[]>;
  placeholder?: string;
  labelClassName?: string;
}

const Select: React.FC<ISelectProps & SelectProps> = (props) => {
  const { inputLabel, fetchCallback, placeholder, labelClassName, ...restProps } = props;
  const [options, setOptions] = useState<Array<JSX.Element>>([]);
  const labelClasses = styles.inputLabel + (labelClassName ? ` ${labelClassName}` : '');

  useEffect(() => {
    fetchCallback().then((data) => {
      const optionsArray = data.map((opt) => (
        <option value={opt.value} key={opt.value}>
          {opt.title}
        </option>
      ));
      optionsArray.unshift(
        <option value="" key="none">
          {placeholder || ''}
        </option>
      );
      setOptions(optionsArray);
    });
  }, []);

  return (
    <>
      <span className={labelClasses}>{inputLabel}</span>
      <MFormControl variant="outlined" className={styles.formControl}>
        <MSelect native label={inputLabel} {...restProps}>
          {options}
        </MSelect>
      </MFormControl>
    </>
  );
};

export default Select;

import React from 'react';
import MFormControl from '@material-ui/core/FormControl';
import MSelect, { SelectProps } from '@material-ui/core/Select';
import MInputLabel from '@material-ui/core/InputLabel';
import styles from './styles.module.scss';

interface IinputOptions {
  value: string | number;
  title: string;
}

interface ISelectProps {
  inputLabel: string;
  inputOptions: IinputOptions[];
}

const Select: React.FC<ISelectProps & SelectProps> = (props) => {
  const optionsArray = props.inputOptions.map((opt) => <option value={opt.value}>{opt.title}</option>);
  optionsArray.unshift(<><option value="">{props.placeholder ? props.placeholder : ''}</option></>);

  return (
    <>
      <span className={styles.inputLabel}>{props.inputLabel}</span>
      <MFormControl variant="outlined" className={styles.formControl}>
        <MSelect native label={`${props.inputLabel}`} {...props}>
          {optionsArray}
        </MSelect>
      </MFormControl>
    </>
  );
};

export default Select;
{
  /* <MInputLabel variant='filled' shrink>{props.inputLabel}</MInputLabel> */
}

import React from 'react';
import MCheckbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import styles from 'components/BasicComponents/Checkbox/styles.module.scss';
import { FormControlLabel } from '@material-ui/core';

export enum CheckboxType {
  primary = 'primary',
  secondary = 'secondary',
  default = 'default',
}

interface ICheckboxProps {
  checkboxType?: CheckboxType;
  labelClassName?: string;
  label?: string;
}

const Checkbox: React.FC<CheckboxProps & ICheckboxProps> = (props) => {
  const { checkboxType, label, className, labelClassName, ...restProps } = props;
  const classes = [styles.checkbox];

  if (className) {
    classes.push(className);
  }

  switch (checkboxType) {
    case CheckboxType.primary:
      classes.push(styles.checkboxPrimary);
      break;
    case CheckboxType.secondary:
      classes.push(styles.checkboxSecondary);
      break;
    case CheckboxType.default:
      classes.push(styles.checkboxDefault);
      break;
  }

  const CustomCheckbox = () => <MCheckbox className={classes.join(' ')} color="default" {...restProps} />;

  const LabelBox = label && (
    <FormControlLabel className={labelClassName} label="Keep me signed in" control={<CustomCheckbox />} />
  );
  return LabelBox ? LabelBox : <CustomCheckbox />;
};

export default Checkbox;

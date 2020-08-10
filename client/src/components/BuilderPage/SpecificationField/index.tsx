import React from 'react';
import Typography from '@material-ui/core/Typography';
import styles from './styles.module.scss';

type PropsType = {
  title: string;
  value?: string | number;
};

const SpecificationField = ({ title, value = '' }: PropsType): JSX.Element => {
  return (
    <Typography className={styles.specificationField}>
      <span>{title}: </span>
      <span>{value}</span>
    </Typography>
  );
};

export default SpecificationField;

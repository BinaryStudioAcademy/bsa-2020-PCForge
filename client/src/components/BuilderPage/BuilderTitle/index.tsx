import React from 'react';
import Typography from '@material-ui/core/Typography';
import styles from './styles.module.scss';

const BuilderTitle = (): JSX.Element => {
  return (
    <Typography className={styles.title} variant="h4" component="h1">
      Build
    </Typography>
  );
};

export default BuilderTitle;

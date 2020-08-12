import React from 'react';
import styles from './styles.module.scss';
import { Box } from '@material-ui/core';
import Button from 'components/BasicComponents/Button';

type PropsType = {
  showReset?: boolean;
  onReset: () => void;
};

const BuilderTitle = ({ showReset = false, onReset }: PropsType): JSX.Element => {
  return (
    <Box className={styles.builderTitle}>
      <h1 className={styles.title}>Build</h1>
      {showReset && <Button onClick={onReset}>Reset Setup</Button>}
    </Box>
  );
};

export default BuilderTitle;

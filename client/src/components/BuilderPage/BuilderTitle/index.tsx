import React from 'react';
import styles from './styles.module.scss';
import { Box } from '@material-ui/core';
import Button from 'components/BasicComponents/Button';

type PropsType = {
  showResetFilter?: boolean;
  showResetSetup?: boolean;
  onResetFilter: () => void;
  onResetSetup: () => void;
};

const BuilderTitle = ({
  showResetFilter = false,
  showResetSetup = false,
  onResetFilter,
  onResetSetup,
}: PropsType): JSX.Element => {
  return (
    <Box className={styles.builderTitle}>
      <h1 className={styles.title}>Build</h1>
      <Box className={styles.builderTitleButtons}>
        {showResetFilter && <Button onClick={onResetFilter}>Reset Filters</Button>}
        {showResetSetup && <Button onClick={onResetSetup}>Reset Setup</Button>}
      </Box>
    </Box>
  );
};

export default BuilderTitle;

import React from 'react';
import styles from './styles.module.scss';
import { Box } from '@material-ui/core';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import Title from 'components/Title';

type PropsType = {
  isCanToSave: boolean;
  showResetFilter?: boolean;
  showResetSetup?: boolean;
  onResetFilter: () => void;
  onResetSetup: () => void;
  onSaveSetup: () => void;
};

const BuilderTitle = ({
  isCanToSave,
  showResetFilter = false,
  showResetSetup = false,
  onResetFilter,
  onResetSetup,
  onSaveSetup,
}: PropsType): JSX.Element => {
  return (
    <Box className={styles.builderTitle}>
      <h1 className={styles.title}>Build</h1>
      {/*<Title title="Build" />*/}
      <Box className={styles.builderTitleButtons}>
        {showResetFilter && <Button onClick={onResetFilter}>Reset Filters</Button>}
        {showResetSetup && <Button onClick={onResetSetup}>Reset Setup</Button>}
        {isCanToSave ? (
          <Button buttonType={ButtonType.primary} onClick={onSaveSetup} disabled={false}>
            Save Setup
          </Button>
        ) : (
          <Button buttonType={ButtonType.primary} onClick={onSaveSetup} disabled={true}>
            Save Setup
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default BuilderTitle;

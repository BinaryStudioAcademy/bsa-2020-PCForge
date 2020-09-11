import React from 'react';
import { Button } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import styles from './styles.module.scss';

type Props = { count: number; maxCount?: number; countHandler: (value: number) => void };
const TotalButtons = ({ count, maxCount = 4, countHandler }: Props) => {
  const nextCount = count < maxCount ? count + 1 : count;
  const prevCount = count > 1 ? count - 1 : 1;

  return (
    <div className={styles.counter}>
      <Button
        classes={{ root: styles.button }}
        aria-label="reduce"
        onClick={() => {
          countHandler(prevCount);
        }}
      >
        <Remove fontSize="small" />
      </Button>
      <div>{count}</div>
      <Button
        classes={{ root: styles.button }}
        aria-label="increase"
        onClick={() => {
          countHandler(nextCount);
        }}
      >
        <Add fontSize="small" />
      </Button>
    </div>
  );
};

export default TotalButtons;

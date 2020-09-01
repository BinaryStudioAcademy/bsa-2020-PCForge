import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import styles from './styles.module.scss';

type Props = { count: number; setCount: (value: number) => void };
const AddRemoveButtons = ({ count, setCount }: Props) => (
  <>
    <Button aria-label="reduce" onClick={() => setCount(count ? count - 1 : 0)}>
      <Remove fontSize="small" />
    </Button>
    <span className={styles.number}>{count}</span>
    <Button aria-label="increase" onClick={() => setCount(count + 1)}>
      <Add fontSize="small" />
    </Button>
  </>
);

export default AddRemoveButtons;

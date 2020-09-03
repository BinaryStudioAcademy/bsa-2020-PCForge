import React from 'react';
import { Button } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';

type Props = { count: number; maxCount?: number; countHandler: (value: string) => void };
const TotalButtons = ({ count, maxCount = 4, countHandler }: Props) => {
  const nextCount = count < maxCount ? count + 1 : count;
  const prevCount = count > 1 ? count - 1 : 1;

  return (
    <>
      <Button
        aria-label="reduce"
        onClick={() => {
          countHandler(prevCount.toString());
        }}
      >
        <Remove fontSize="small" />
      </Button>
      {count}
      <Button
        aria-label="increase"
        onClick={() => {
          countHandler(nextCount.toString());
        }}
      >
        <Add fontSize="small" />
      </Button>
    </>
  );
};

export default TotalButtons;

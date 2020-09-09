import React, { useCallback, useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import styles from './styles.module.scss';
import { debounce } from 'lodash-es';

type PropsType = {
  title: string;
  min?: number;
  max?: number;
  dimension?: string;
  marks?: { value: number }[];
  step?: number | null;
  debounceTimeout?: number;
  onChange: (range: number[]) => void;
};

const FilterRange = ({
  title,
  min = 0,
  max = 100,
  onChange,
  marks = [],
  dimension = '',
  step = 1,
  debounceTimeout = 300,
}: PropsType): JSX.Element => {
  const [value, setValue] = useState([min, max]);

  const onChangeDebounce = useCallback(debounce(onChange, debounceTimeout), []);

  const onChangeHandler = (ev: React.ChangeEvent<Record<string, unknown>>, value: number | number[]) => {
    setValue(value as number[]);
    onChangeDebounce(value as number[]);
  };

  const onResetHandler = () => {
    setValue([min, max]);
    onChange([min, max]);
  };

  return (
    <Accordion className={styles.group} TransitionProps={{ unmountOnExit: true }}>
      <AccordionSummary className={styles.summary} expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails className={styles.details}>
        <Typography className={styles.description}>
          {value[0]}
          <span className={styles.dimension}>{dimension}</span>
          {' - '}
          {value[1]}
          <span className={styles.dimension}>{dimension}</span>
        </Typography>
        <Slider
          value={value}
          min={min}
          step={marks.length ? null : step}
          max={max}
          marks={marks}
          onChange={onChangeHandler}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={(value) => value.toString()}
        />
        <Button className={styles.button} size="small" onClick={onResetHandler}>
          Reset
        </Button>
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterRange;

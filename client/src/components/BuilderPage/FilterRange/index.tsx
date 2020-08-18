import React, { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import styles from './styles.module.scss';

type PropsType = {
  title: string;
  min: number;
  max: number;
  dimension?: string;
  step?: number;
  onChange: (range: number[]) => void;
};

const FilterRange = ({ title, min, max, onChange, dimension = '', step = 1 }: PropsType): JSX.Element => {
  const [value, setValue] = useState([min, max]);

  const onChangeHandler = (ev: React.ChangeEvent<Record<string, unknown>>, value: number | number[]) => {
    setValue(value as number[]);
    onChange(value as number[]);
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
          step={step}
          max={max}
          onChange={onChangeHandler}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={(value) => value.toString()}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterRange;

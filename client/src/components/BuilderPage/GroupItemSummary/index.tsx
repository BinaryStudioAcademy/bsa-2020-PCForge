import React from 'react';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import styles from './styles.module.scss';
import defaultImg from './default.png';

type PropsType = {
  id: string;
  title: string;
  count: number;
  img?: string;
};

const GroupItemSummary = ({ id, title, count, img = defaultImg }: PropsType): JSX.Element => {
  return (
    <AccordionSummary
      className={styles.groupItemSummary}
      expandIcon={<ExpandMoreIcon />}
      aria-controls={`panel${id}-content`}
      id={`panel${id}-header`}
    >
      <img src={img} alt="Image group" />
      <Typography variant="h5" component="h2">
        <span className={styles.groupItemSummaryTitle}>{title}</span>
        <span className={styles.groupItemSummaryCount}>{count}</span>
      </Typography>
    </AccordionSummary>
  );
};

export default GroupItemSummary;

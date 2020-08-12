import React from 'react';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import styles from './styles.module.scss';
import defaultImg from 'assets/images/defaultImgGroup.png';
import Button from 'components/BasicComponents/Button';

type PropsType = {
  id: string;
  title: string;
  count: number;
  nameComponent?: string;
  img?: string;
  onClear: () => void;
};

const GroupItemSummary = ({
  id,
  title,
  count,
  nameComponent = '',
  img = defaultImg,
  onClear,
}: PropsType): JSX.Element => {
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
      <Typography className={styles.nameComponent}>{nameComponent}</Typography>
      {!!nameComponent && <Button onClick={onClear}>Clear</Button>}
    </AccordionSummary>
  );
};

export default GroupItemSummary;

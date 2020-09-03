import React from 'react';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Button from 'components/BasicComponents/Button';
import defaultImg from 'assets/images/defaultImgGroup.png';
import styles from './styles.module.scss';
import TotalButtons from 'components/BuilderPage/TotalButtons';

type PropsType = {
  id: string;
  title: string;
  count: number;
  nameComponent?: string;
  popupContent?: JSX.Element | false;
  img?: string;
  onClear: () => void;
  total?: string;
  totalHandler?: (value: string) => void;
};

const GroupItemSummary = ({
  id,
  title,
  count,
  nameComponent = '',
  popupContent = false,
  img = defaultImg,
  onClear,
  total,
  totalHandler,
}: PropsType): JSX.Element => {
  const clear = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.stopPropagation();
    onClear();
  };

  return (
    <AccordionSummary
      className={styles.groupItemSummary}
      expandIcon={<ExpandMoreIcon />}
      aria-controls={`panel${id}-content`}
      id={`panel${id}-header`}
    >
      <div
        style={{ display: 'flex', alignItems: 'center' }}
        onClick={(event) => event.stopPropagation()}
        onFocus={(event) => event.stopPropagation()}
      >
        <img src={img} alt="Image group" />
        <Typography variant="h5" component="h2">
          <span className={styles.groupItemSummaryTitle}>{title}</span>
          <span className={styles.groupItemSummaryCount}>{count}</span>
        </Typography>
        <Tooltip title={popupContent} classes={{ tooltip: styles.popup }}>
          <Typography className={styles.nameComponent}>{nameComponent}</Typography>
        </Tooltip>
        {!!nameComponent && <Button onClick={clear}>Clear</Button>}
        {total && totalHandler && <TotalButtons count={parseInt(total)} countHandler={totalHandler} />}
      </div>
    </AccordionSummary>
  );
};

export default GroupItemSummary;

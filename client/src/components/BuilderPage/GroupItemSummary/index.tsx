import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Button from 'components/BasicComponents/Button';
import defaultImg from 'assets/images/defaultImgGroup.png';
import styles from './styles.module.scss';
import TotalButtons from 'components/BuilderPage/TotalButtons';
import { TypeComponent } from 'containers/BuilderPage/types';
import { GroupName } from 'containers/BuilderPage/config';
import { SpecificationComponent } from '../Specifications';

type PropsType = {
  id: string;
  title: string;
  count: number;
  selectedComponent: { [p: string]: TypeComponent | null };
  img?: string;
  onClear: (gpName: GroupName) => void;
  total?: number;
  totalHandler?: (value: number) => void;
};

const GroupItemSummary = ({
  id,
  title,
  count,
  selectedComponent,
  img = defaultImg,
  onClear,
  total,
  totalHandler,
}: PropsType): JSX.Element => {
  // const clear = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
  //   event.stopPropagation();
  //   onClear();
  // };
  const clear = (groupName: GroupName): void => {
    onClear(groupName);
  };

  const componentFull = Object.entries(selectedComponent).map(
    (e: [string, TypeComponent | null]): JSX.Element | null => {
      if (e[1]) {
        return (
          <Grid className={styles.nameComponentWrap} key={e[0] + e[1].id} container spacing={1}>
            <Grid item xs={9}>
              <Tooltip
                /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
                // @ts-ignore
                title={SpecificationComponent[e[0] as GroupName]({ component: e[1] })}
                classes={{ tooltip: styles.popup }}
              >
                <Typography className={styles.nameComponent}>{e[1].name}</Typography>
              </Tooltip>
            </Grid>
            <Grid item xs={3}>
              {!!e[1].name && (
                <Button
                  onClick={(ev) => {
                    ev.stopPropagation();
                    clear(e[0] as GroupName);
                  }}
                >
                  Clear
                </Button>
              )}
              {!!e[1].name && total && totalHandler && <TotalButtons count={total} countHandler={totalHandler} />}
            </Grid>
          </Grid>
        );
      } else return null;
    }
  );

  return (
    <AccordionSummary
      className={styles.groupItemSummary}
      classes={{ content: styles.SummaryContent }}
      expandIcon={<ExpandMoreIcon />}
      aria-controls={`panel${id}-content`}
      id={`panel${id}-header`}
    >
      <Grid
        className={styles.wrapper}
        container
        spacing={3}
        onClick={(event) => event.stopPropagation()}
        onFocus={(event) => event.stopPropagation()}
      >
        <Grid item xs={1}>
          <img className={styles.groupItemSummaryImg} src={img} alt="Image group" />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5" component="h2">
            <span className={styles.groupItemSummaryTitle}>{title}</span>
            <span className={styles.groupItemSummaryCount}>{count}</span>
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Box>{componentFull}</Box>
        </Grid>
      </Grid>
    </AccordionSummary>
  );
};

export default GroupItemSummary;

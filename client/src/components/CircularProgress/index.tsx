import React from 'react';
import MCircularProgress from '@material-ui/core/CircularProgress';
import styles from './styles.module.scss';

interface Props {
  progressValue: number;
}

const CircularProgress: React.FC<Props> = (props): JSX.Element => {
  const { progressValue } = props;
  const percentValue = progressValue * 10;
  return (
    <div className={styles.progressBar}>
      <MCircularProgress
        variant="static"
        size="102px"
        className={styles.progressBarItem}
        classes={{
          circle: styles.circleStatic,
        }}
        value={100}
      />
      <MCircularProgress
        variant="static"
        size="96px"
        className={styles.progressBarItem}
        classes={{
          circle: styles.circleComputed,
        }}
        value={percentValue}
      />
      <span className={styles.progressIndicator}>{progressValue}</span>
    </div>
  );
};

export default CircularProgress;

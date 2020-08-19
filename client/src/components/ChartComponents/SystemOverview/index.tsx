import { IHardwareReport } from 'common/models/setupPerformance';
import { Setup } from 'common/models/setup';

import React from 'react';
import styles from './styles.module.scss';
import CircularProgress from 'components/CircularProgress';
import { Container } from '@material-ui/core';

interface Props {
  setup: Setup;
  overall: IHardwareReport;
}

const GameMatcherSystemOverview: React.FC<Props> = ({ setup, overall }): JSX.Element => {
  const getVerdict = (): string => {
    const minimumOverallRate = Math.min(overall.cpu, overall.gpu, overall.ram);
    if (minimumOverallRate <= 3.0) return 'BAD';
    if (minimumOverallRate <= 6.0) return 'NOT BAD';
    if (minimumOverallRate <= 9.0) return 'GOOD';
    return 'EXCELLENT';
  };

  const getSummary = (): string => {
    const TOTAL_GAME_NUMBER = 100;
    const POSSIBLE_GAME_NUMBER = Math.ceil((Math.min(overall.cpu, overall.gpu, overall.ram) / 10) * TOTAL_GAME_NUMBER);
    return `In summary, among ${TOTAL_GAME_NUMBER} most demanding games this setup can meet ${POSSIBLE_GAME_NUMBER} recommended requirements`;
  };

  return (
    <Container component="section">
      <div className={styles.performanceResultWrapper}>
        <div className={styles.requirements}>
          <div className={styles.requirement}>
            <CircularProgress progressValue={overall.cpu} />
            <h3 className={styles.requirementHeader}>Processor</h3>
            <p className={styles.requirementDetail}>{setup.cpu.name}</p>
          </div>

          <div className={styles.requirement}>
            <CircularProgress progressValue={overall.gpu} />
            <h3 className={styles.requirementHeader}>Graphics</h3>
            <p className={styles.requirementDetail}>{setup.gpu.name}</p>
          </div>

          <div className={styles.requirement}>
            <CircularProgress progressValue={overall.ram} />
            <h3 className={styles.requirementHeader}>RAM</h3>
            <p className={styles.requirementDetail}>{setup.ram.memorySize}GB</p>
          </div>
        </div>
        <div className={styles.summary}>
          <h2 className={styles.summaryHeader}>Verdict: {getVerdict()}</h2>
          <section className={styles.summarySection}>
            <span className={styles.summaryItemHeader}>SETUP PERFORMANCE</span>
            <span className={styles.summaryItemBody}>{getSummary()}</span>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default GameMatcherSystemOverview;

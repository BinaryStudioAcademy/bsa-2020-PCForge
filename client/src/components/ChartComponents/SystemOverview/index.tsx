import { IHardwareReport } from 'common/models/setupPerformance';
import { Cpu } from 'common/models/cpu';
import { Gpu } from 'common/models/gpu';
import { Ram } from 'common/models/ram';

import React from 'react';
import styles from './styles.module.scss';
import CircularProgress from 'components/CircularProgress';
import { Container } from '@material-ui/core';

interface Props {
  cpu: Cpu;
  gpu: Gpu;
  ramSize: number;
  overall: IHardwareReport;
}

const GameMatcherSystemOverview: React.FC<Props> = ({ cpu, gpu, ramSize, overall }): JSX.Element => {
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
            <p className={styles.requirementDetail}>{cpu.name}</p>
          </div>

          <div className={styles.requirement}>
            <CircularProgress progressValue={overall.gpu} />
            <h3 className={styles.requirementHeader}>Graphics</h3>
            <p className={styles.requirementDetail}>{gpu.name}</p>
          </div>

          <div className={styles.requirement}>
            <CircularProgress progressValue={overall.ram} />
            <h3 className={styles.requirementHeader}>RAM</h3>
            <p className={styles.requirementDetail}>{ramSize}GB</p>
          </div>
        </div>
        <div className={styles.summary}>
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

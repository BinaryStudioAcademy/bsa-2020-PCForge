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
          <h2 className={styles.summaryHeader}>Graphic Setting: Hight</h2>

          <section className={styles.summarySection}>
            <span className={styles.summaryItemHeader}>GPU PERFORMANCE</span>
            <span className={styles.summaryItemBody}>
              In summary, the Radeon RX 590 Sapphire Nitro+ AMD 50 Gold Edition 8GB is clearly
            </span>
          </section>

          <section className={styles.summarySection}>
            <span className={styles.summaryItemHeader}>SYSTEM SUMMARY</span>
            <span className={styles.summaryItemBody}>
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </span>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default GameMatcherSystemOverview;

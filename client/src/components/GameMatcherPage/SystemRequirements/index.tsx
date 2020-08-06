import React from 'react';
import styles from './styles.module.scss';
import sharedStyles from '../styles.module.scss';
import CircularProgress from 'components/CircularProgress';

const GameMatcherSystemRequirements = () => {
  return (
    <section>
      <h1 className={sharedStyles.mainHeader}>3 Skulls of Toltecs System Requirements</h1>
      <div className={styles.performanceResultWrapper}>
        <div className={styles.requirements}>
          <div className={styles.requirement}>
            <CircularProgress progressValue={3.2} />
            <h3 className={styles.requirementHeader}>Processor</h3>
            <p className={styles.requirementDetail}>Anthlon 64 X2 Dual Core</p>
          </div>

          <div className={styles.requirement}>
            <CircularProgress progressValue={10} />
            <h3 className={styles.requirementHeader}>Graphics [1920 x 1080]</h3>
            <p className={styles.requirementDetail}>Radeon RX 590 Sapphire Nitro+ AMD 50 Gold Edition</p>
          </div>

          <div className={styles.requirement}>
            <CircularProgress progressValue={8} />
            <h3 className={styles.requirementHeader}>RAM</h3>
            <p className={styles.requirementDetail}>64GB</p>
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
    </section>
  );
};

export default GameMatcherSystemRequirements;

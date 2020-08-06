import React from 'react';
import sharedStyles from '../styles.module.scss';
import styles from './styles.module.scss';

const GameMatcherPerformanceReport = () => {
  const values = [];
  for (let i = 0; i <= 55000; i += 5000) {
    values.push(i);
  }
  return (
    <section>
      <h2 className={sharedStyles.mainHeader}>Performance Report</h2>
      <div className={styles.requirementVariants}>
        <div className={styles.requirementVariant}>
          <div className={[sharedStyles.circle, sharedStyles.activeCircle].join(' ')}></div>
          <span className={styles.requirementText}>Recommended Requirements</span>
        </div>
        <div className={styles.requirementVariant}>
          <div className={sharedStyles.circle}></div>
          <span className={styles.requirementText}>Recommended Requirements</span>
        </div>
        <div className={styles.requirementVariant}>
          <div className={sharedStyles.circle}></div>
          <span className={styles.requirementText}>Recommended Requirements</span>
        </div>
      </div>

      <div className={styles.performanceGraph}>
        <div className={styles.performanceGraphItem}>
          <span className={styles.performanceIndicatorHeader}>CPU</span>
          <div className={styles.performanceGraphCentralLine}></div>
          <div className={styles.performanceIndicator}></div>
        </div>
        <div className={styles.performanceGraphItem}>
          <span className={styles.performanceIndicatorHeader}>GPU</span>
          <div className={styles.performanceGraphCentralLine}></div>
          <div className={styles.performanceIndicator}></div>
        </div>
        <div className={styles.performanceGraphItem}>
          <span className={styles.performanceIndicatorHeader}>RAM</span>
          <div className={styles.performanceGraphCentralLine}></div>
          <div className={styles.performanceIndicator}></div>
        </div>
      </div>
      <div className={styles.indicatorValues}>
        {values.map((value) => (
          <span key={value} className={styles.indicatorValue}>
            {value}
          </span>
        ))}
      </div>

      <table className={styles.usedComponents}>
        <tbody>
          <tr>
            <th className={styles.usedComponentHeader}>Processor</th>
            <td className={styles.usedComponentsBody}>Intel Pentium II, AMD Athlon MP</td>
          </tr>
          <tr>
            <th className={styles.usedComponentHeader}>Graphics</th>
            <td className={styles.usedComponentsBody}>Nvidia GeForce 6200 LE, AMD Radeon Xpress 1200 Series</td>
          </tr>
          <tr>
            <th className={styles.usedComponentHeader}>RAM</th>
            <td className={styles.usedComponentsBody}>32MB</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default GameMatcherPerformanceReport;

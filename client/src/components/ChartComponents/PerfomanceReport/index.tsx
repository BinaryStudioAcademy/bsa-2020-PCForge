import React, { useState } from 'react';
import sharedStyles from '../styles.module.scss';
import styles from './styles.module.scss';

interface RecommendedRequirement {
  id: number;
  title: string;
}

interface PerformanceIndicatorItem {
  name: string;
  value: number;
}

const GameMatcherPerformanceReport = () => {
  const [selectedRequirement, setSelectedRequirement] = useState<number>(1);
  const values = [];
  for (let i = 0; i <= 55000; i += 5000) {
    values.push(i);
  }
  const recommendedRequirements = [
    { id: 1, title: 'Recommended requirement' },
    { id: 2, title: 'Recommended requirement' },
    { id: 3, title: 'Recommended requirement' },
  ];

  const performanceIndicators = [
    { name: 'CPU', value: 40 },
    { name: 'GPU', value: 21 },
    { name: 'RAM', value: 81 },
  ];

  const componentItems = [
    { title: 'Processor', description: 'Intel Pentium II, AMD Athlon MP' },
    { title: 'Graphics', description: 'Nvidia GeForce 6200 LE, AMD Radeon Xpress 1200 Series' },
    { title: 'RAM', description: '32MB' },
  ];

  const RecommendedRequirement = (req: RecommendedRequirement) => {
    const isActive = req.id === selectedRequirement;

    return (
      <div className={styles.requirementVariant} key={req.id} onClick={() => setSelectedRequirement(req.id)}>
        <div className={[sharedStyles.circle, isActive ? sharedStyles.activeCircle : ''].join(' ')}></div>
        <span className={styles.requirementText}>{req.title}</span>
      </div>
    );
  };

  const PerformanceIndicator = (ind: PerformanceIndicatorItem) => (
    <div className={styles.performanceGraphItem} key={ind.name}>
      <span className={styles.performanceIndicatorHeader}>{ind.name}</span>
      <div className={styles.performanceGraphCentralLine}></div>
      <div className={styles.performanceIndicator} style={{ width: ind.value + '%' }}></div>
    </div>
  );

  return (
    <section>
      <h2 className={sharedStyles.mainHeader}>Performance Report</h2>
      <div className={styles.requirementVariants}>{recommendedRequirements.map(RecommendedRequirement)}</div>

      <div className={styles.performanceGraph}>{performanceIndicators.map(PerformanceIndicator)}</div>
      <div className={styles.indicatorValues}>
        {values.map((value) => (
          <span key={value} className={styles.indicatorValue}>
            {value}
          </span>
        ))}
      </div>

      <table className={styles.usedComponents}>
        <tbody>
          {componentItems.map((item) => (
            <tr key={item.title}>
              <th className={styles.usedComponentHeader}>{item.title}</th>
              <td className={styles.usedComponentsBody}>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default GameMatcherPerformanceReport;

import React from 'react';
import GameMatcherSystemRequirements from 'components/ChartComponents/SystemRequirements';
import GameMatcherFpsAnalysis from 'components/ChartComponents/FpsAnalysis';
import GameMatcherPerformanceReport from 'components/ChartComponents/PerfomanceReport';
import sharedStyles from '../../components/ChartComponents/styles.module.scss';
import styles from './styles.module.scss';
import TopGames from 'components/ChartComponents/TopGames';
import TestDifferentGame from 'components/ChartComponents/TestDifferentGame';
import TestDifferentSystem from 'components/ChartComponents/TestDifferentSystem';

const GameMatcherResult = () => {
  return (
    <div className={styles.gameMatcherRoot}>
      <div className={styles.content} role="main">
        <h1 className={[sharedStyles.mainHeader, styles.pageHeader].join(' ')}>
          3 Skulls of Toltecs System Requirements
        </h1>
        <div className={styles.gameMatcherContentWrapper}>
          <main>
            <GameMatcherSystemRequirements />
            <GameMatcherPerformanceReport />
            <GameMatcherFpsAnalysis />
          </main>

          <div className={styles.asideItems}>
            <TopGames games={[]} />
            <TestDifferentGame />
            <TestDifferentSystem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameMatcherResult;

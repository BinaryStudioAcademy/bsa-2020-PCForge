import React from 'react';
import GameMatcherSystemRequirements from 'components/GameMatcherPage/SystemRequirements';
import GameMatcherFpsAnalysis from 'components/GameMatcherPage/FpsAnalysis';
import GameMatcherPerformanceReport from 'components/GameMatcherPage/PerfomanceReport';
import styles from './styles.module.scss';

const GameMatcherResult = () => {
  return (
    <main className={styles.gameMatcherRoot}>
      <GameMatcherSystemRequirements />
      <GameMatcherPerformanceReport />
      <GameMatcherFpsAnalysis />
    </main>
  );
};

export default GameMatcherResult;

import React from 'react';
import GameMatcherSystemRequirements from 'components/GameMatcherPage/SystemRequirements';
import GameMatcherFpsAnalysis from 'components/GameMatcherPage/FpsAnalysis';
import GameMatcherPerformanceReport from 'components/GameMatcherPage/PerfomanceReport';
import sharedStyles from '../../components/GameMatcherPage/styles.module.scss';
import styles from './styles.module.scss';
import TopGames from 'components/GameMatcherPage/TopGames';
import TestDifferentGame from 'components/GameMatcherPage/TestDifferentGame';
import TestDifferentSystem from 'components/GameMatcherPage/TestDifferentSystem';

const GameMatcherResult = () => {
  return (
    <div className={styles.gameMatcherRoot}>

      <div className={styles.content} role="main">
        <h1 className={[sharedStyles.mainHeader, styles.pageHeader].join(' ')}>3 Skulls of Toltecs System Requirements</h1>
        <div className={styles.gameMatcherContentWrapper}>
          <main>
            <GameMatcherSystemRequirements />
            <GameMatcherPerformanceReport />
            <GameMatcherFpsAnalysis />
          </main>

          <div className={styles.asideItems}>
            <TopGames games={[]}/>
            <TestDifferentGame />
            <TestDifferentSystem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameMatcherResult;

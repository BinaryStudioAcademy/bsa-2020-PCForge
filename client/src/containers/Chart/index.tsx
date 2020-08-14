import React from 'react';
import GameMatcherSystemRequirements from 'components/ChartComponents/SystemRequirements';
import GameMatcherFpsAnalysis from 'components/ChartComponents/FpsAnalysis';
import GameMatcherPerformanceReport from 'components/ChartComponents/PerfomanceReport';
import sharedStyles from '../../components/ChartComponents/styles.module.scss';
import styles from './styles.module.scss';
import TopGames from 'components/ChartComponents/TopGames';
import TestDifferentGame from 'components/ChartComponents/TestDifferentGame';
import TestDifferentSystem from 'components/ChartComponents/TestDifferentSystem';
import PageComponent from 'containers/PageComponent';
import { MenuItems } from 'common/enums';

const GameMatcherResult = (): JSX.Element => {
  return (
    <PageComponent selectedMenuItemNumber={MenuItems.Setup}>
      <div className={styles.gameMatcherRoot}>
        <div className={styles.content}>
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
    </PageComponent>
  );
};

export default GameMatcherResult;

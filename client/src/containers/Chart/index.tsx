import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import { fetchTopGames, fetchPerformanceAnalysis, fetchSetup } from 'containers/Chart/actions';

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
import { Game } from 'common/models/game';

const GameMatcherResult: React.FC<Props> = ({
  fetchTopGames,
  fetchPerformanceAnalysis,
  performance,
  topGames,
  setup,
}) => {
  const DEFAULT_SETUP_ID = 5;
  React.useEffect(() => {
    fetchSetup(DEFAULT_SETUP_ID);
    fetchTopGames();
  }, []);

  React.useEffect(() => {
    if (topGames.length > 0) {
      fetchPerformanceAnalysis(DEFAULT_SETUP_ID, topGames[0].id);
    }
  }, [topGames]);

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
              <GameMatcherPerformanceReport setup={setup} report={performance.report} />
              <GameMatcherFpsAnalysis fpsAnalysis={performance.fpsAnalysis} />
            </main>

            <div className={styles.asideItems}>
              <TopGames
                games={topGames.map((topGame) => topGame.game)}
                defaultSelected={0}
                onGameSelected={(game: Game) => fetchPerformanceAnalysis(DEFAULT_SETUP_ID, game.id)}
              />
              <TestDifferentGame />
              <TestDifferentSystem />
            </div>
          </div>
        </div>
      </div>
    </PageComponent>
  );
};

const mapState = (state: RootState) => ({
  topGames: state.setupChart.topGames,
  performance: state.setupChart.performance,
  setup: state.setupChart.setup,
});

const mapDispatch = {
  fetchTopGames,
  fetchPerformanceAnalysis,
  fetchSetup,
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

export default connector(GameMatcherResult);

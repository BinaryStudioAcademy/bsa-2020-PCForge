import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import { fetchTopGames, fetchPerformanceAnalysis, fetchSetup, fetchGamesByName } from 'containers/Chart/actions';

import React from 'react';
import { RouteComponentProps } from 'react-router';
import GameMatcherSystemOverview from 'components/ChartComponents/SystemOverview';
import GameMatcherFpsAnalysis from 'components/ChartComponents/FpsAnalysis';
import GameMatcherPerformanceReport from 'components/ChartComponents/PerfomanceReport';
import sharedStyles from '../../components/ChartComponents/styles.module.scss';
import styles from './styles.module.scss';
import TopGames from 'components/ChartComponents/TopGames';
import TestDifferentGame from 'components/ChartComponents/TestDifferentGame';
import PageComponent from 'containers/PageComponent';
import { MenuItems } from 'common/enums';
import { Game } from 'common/models/game';

const GameMatcherResult: React.FC<Props> = ({
  fetchTopGames,
  fetchPerformanceAnalysis,
  fetchSetup,
  fetchGamesByName: fetchGames,
  performance,
  topGames,
  games,
  setup,
  match,
}) => {
  const [topGameSelected, setTopGameSelected] = React.useState<number>(0);
  const setupId = parseInt(match.params.id, 10);
  React.useEffect(() => {
    fetchSetup(setupId);
    fetchTopGames();
    fetchGames('');
  }, []);

  React.useEffect(() => {
    if (topGames.length > 0) {
      fetchPerformanceAnalysis(setupId, topGames[0].id);
    }
  }, [topGames]);

  const onGameSelected = (game: Game) => {
    fetchPerformanceAnalysis(setupId, game.id);
    const index = topGames.findIndex((topGame) => topGame.id === game.id);
    console.log(index);
    setTopGameSelected(index);
  };

  return (
    <PageComponent selectedMenuItemNumber={MenuItems.Setup}>
      <div className={styles.gameMatcherRoot}>
        <div className={styles.content}>
          <h1 className={[sharedStyles.mainHeader, styles.pageHeader].join(' ')}>System overview</h1>
          <div className={styles.gameMatcherContentWrapper}>
            <main>
              <GameMatcherSystemOverview setup={setup} overall={performance.overall} />
              <GameMatcherPerformanceReport setup={setup} report={performance.report} />
              <GameMatcherFpsAnalysis fpsAnalysis={performance.fpsAnalysis} />
            </main>

            <div className={styles.asideItems}>
              <TopGames
                games={topGames.map((topGame) => topGame.game)}
                selected={topGameSelected}
                onGameSelected={onGameSelected}
              />
              <TestDifferentGame games={games} onGameChanged={onGameSelected} />
            </div>
          </div>
        </div>
      </div>
    </PageComponent>
  );
};

interface MatchParams {
  id: string;
}

const mapState = (state: RootState) => ({
  topGames: state.setupChart.topGames,
  performance: state.setupChart.performance,
  setup: state.setupChart.setup,
  games: state.setupChart.searchedGames,
});

const mapDispatch = {
  fetchTopGames,
  fetchPerformanceAnalysis,
  fetchSetup,
  fetchGamesByName,
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RouteComponentProps<MatchParams>;

export default connector(GameMatcherResult);

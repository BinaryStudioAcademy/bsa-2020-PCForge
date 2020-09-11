import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import { fetchPerformanceAnalysis, fetchGamesByName, setGame } from 'containers/Chart/actions';

import React from 'react';
import GameMatcherSystemOverview from 'components/ChartComponents/SystemOverview';
import GameMatcherFpsAnalysis from 'components/ChartComponents/FpsAnalysis';
import GameMatcherPerformanceReport from 'components/ChartComponents/PerfomanceReport';
import sharedStyles from '../../components/ChartComponents/styles.module.scss';
import styles from './styles.module.scss';
import TestDifferentGame from 'components/ChartComponents/TestDifferentGame';
import PageComponent from 'containers/PageComponent';
import { MenuItems, Routes } from 'common/enums';
import { Redirect } from 'react-router-dom';
import { TopGame } from 'common/models/topGame';
import { Game } from 'common/models/game';
import TopGames from 'containers/TopGames';

const GameMatcherResult: React.FC<Props> = ({
  fetchPerformanceAnalysis: propsFetchPerformanceAnalysis,
  fetchGamesByName: fetchGames,
  setGame: propsSetGame,
  performance,
  topGames,
  games,
  cpu,
  gpu,
  ramSize,
  game: initialSelected,
}) => {
  React.useEffect(() => {
    fetchGames('');
    if (cpu && gpu && ramSize && initialSelected) {
      propsFetchPerformanceAnalysis(cpu.id, gpu.id, ramSize, initialSelected.id);
    }
  }, []);

  const onTopGameSelected = (topGame: TopGame) => {
    if (cpu && gpu && ramSize) propsFetchPerformanceAnalysis(cpu.id, gpu.id, ramSize, topGame.game.id);
    const foundTopGame = topGames.find((_topGame) => _topGame.id === topGame.id);
    if (foundTopGame) propsSetGame(foundTopGame.game);
  };

  const onGameSelected = (game: Game) => {
    if (cpu && gpu && ramSize) propsFetchPerformanceAnalysis(cpu.id, gpu.id, ramSize, game.id);
    propsSetGame(game);
  };

  if (!cpu || !gpu || !ramSize) return <Redirect to={Routes.MATCHER} />;

  return (
    <PageComponent titleSelector="Chart" selectedMenuItemNumber={MenuItems.GameMatcher}>
      <div className={styles.gameMatcherRoot}>
        <div className={styles.content}>
          <h1 className={[sharedStyles.mainHeader, styles.pageHeader].join(' ')}>System overview</h1>
          <div className={styles.gameMatcherContentWrapper}>
            <main>
              <GameMatcherSystemOverview cpu={cpu} gpu={gpu} ramSize={ramSize} overall={performance.overall} />
              <GameMatcherPerformanceReport
                cpu={cpu}
                gpu={gpu}
                ramSize={ramSize}
                game={initialSelected}
                report={performance.report}
              />
              <GameMatcherFpsAnalysis fpsAnalysis={performance.fpsAnalysis} />
            </main>

            <div className={styles.asideItems}>
              <TopGames onGameSelected={onTopGameSelected} />
              <TestDifferentGame games={games} onGameChanged={onGameSelected} onInputChanged={fetchGames} />
            </div>
          </div>
        </div>
      </div>
    </PageComponent>
  );
};

const mapState = (state: RootState) => ({
  performance: state.setupChart.performance,
  cpu: state.setupChart.cpu,
  gpu: state.setupChart.gpu,
  ramSize: state.setupChart.ramSize,
  games: state.setupChart.searchedGames,
  game: state.setupChart.game,
  topGames: state.topGames.topGames,
});

const mapDispatch = {
  fetchPerformanceAnalysis,
  fetchGamesByName,
  setGame,
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

export default connector(GameMatcherResult);

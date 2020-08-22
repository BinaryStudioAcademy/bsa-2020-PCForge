import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import { fetchTopGames, fetchPerformanceAnalysis, fetchGamesByName } from 'containers/Chart/actions';

import React from 'react';
import GameMatcherSystemOverview from 'components/ChartComponents/SystemOverview';
import GameMatcherFpsAnalysis from 'components/ChartComponents/FpsAnalysis';
import GameMatcherPerformanceReport from 'components/ChartComponents/PerfomanceReport';
import sharedStyles from '../../components/ChartComponents/styles.module.scss';
import styles from './styles.module.scss';
import TopGames from 'components/ChartComponents/TopGames';
import TestDifferentGame from 'components/ChartComponents/TestDifferentGame';
import PageComponent from 'containers/PageComponent';
import { MenuItems, Routes } from 'common/enums';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { TopGame } from 'common/models/topGame';
import { Game } from 'common/models/game';

const GameMatcherResult: React.FC<Props> = ({
  fetchTopGames: propsFetchTopGames,
  fetchPerformanceAnalysis: propsFetchPerformanceAnalysis,
  fetchGamesByName: fetchGames,
  performance,
  topGames,
  games,
  cpu,
  gpu,
  ram,
  history,
}) => {
  const [topGameSelected, setTopGameSelected] = React.useState<number>(0);
  React.useEffect(() => {
    propsFetchTopGames();
    fetchGames('');
  }, []);

  React.useEffect(() => {
    if (topGames.length > 0 && cpu && gpu && ram) {
      propsFetchPerformanceAnalysis(cpu.id, gpu.id, ram.memorySize, topGames[0].id);
    }
  }, [topGames]);

  const onTopGameSelected = (topGame: TopGame) => {
    if (cpu && gpu && ram) propsFetchPerformanceAnalysis(cpu.id, gpu.id, ram.memorySize, topGame.game.id);
    const index = topGames.findIndex((_topGame) => _topGame.id === topGame.id);
    setTopGameSelected(index);
  };

  const onGameSelected = (game: Game) => {
    if (cpu && gpu && ram) propsFetchPerformanceAnalysis(cpu.id, gpu.id, ram.memorySize, game.id);
  };

  if (!cpu || !gpu || !ram) return <Redirect to={Routes.MATCHER} />;

  return (
    <PageComponent selectedMenuItemNumber={MenuItems.Setup}>
      <div className={styles.gameMatcherRoot}>
        <div className={styles.content}>
          <h1 className={[sharedStyles.mainHeader, styles.pageHeader].join(' ')}>System overview</h1>
          <div className={styles.gameMatcherContentWrapper}>
            <main>
              <GameMatcherSystemOverview cpu={cpu} gpu={gpu} ram={ram} overall={performance.overall} />
              <GameMatcherPerformanceReport cpu={cpu} gpu={gpu} ram={ram} report={performance.report} />
              <GameMatcherFpsAnalysis fpsAnalysis={performance.fpsAnalysis} />
            </main>

            <div className={styles.asideItems}>
              <TopGames topGames={topGames} selected={topGameSelected} onGameSelected={onTopGameSelected} />
              <TestDifferentGame games={games} onGameChanged={onGameSelected} onInputChanged={fetchGames} />
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
  cpu: state.setupChart.cpu,
  gpu: state.setupChart.gpu,
  ram: state.setupChart.ram,
  games: state.setupChart.searchedGames,
});

const mapDispatch = {
  fetchTopGames,
  fetchPerformanceAnalysis,
  fetchGamesByName,
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RouteComponentProps;

export default connector(GameMatcherResult);

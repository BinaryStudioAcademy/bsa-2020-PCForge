import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Game } from 'common/models/game';
import { RootState } from 'redux/rootReducer';
import { fetchGames, fetchPerformanceAnalysis, selectGame } from './actions';

import Search from 'components/Search';
import { Box } from '@material-ui/core';
import ImageList from 'components/ImageList';
import Tachometer from 'components/Tachometer';
import Text from 'components/BasicComponents/Text';
import CheckIcon from '@material-ui/icons/Check';

import styles from './styles.module.scss';
import { TypeSetup } from 'containers/BuilderPage/reducer';

const QuickMatcher: React.FC<Props> = ({
  games,
  fetchGames,
  cpuId,
  gpuId,
  ramSize,
  performance,
  fetchPerformanceAnalysis,
  selectedGame,
  selectGame,
}): JSX.Element => {
  const [gameName, setGameName] = React.useState<string>('');
  const performanceValue = ((performance.overall.cpu + performance.overall.gpu + performance.overall.ram) / 3) * 10;
  const verdictTextValue = 'Recommended settings';

  React.useEffect(() => {
    fetchGames('');
  }, []);

  React.useEffect(() => {
    if (games.length > 0) selectGame(games[0]);
  }, [games]);

  React.useEffect(() => {
    if (cpuId && gpuId && ramSize && selectedGame) {
      fetchPerformanceAnalysis({ cpuId, gpuId, ramSize, gameId: selectedGame.id });
    }
  }, [selectedGame]);

  const onGameNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.currentTarget.value;
    fetchGames(newName);
    setGameName(newName);
  };

  const transformGamesToImages = (games: Game[]) => {
    const firstFiveGames = games.slice(0, Math.min(games.length, 5));
    const transformed = firstFiveGames.map((game) => ({ title: game.name, image: game.image, id: game.id }));
    return transformed;
  };

  const onGameSelect = (index: number) => {
    // mock
    // setTachometerValue((index + 1) * 10);
  };

  return (
    <Box className={styles.quickMatcher}>
      <Search value={gameName} onChange={onGameNameChange} className={styles.search} />
      <ImageList data={transformGamesToImages(games)} onImageSelect={onGameSelect} maxItemCount={5} />
      <Box className={styles.results}>
        <Tachometer value={performanceValue} maxValue={100} type={''} className={styles.tachometer} />
        <Text text={verdictTextValue} icon={<CheckIcon />} iconPosition="left" className={styles.text} />
      </Box>
    </Box>
  );
};

const mapState = (state: RootState) => ({
  games: state.quickMatcher.games,
  performance: state.quickMatcher.performance,
  cpuId: state.setup.cpu?.id,
  gpuId: state.setup.gpu?.id,
  ramSize: state.setup.ram?.memorySize,
  selectedGame: state.quickMatcher.selectedGame,
});

const mapDispatch = {
  fetchGames,
  fetchPerformanceAnalysis,
  selectGame,
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

export default connector(QuickMatcher);

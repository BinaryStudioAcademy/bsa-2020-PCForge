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
import CloseIcon from '@material-ui/icons/Close';

import styles from './styles.module.scss';
import { IFpsAnalysis } from 'common/models/setupPerformance';
import ColouredTachometer from 'components/ColouredTachometer';

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

  React.useEffect(() => {
    fetchGames('');
  }, []);

  React.useEffect(() => {
    if (games.length > 0) selectGame(games[0]);
  }, [games]);

  React.useEffect(() => {
    if (cpuId && gpuId && ramSize && selectedGame?.id > 0) {
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

  const onGameSelect = (id: number) => {
    const game = games.find((game) => game.id === id);
    if (game) selectGame(game);
  };

  const getPerformance = () => {
    const DEFAULT_RESOLUTION = [1920, 1080];
    const [, fps] = performance.fpsAnalysis.find((value) => {
      const [resolution] = value;
      return resolution[0] === DEFAULT_RESOLUTION[0] && resolution[1] === DEFAULT_RESOLUTION[1];
    }) || [[], { low: 0, medium: 0, high: 0, ultra: 0 } as IFpsAnalysis];
    if (fps.high >= 60) return { fps: fps.high, title: '60+', isPlayable: true, verdict: 'Recommended settings' };
    if (fps.low >= 60) return { fps: fps.low, title: '30', isPlayable: true, verdict: 'Minimal settings' };
    return { fps: 0, title: '<30', isPlayable: false, verdict: 'Impossible to run' };
  };
  const currentPerformance = getPerformance();

  return (
    <Box className={styles.quickMatcher}>
      <Search value={gameName} onChange={onGameNameChange} className={styles.search} />
      <ImageList data={transformGamesToImages(games)} onImageSelect={onGameSelect} maxItemCount={5} />
      <Box className={styles.results}>
        <ColouredTachometer value={currentPerformance.fps} maxValue={100} type={'FPS'} className={styles.tachometer} />
        <Text
          text={currentPerformance.verdict}
          icon={currentPerformance.isPlayable ? <CheckIcon /> : <CloseIcon />}
          iconPosition="left"
          className={styles.text}
        />
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

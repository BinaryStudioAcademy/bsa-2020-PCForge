import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Game } from 'common/models/game';
import { RootState } from 'redux/rootReducer';
import { fetchGames } from './actions';

import Search from 'components/Search';
import { Box } from '@material-ui/core';
import ImageList from 'components/ImageList';
import Tachometer from 'components/Tachometer';
import Text from 'components/BasicComponents/Text';
import CheckIcon from '@material-ui/icons/Check';

import styles from './styles.module.scss';

const QuickMatcher: React.FC<Props> = ({ games = [], fetchGames }): JSX.Element => {
  const [gameName, setGameName] = React.useState<string>('');
  const [tachometerValue, setTachometerValue] = React.useState<number>(10);

  React.useEffect(() => {
    fetchGames('');
  }, []);

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
    setTachometerValue((index + 1) * 10);
  };

  return (
    <Box className={styles.quickMatcher}>
      <Search value={gameName} onChange={onGameNameChange} className={styles.search} />
      <ImageList data={transformGamesToImages(games)} onImageSelect={onGameSelect} maxItemCount={5} />
      <Box className={styles.results}>
        <Tachometer value={tachometerValue} maxValue={100} type={''} className={styles.tachometer} />
        <Text text={'Recommended settings'} icon={<CheckIcon />} iconPosition="left" className={styles.text} />
      </Box>
    </Box>
  );
};

const mapState = (state: RootState) => ({
  games: state.quickMatcher.games,
});

const mapDispatch = {
  fetchGames,
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
  games: Game[];
  onGameInputChange: (newGameName: string) => void;
};

export default connector(QuickMatcher);

import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Game } from 'common/models/game';
import { RootState } from 'redux/rootReducer';
import { fetchGames } from './actions';

import Search from 'components/Search';
import { Box } from '@material-ui/core';
import ImageList from '../../components/ImageList';
import Tachometer from 'components/Tachometer';
import Text from '../../components/BasicComponents/Text';
import CheckIcon from '@material-ui/icons/Check';

import styles from './styles.module.scss';

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

const QuickMatcher: React.FC<Props> = ({ games = [], fetchGames }): JSX.Element => {
  const [gameName, setGameName] = React.useState<string>('');

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
    const transformed = firstFiveGames.map((game) => ({ title: game.name, image: game.image }));
    return transformed;
  };

  return (
    <Box className={styles.quickMatcher}>
      <Search value={gameName} onChange={onGameNameChange} className={styles.search} />
      <ImageList data={transformGamesToImages(games)} />
      <Box className={styles.results}>
        <Tachometer value={70} maxValue={100} type={''} className={styles.tachometer} />
        <Text text={'Recommended settings'} icon={<CheckIcon />} iconPosition="left" className={styles.text} />
      </Box>
    </Box>
  );
};

export default connector(QuickMatcher);

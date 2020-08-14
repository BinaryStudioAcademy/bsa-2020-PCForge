import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Game } from 'common/models/game';
import { RootState } from 'redux/rootReducer';
import { fetchGames } from './actions';

import Search from 'components/Search';
import { Box } from '@material-ui/core';
import ImageList from '../../components/ImageList';

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

const QuickMatcher: React.FC<Props> = ({ games = [], fetchGames: onGameInputChange }): JSX.Element => {
  const [gameName, setGameName] = React.useState<string>('');

  const onGameNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.currentTarget.value;
    onGameInputChange(newName);
    setGameName(newName);
  };

  const transformGamesToImages = (games: Game[]) => {
    const firstFiveGames = games.slice(0, Math.min(games.length, 5));
    const transformed = firstFiveGames.map((game) => ({ title: game.name, image: game.image }));
    return transformed;
  };

  return (
    <Box className={styles.quickMatcher}>
      <Search value={gameName} onChange={onGameNameChange} />
      <ImageList data={transformGamesToImages(games)} />
    </Box>
  );
};

export default connector(QuickMatcher);

import { TopGame } from 'common/models/topGame';
import React from 'react';
import styles from './styles.module.scss';
import Image from 'components/BasicComponents/Image';
import { RootState } from 'redux/rootReducer';
import { fetchTopGames } from './redux/actions';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';

const TopGames: React.FC<Props> = ({ topGames, selected: selectedIndex = -1, fetchTopGames }): JSX.Element => {
  React.useEffect(() => {
    fetchTopGames();
  }, []);

  const gameView = (topGame: TopGame, isSelected: boolean) => (
    <Link
      to={`/games/${topGame.game.id}`}
      className={`${styles.gameContainer} ${isSelected && styles.gameContainerSelected}`}
      key={topGame.id}
    >
      <Image className={styles.gameImage} src={topGame.game.image} alt={topGame.game.name} />
      <div className={styles.gameDetails}>
        <span className={styles.gameName}>{topGame.game.name}</span>
        <span className={styles.gameDate}>{topGame.game.year}</span>
      </div>
    </Link>
  );

  return (
    <aside className={styles.topGamesRoot}>
      <h2 className={styles.topGamesHeader}>Top {topGames.length} Games</h2>
      <div className={styles.topGamesContainer}>
        {topGames.map((topGame, index) => gameView(topGame, selectedIndex === index))}
      </div>
    </aside>
  );
};

const mapState = (state: RootState) => ({
  topGames: state.topGames.topGames,
});

const mapDispatch = {
  fetchTopGames,
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
  topGames: TopGame[];
  selected?: number;
  onGameSelected?: (topGame: TopGame) => void;
};

export default connector(TopGames);

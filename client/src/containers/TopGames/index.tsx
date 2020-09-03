/* eslint-disable @typescript-eslint/no-empty-function */
import { TopGame } from 'common/models/topGame';
import React from 'react';
import styles from './styles.module.scss';
import Image from 'components/BasicComponents/Image';
import { RootState } from 'redux/rootReducer';
import { fetchTopGames } from './redux/actions';
import { connect, ConnectedProps } from 'react-redux';

const TopGames: React.FC<Props> = ({
  topGames,
  selected: selectedIndex = -1,
  fetchTopGames,
  onGameSelected: onGameSelectedProps = () => {},
}): JSX.Element => {
  React.useEffect(() => {
    fetchTopGames();
  }, []);

  const gameView = (topGame: TopGame, isSelected: boolean) => (
    <div
      className={`${styles.gameContainer} ${isSelected && styles.gameContainerSelected}`}
      key={topGame.id}
      onClick={() => onGameSelectedProps(topGame)}
    >
      <Image className={styles.gameImage} src={topGame.game.image} alt={topGame.game.name} />
      <div className={styles.gameDetails}>
        <span className={styles.gameName}>{topGame.game.name}</span>
        <span className={styles.gameDate}>{topGame.game.year}</span>
      </div>
    </div>
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

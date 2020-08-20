/* eslint-disable @typescript-eslint/no-empty-function */
import { Game } from 'common/models/game';
import React from 'react';
import styles from './styles.module.scss';

interface Props {
  games: Game[];
  selected?: number;
  onGameSelected?: (game: Game) => void;
}

const TopGames: React.FC<Props> = ({
  games,
  selected: selectedIndex,
  onGameSelected: onGameSelectedProps = () => {},
}): JSX.Element => {
  const gameView = (game: Game, isSelected: boolean) => (
    <div
      className={`${styles.gameContainer} ${isSelected && styles.gameContainerSelected}`}
      key={game.id}
      onClick={() => onGameSelectedProps(game)}
    >
      <img className={styles.gameImage} src={game.image} alt={game.name}></img>
      <div className={styles.gameDetails}>
        {/* <span className={styles.gameCategory}>{game.name}</span> */}

        <span className={styles.gameName}>{game.name}</span>

        <span className={styles.gameDate}>{game.year}</span>
      </div>
    </div>
  );

  return (
    <aside className={styles.topGamesRoot}>
      <h2 className={styles.topGamesHeader}>Top {games.length} Games</h2>
      <div className={styles.topGamesContainer}>
        {games.map((game, index) => gameView(game, selectedIndex === index))}
      </div>
    </aside>
  );
};

export default TopGames;

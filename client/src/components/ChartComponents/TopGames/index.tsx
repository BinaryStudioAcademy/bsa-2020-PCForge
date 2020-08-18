import { Game } from 'common/models/game';
import React from 'react';
import styles from './styles.module.scss';

interface Props {
  games: Game[];
}

const TopGames: React.FC<Props> = ({ games }): JSX.Element => {
  const gameView = (game: Game) => (
    <div className={styles.gameContainer} key={game.id}>
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
      <h2 className={styles.topGamesHeader}>Top 5 Games</h2>
      <div className={styles.topGamesContainer}>{games.map(gameView)}</div>
    </aside>
  );
};

export default TopGames;

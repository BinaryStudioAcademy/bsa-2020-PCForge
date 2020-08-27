/* eslint-disable @typescript-eslint/no-empty-function */
import { TopGame } from 'common/models/topGame';
import React from 'react';
import styles from './styles.module.scss';
import Image from 'components/BasicComponents/Image';

interface Props {
  topGames: TopGame[];
  selected?: number;
  onGameSelected?: (topGame: TopGame) => void;
}

const TopGames: React.FC<Props> = ({
  topGames,
  selected: selectedIndex = -1,
  onGameSelected: onGameSelectedProps = () => {},
}): JSX.Element => {
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

export default TopGames;

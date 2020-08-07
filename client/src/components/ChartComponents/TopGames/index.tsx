import React from 'react';
import styles from './styles.module.scss';

interface Game {
  id: string;
  category: string;
  name: string;
  date: string;
  image: string;
}

interface Props {
  games: Game[];
}

const TopGames: React.FC<Props> = (props) => {
  const games: Game[] = getGames();

  const gameView = (game: Game) => (
    <div className={styles.gameContainer} key={game.id}>
      <img className={styles.gameImage} src={game.image} alt={Image.name}></img>
      <div className={styles.gameDetails}>
        <span className={styles.gameCategory}>{game.category}</span>

        <span className={styles.gameName}>{game.name}</span>

        <span className={styles.gameDate}>{game.date}</span>
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

function getGames() {
  return [
    {
      id: '1',
      category: 'category',
      name: 'Horizon Zero Dawn™ Complete Edition',
      date: 'Jan 13th, 2018',
      image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/header.jpg?t=1596642543',
    },
    {
      id: '2',
      category: 'category',
      name: 'Horizon Zero Dawn™ Complete Edition',
      date: 'Jan 13th, 2018',
      image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/header.jpg?t=1596642543',
    },
    {
      id: '3',
      category: 'category',
      name: 'Horizon Zero Dawn™ Complete Edition',
      date: 'Jan 13th, 2018',
      image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/header.jpg?t=1596642543',
    },
    {
      id: '4',
      category: 'category',
      name: 'Horizon Zero Dawn™ Complete Edition',
      date: 'Jan 13th, 2018',
      image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/header.jpg?t=1596642543',
    },
    {
      id: '5',
      category: 'category',
      name: 'Horizon Zero Dawn™ Complete Edition',
      date: 'Jan 13th, 2018',
      image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/header.jpg?t=1596642543',
    },
  ];
}

export default TopGames;

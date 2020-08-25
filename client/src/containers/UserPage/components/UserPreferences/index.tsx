import React from 'react';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import Link from 'components/BasicComponents/Link';
import GameCard, { GameCardProps } from '../GameCard';
import SetupCard, { SetupCardProps } from '../SetupCard';
import GamesModal from '../GamesModal';
import styles from './styles.module.scss';
import { getAllTopGames } from 'api/services/topgameService';

export interface UserPreferencesProps {
  games?: GameCardProps[];
  setups?: SetupCardProps[];
  isCurrentUser: boolean;
}

const generateKey = (pre: string, index: number) => {
  return `${pre}_${new Date().getTime()}_${index}`;
};


const handleAddGameClick = async () => {
//  const topGames = await getAllTopGames({from:0, count:5});
//  const result = topGames.data;
//  console.log(result)
}

const UserPreferences: React.FC<UserPreferencesProps> = (props) => {

  const { games, setups, isCurrentUser } = props;
  

  return (
    <>
      {games ? (
        <>
          <div className={styles.buttonPlacement}>
            {isCurrentUser && (
              <Button variant="contained" className={styles.addGameButton} buttonType={ButtonType.primary} icon="Add" onClick={handleAddGameClick} >
                Add Game
              </Button>
            )}
          </div>
          <div className={styles.userPreferences}>
            {games.map((game, index) => (
              <GameCard
                key={generateKey(game.name, index)}
                image={game.image}
                name={game.name}
                year={game.year}
                description={game.description}
              />
            ))}
          </div>
        </>
      ) : (
        ' '
      )}

      {setups ? (
        <>
          <div className={styles.buttonPlacement}>
            <Link className={styles.setupLink} icon="Build">
              Builder
            </Link>
          </div>
          <div className={styles.userPreferences}>
            {setups.map((setup, index) => (
              <SetupCard
                key={generateKey(setup.title, index)}
                image={setup.image}
                title={setup.title}
                description={setup.description}
              />
            ))}
          </div>
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default UserPreferences;

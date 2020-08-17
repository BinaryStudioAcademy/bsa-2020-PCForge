import React from 'react';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import Link from 'components/BasicComponents/Link';
import GameCard, { GameCardProps } from '../GameCard';
import SetupCard, { SetupCardProps } from '../SetupCard';
import styles from './styles.module.scss';

export interface UserPreferencesProps {
  games?: GameCardProps[];
  setups?: SetupCardProps[];
}

const generateKey = (pre: string, index: number) => {
  return `${pre}_${new Date().getTime()}_${index}`;
};

const UserPreferences: React.FC<UserPreferencesProps> = (props) => {
  const { games, setups } = props;
  return (
    <>
      {games ? (
        <>
          <div className={styles.buttonPlacement}>
            <Button variant="contained" className={styles.addGameButton} buttonType={ButtonType.primary} icon="Add">
              Add Game
            </Button>
          </div>
          <div className={styles.userPreferences}>
            {games.map((game, index) => (
              <GameCard
                key={generateKey(game.title, index)}
                image={game.image}
                title={game.title}
                releaseDate={game.releaseDate}
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

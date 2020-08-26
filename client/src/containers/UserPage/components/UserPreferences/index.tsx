import React from 'react';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import Link from 'components/BasicComponents/Link';
import GameCard, { GameCardProps } from '../GameCard';
import SetupCard, { SetupCardProps } from 'components/SquareSetupCard';
import styles from './styles.module.scss';

export interface UserPreferencesProps {
  games?: GameCardProps[];
  setups?: SetupCardProps[];
  isCurrentUser: boolean;
}

const generateKey = (pre: string, index: number) => {
  return `${pre}_${new Date().getTime()}_${index}`;
};

const UserPreferences: React.FC<UserPreferencesProps> = (props) => {
  const { games, setups, isCurrentUser } = props;
  return (
    <>
      {games ? (
        <>
          <div className={styles.buttonPlacement}>
            {isCurrentUser && (
              <Button variant="contained" className={styles.addGameButton} buttonType={ButtonType.primary} icon="Add">
                Add Game
              </Button>
            )}
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
            {setups.map((setup, index) => {
              return (
                <SetupCard
                  title={setup.title}
                  description={setup.description}
                  cpu={setup.cpu}
                  gpu={setup.gpu}
                  motherboard={setup.motherboard}
                  ram={setup.ram}
                  image={setup.image}
                  powerSupply={setup.powerSupply}
                  key={generateKey(setup.title, index)}
                />
              );
            })}
          </div>
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default UserPreferences;

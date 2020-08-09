import React from 'react';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import Link from 'components/BasicComponents/Link';
import GameCard, { GameCardProps } from '../GameCard';
import SetupCard, { SetupCardProps } from '../SetupCard';
import styles from './styles.module.scss';

console.log(styles);
export interface UserPreferencesProps {
  games?: GameCardProps[];
  setups?: SetupCardProps[];
}

const generateKey = (pre: string) => {
  return `${pre}_${new Date().getTime()}`;
};

const UserPreferences: React.FC<UserPreferencesProps> = (props) => {
  const { games, setups } = props;
  return (
    <>
      {games ? (
        <>
          <div className={styles.buttonPlacement}>
            <Button className={styles.addGameButton} buttonType={ButtonType.primary} icon="Add">
              Add Game
            </Button>
          </div>
          <div className={styles.userPreferences}>
            {games.map((game) => (
              <GameCard
                key={generateKey(game.title)}
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
            {setups.map((setup) => (
              <SetupCard
                key={generateKey(setup.title)}
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

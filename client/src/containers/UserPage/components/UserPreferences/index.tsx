import React, { useState } from 'react';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import Link from 'components/BasicComponents/Link';
import GameCard, { GameCardProps } from '../GameCard';
import SetupCard, { SetupCardProps } from '../SetupCard';
import styles from './styles.module.scss';
import { useParams } from 'react-router';
import InputBasedSelect from 'components/BasicComponents/InputBasedSelect';
import { Game } from 'common/models/typeUserGame';
import { UserActionTypes } from '../../logic/actionTypes';
import { addUserGame } from 'containers/UserPage/logic/actions';

export interface UserPreferencesProps {
  games?: GameCardProps[];
  setups?: SetupCardProps[];
  isCurrentUser: boolean;
  addUserGame?: (id: number, gameId: number) => UserActionTypes;
  deleteUserGame?: (id: number, gameId: number) => UserActionTypes;
  filteredGames?: Game[];
  loadFilteredGames?: (searchString: string) => UserActionTypes;
}

const generateKey = (pre: string, index: number) => {
  return `${pre}_${new Date().getTime()}_${index}`;
};

const UserPreferences: React.FC<UserPreferencesProps> = (props) => {
  const { games, setups, isCurrentUser, filteredGames, loadFilteredGames, addUserGame, deleteUserGame } = props;
  const [showGameSearch, setShowGameSearch] = useState(false);
  const handleAddGameClick = async () => {
    setShowGameSearch(true);
  };
  const { id: userId } = useParams();

  return (
    <>
      {games ? (
        <>
          <div className={styles.buttonPlacement}>
            {isCurrentUser && (
              <>
                {!showGameSearch && (
                  <Button
                    variant="contained"
                    className={styles.addGameButton}
                    buttonType={ButtonType.primary}
                    icon="Add"
                    onClick={handleAddGameClick}
                  >
                    Add Game
                  </Button>
                )}
                {showGameSearch && (
                  <InputBasedSelect
                    label="Game's name"
                    placeholder="Choose a game"
                    inputId="game"
                    debounceTime={300}
                    onSelect={(id: number) => addUserGame!(userId, id)}
                    options={filteredGames!.map((game) => ({ label: game.name, value: game.id }))}
                    onInputChange={({ value }) => loadFilteredGames!(value)}
                    hideSeeMore
                  />
                )}
              </>
            )}
          </div>
          <div className={styles.userPreferences}>
            {games.map((game, index) => (
              <GameCard
                key={generateKey(game.name, index)}
                image={game.image}
                id={game.id}
                name={game.name}
                year={game.year}
                description={game.description}
                isCurrentUser={isCurrentUser}
                deleteUserGame={deleteUserGame}
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

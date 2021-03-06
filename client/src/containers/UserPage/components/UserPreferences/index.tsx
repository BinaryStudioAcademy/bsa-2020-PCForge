import React, { useState } from 'react';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import GameCard, { GameCardProps } from 'containers/UserPage/components/GameCard';
import SetupCard, { SetupCardProps } from 'components/SquareSetupCard';
import styles from 'containers/UserPage/components/UserPreferences/styles.module.scss';
import { useParams } from 'react-router';
import InputBasedSelect from 'components/BasicComponents/InputBasedSelect';
import { Game } from 'common/models/typeUserGame';
import { UserActionTypes } from 'containers/UserPage/logic/actionTypes';
import { UserPageTabs } from 'containers/UserPage/interfaces';
import { Link } from 'react-router-dom';
import Modal, { IModalButton } from 'components/BasicComponents/Modal';

export interface UserPreferencesProps {
  games?: GameCardProps[];
  setups?: SetupCardProps[];
  isCurrentUser: boolean;
  addUserGame?: (id: number, gameId: number) => UserActionTypes;
  deleteFunction?: (id: number, deletedId: number) => UserActionTypes;
  editUserSetup?: (setupId: number) => UserActionTypes;
  filteredGames?: Game[];
  loadFilteredGames?: (searchString: string) => UserActionTypes;
  setTab?: (tab: UserPageTabs) => UserActionTypes;
}

const generateKey = (pre: string, index: number) => {
  return `${pre}_${new Date().getTime()}_${index}`;
};

const UserPreferences: React.FC<UserPreferencesProps> = (props) => {
  const {
    games,
    setups,
    isCurrentUser,
    filteredGames,
    loadFilteredGames,
    addUserGame,
    deleteFunction,
    editUserSetup,
    setTab,
  } = props;

  interface IModal {
    isOpen: boolean;
    // deletedType: 'game' | 'setup' | '';
    userId: number;
    itemForDeleteId: number;
    deletedName: string;
  }
  const [showModal, setShowModal] = useState<IModal>({ isOpen: false, userId: 0, itemForDeleteId: 0, deletedName: '' });

  const deleteHandler = (id: number, deletedId: number, deletedName: string) => {
    setShowModal({
      isOpen: true,
      userId: id,
      itemForDeleteId: deletedId,
      deletedName,
    });
  };

  const buttons: IModalButton[] = [
    {
      text: 'no',
      onClick: () => {
        setShowModal({
          isOpen: false,
          userId: 0,
          itemForDeleteId: 0,
          deletedName: '',
        });
      },
      buttonType: ButtonType.primary,
    },
    {
      text: 'yes',
      onClick: () => {
        deleteFunction?.apply(deleteFunction, [showModal.userId, showModal.itemForDeleteId]);
      },
      buttonType: ButtonType.secondary,
    },
  ];

  const [showGameSearch, setShowGameSearch] = useState(false);
  const handleAddGameClick = async () => {
    setShowGameSearch(true);
  };
  const { id: userId } = useParams<{ id: string }>();

  const closeGameSearch = () => {
    setShowGameSearch(false);
  };

  return (
    <>
      <Modal
        title={`Are you sure you want to delete "${showModal.deletedName}?"`}
        open={showModal.isOpen}
        buttons={buttons}
        maxWidth="md"
        classes={{ paper: styles.modalStyle }}
      />
      {games ? (
        <>
          <div className={styles.buttonPlacement}>
            {isCurrentUser && (
              <>
                {!showGameSearch && (
                  <Button
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
                    onSelect={(id: number) => addUserGame!(parseInt(userId, 10), id)}
                    options={filteredGames!.map((game) => ({ label: game.name, value: game.id }))}
                    onInputChange={({ value }) => loadFilteredGames!(value)}
                    onCloseCallback={closeGameSearch}
                    withClose
                    showCloseAlways
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
                deleteUserGame={deleteHandler}
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
            <Link className={styles.setupLink} to="/builder">
              <Button className={styles.builderButton} icon="Build" buttonType={ButtonType.secondary}>
                Go To Builder
              </Button>
            </Link>
          </div>
          <div className={styles.userPreferences}>
            {setups.map((setup, index) => {
              return (
                <SetupCard
                  id={setup.id}
                  title={setup.title}
                  description={setup.description}
                  cpu={setup.cpu}
                  gpu={setup.gpu}
                  motherboard={setup.motherboard}
                  ram={setup.ram}
                  image={setup.image}
                  createdAt={setup.createdAt}
                  powerSupply={setup.powerSupply}
                  author={setup.author}
                  rating={setup.rating}
                  ownRating={setup.ownRating}
                  ratingCount={setup.ratingCount}
                  comments_count={setup.comments_count}
                  key={generateKey(setup.title, index)}
                  deleteUserSetup={deleteHandler}
                  editUserSetup={editUserSetup}
                  own={isCurrentUser}
                  setTab={setTab}
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

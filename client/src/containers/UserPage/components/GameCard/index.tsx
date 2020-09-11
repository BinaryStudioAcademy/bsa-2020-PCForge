import React from 'react';
import styles from './styles.module.scss';
import { UserActionTypes } from 'containers/UserPage/logic/actionTypes';
import { useParams } from 'react-router';
import Image from 'components/BasicComponents/Image';
import { Link } from 'react-router-dom';
import { getIcon } from 'common/helpers/icon.helper';
import { Box } from '@material-ui/core';

export interface GameCardProps {
  image: string;
  id?: number;
  name: string;
  year?: number;
  description?: string;
  isCurrentUser?: boolean;
  deleteUserGame?: (id: number, gameId: number) => void;
}

const GameCard: React.FC<GameCardProps> = ({ image, name, year, description, isCurrentUser, id, deleteUserGame }) => {
  let { id: userId } = useParams();
  userId = parseInt(userId);

  const handleDeleteGame: (event: React.MouseEvent) => void = (event: React.MouseEvent) => {
    event.preventDefault();
    if (deleteUserGame && typeof id == 'number') {
      deleteUserGame(userId, id);
    }
  };

  return (
    <Link to={`/game/${id}`} className={styles.gameCard}>
      <div className={styles.gameImage}>
        <Image src={image} alt="" />
      </div>
      <div className={styles.gameFooter}>
        <div className={styles.gameTitle}>{name}</div>
        <div>{year}</div>
      </div>
      {description && (
        <div className={styles.gameDescription}>
          <div className={styles.backName}>{name}</div>
          <div>{description}</div>
          {isCurrentUser && (
            <div className={styles.cardButton}>
              <Box onClick={handleDeleteGame}>{getIcon('Delete')}</Box>
            </div>
          )}
        </div>
      )}
    </Link>
  );
};

export default GameCard;

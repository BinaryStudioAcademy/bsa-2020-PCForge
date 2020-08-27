import React from 'react';
import styles from './styles.module.scss';
import Link from 'components/BasicComponents/Link';
import { UserActionTypes } from '../../logic/actionTypes';
import { useParams } from 'react-router';
import { deleteUserGame } from 'api/services/userService';
import Image from 'components/BasicComponents/Image';

export interface GameCardProps {
  image: string;
  id?: number;
  name: string;
  year?: number;
  description?: string;
  isCurrentUser?: boolean;
  deleteUserGame?: (id: number, gameId: number) => UserActionTypes;
}

const GameCard: React.FC<GameCardProps> = ({ image, name, year, description, isCurrentUser, id, deleteUserGame }) => {
  let { id: userId } = useParams();
  userId = parseInt(userId);
  console.log(id);

  const handleDeleteGame: () => void = () => {
    if (deleteUserGame && typeof id == 'number') {
      deleteUserGame(userId, id);
    }
  };

  return (
    <div className={styles.gameCard}>
      <div className={styles.gameImage}>
        <Image src={image} alt="" />
      </div>
      <div className={styles.gameFooter}>
        <div className={styles.gameTitle}>{name}</div>
        <div>{year}</div>
      </div>
      {description && (
        <div className={styles.gameDescription}>
          <div>{description}</div>
          {isCurrentUser && (
            <div className={styles.cardButton}>
              <Link icon="Delete" onClick={handleDeleteGame}></Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GameCard;

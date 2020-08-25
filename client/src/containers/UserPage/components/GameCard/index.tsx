import React from 'react';
import styles from './styles.module.scss';
import Link from 'components/BasicComponents/Link';

export interface GameCardProps {
  image: string;
  name: string;
  year?: number;
  description?: string;
  isCurrentUser?: boolean;
}

const GameCard: React.FC<GameCardProps> = ({ image, name, year, description, isCurrentUser }) => {
  return (
    <div className={styles.gameCard}>
      <div className={styles.gameImage}>
        <img src={image} alt="" />
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
              <Link icon="Delete"></Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GameCard;

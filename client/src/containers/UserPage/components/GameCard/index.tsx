import React from 'react';
import styles from './styles.module.scss';

export interface GameCardProps {
  image: string;
  name: string;
  year?: number;
  description?: string;
}

const GameCard: React.FC<GameCardProps> = ({ image, name, year, description }) => {
  return (
    <div className={styles.gameCard}>
      <div className={styles.gameImage}>
        <img src={image} alt="" />
      </div>
      <div className={styles.gameFooter}>
        <div className={styles.gameTitle}>{name}</div>
        <div>{year}</div>
      </div>
      {description && <div className={styles.gameDescription}>
        <div>{description}</div>
        </div>}
    </div>
  );
};

export default GameCard;

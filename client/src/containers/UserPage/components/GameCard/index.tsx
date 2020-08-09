import React from 'react';
import styles from './styles.module.scss';

export interface GameCardProps {
  image: string;
  title: string;
  releaseDate?: string;
  description?: string;
}

const GameCard: React.FC<GameCardProps> = ({ image, title, releaseDate, description }) => {
  return (
    <div className={styles.gameCard}>
      <div className={styles.gameImage}>
        <img src={image} alt="" />
      </div>
      <div className={styles.gameFooter}>
        <div className={styles.gameTitle}>{title}</div>
        <div>{releaseDate}</div>
      </div>
      {description && <div className={styles.gameDescription}>{description}</div>}
    </div>
  );
};

export default GameCard;

import React from 'react';
import styles from './styles.module.scss';
import RatingBox from 'components/RatingBox';
import Button, { ButtonType } from 'components/BasicComponents/Button';

export interface SetupCardProps {
  image: string;
  title: string;
  description: string;
  big?: boolean;
  className?: string;
}

const SetupCard: React.FC<SetupCardProps> = ({ image, title, description, big, className }) => {
  let setupStyle = styles.setupCard;
  if (className) {
    setupStyle += ` ${className}`;
  }
  if (big) {
    setupStyle += ` ${styles.bigCard}`;
  }

  return (
    <div className={setupStyle}>
      <div className={styles.setupImage}>
        <img src={image} alt="" />
      </div>
      <div className={styles.setupTitle}>{title}</div>
      <RatingBox ratingValue={5} disabled={false} name={title} />

      <div className={styles.setupBack}>
        <div className={styles.setupDescription}>{description}</div>
        <Button icon="ArrowForward" buttonType={ButtonType.primary}>
          Find Out More
        </Button>
      </div>
    </div>
  );
};

export default SetupCard;

import React from 'react';
import styles from './styles.module.scss';
import Button, { ButtonType } from 'components/BasicComponents/Button';

export interface SetupCardProps {
  image: string;
  title: string;
  description?: string;
  className?: string;
}

const SetupCard: React.FC<SetupCardProps> = ({ image, title, description, className }) => {
  const setupStyle = styles.setupCard + (` ${className}` || '');
  return (
    <div className={setupStyle}>
      <div className={styles.setupTitle}>{title}</div>
      <div className={styles.setupImage}>
        <img src={image} alt="" />
      </div>
      <div className={styles.setupDescription}>{description}</div>
      <Button icon="Build" buttonType={ButtonType.secondary}>
        Go to Setup
      </Button>
    </div>
  );
};

export default SetupCard;

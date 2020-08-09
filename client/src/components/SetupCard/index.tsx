import React from 'react';
import classes from './styles.module.scss';
import Button, { ButtonType } from 'components/BasicComponents/Button';

interface I_Props {
  imageSource: string;
  setupName: string;
  processor: string;
  gpu: string;
  ram: string;
}

const SetupCard: React.FC<I_Props> = ({ imageSource, setupName, processor, gpu, ram }) => {
  return (
    <div className={classes.setupCard}>
      <img className={classes.setupCardImage} src={imageSource} alt={setupName} />
      <ul className={classes.characteristicList}>
        <li className={classes.characteristicItem}>
          <span className={classes.characteristicHeader}>Processor:</span>
          <span className={classes.characteristicValue}>{processor}</span>
        </li>
        <li className={classes.characteristicItem}>
          <span className={classes.characteristicHeader}>GPU:</span>
          <span className={classes.characteristicValue}>{gpu}</span>
        </li>
        <li className={classes.characteristicItem}>
          <span className={classes.characteristicHeader}>RAM:</span>
          <span className={classes.characteristicValue}>{ram}</span>
        </li>
      </ul>
      <Button className={classes.setupCardButton} buttonType={ButtonType.primary}>
        VIEW MORE INFO
      </Button>
    </div>
  );
};

export default SetupCard;

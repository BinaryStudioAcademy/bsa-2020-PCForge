import React from 'react';
import classes from './styles.module.scss';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import RatingBox from 'components/RatingBox';
import ModeCommentIcon from '@material-ui/icons/ModeComment';

interface I_Props {
  imageSource: string;
  setupName: string;
  processor: string;
  comments: number;
  rating: number;
  gpu: string;
  ram: string;
}

const SetupCard: React.FC<I_Props> = ({ imageSource, setupName, processor, gpu, ram, rating, comments }) => {
  return (
    <div className={classes.setupCard}>
      <img className={classes.setupCardImage} src={imageSource} alt={setupName} />
      <ul className={classes.characteristicList}>
        <li className={classes.commentItem}>
          {/* <span className={classes.characteristicHeader}>Number Of components:</span> */}
          <span className={classes.commentItemValue}>{comments}</span>
          <ModeCommentIcon fontSize="small" />
        </li>
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
      <RatingBox ratingValue={rating} disabled={false} />
      <Button className={classes.setupCardButton} buttonType={ButtonType.primary}>
        VIEW MORE INFO
      </Button>
    </div>
  );
};

export default SetupCard;
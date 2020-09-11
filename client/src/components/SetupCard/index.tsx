import React from 'react';
import classes from './styles.module.scss';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import RatingBox from 'components/BasicComponents/RatingBox';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import { Cpu } from 'common/models/cpu';
import { Link } from 'react-router-dom';
import { Routes } from 'common/enums';
import Image from 'components/BasicComponents/Image';

interface I_Props {
  id: number;
  imageSource: string;
  setupName: string;
  processor: string;
  gpu: string;
  ram: string;
  comments: number;
  rating: number;
}

const SetupCard: React.FC<I_Props> = ({ id, imageSource, setupName, processor, gpu, ram, comments, rating }) => {
  return (
    <div className={classes.setupCard}>
      <Image className={classes.setupCardImage} src={imageSource} alt={setupName} />
      <div className={classes.ratingBox}>
        <RatingBox name={String(id)} ratingValue={rating} disabled={true} />
      </div>
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
        <li className={classes.commentItem}>
          <span className={classes.commentItemValue}>{comments}</span>
          <ModeCommentIcon fontSize="small" />
        </li>
      </ul>
      <Link className={classes.viewMoreButton} to={`setup/${id}`}>
        <Button className={classes.setupCardButton} buttonType={ButtonType.primary}>
          VIEW MORE
        </Button>
      </Link>
    </div>
  );
};

export default SetupCard;

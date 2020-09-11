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
  name: string;
  processor: string;
  gpu: string;
  ram: string;
  comments: number;
  rating: number;
  type: 'setup' | 'games';
}

const Card: React.FC<I_Props> = ({ id, imageSource, name: name, processor, gpu, ram, comments, rating, type }) => {
  return (
    <div className={classes.setupCard}>
      <Image className={classes.setupCardImage} src={imageSource} alt={name} />
      <div className={classes.gameName}>{name}</div>
      <div className={classes.ratingBox}>
        <RatingBox name={String(id)} ratingValue={rating} disabled={true} />
      </div>
      <ul className={classes.characteristicList}>
        <li className={classes.characteristicItem}>
          <span className={classes.characteristicHeader}>{type === 'setup' ? 'Processor:' : 'Min CPU:'}</span>
          <span className={classes.characteristicValue}>{processor}</span>
        </li>
        <li className={classes.characteristicItem}>
          <span className={classes.characteristicHeader}>{type === 'setup' ? 'GPU:' : 'Min GPU:'}</span>
          <span className={classes.characteristicValue}>{gpu}</span>
        </li>
        <li className={classes.characteristicItem}>
          <span className={classes.characteristicHeader}>{type === 'setup' ? 'RAM:' : 'Min RAM Size:'}</span>
          <span className={classes.characteristicValue}>{`${ram}${type === 'games' ? ' GB' : ''}`}</span>
        </li>
        <li className={classes.commentItem}>
          <span className={classes.commentItemValue}>{comments}</span>
          <ModeCommentIcon fontSize="small" />
        </li>
      </ul>
      <Link className={classes.viewMoreButton} to={`${type}/${id}`}>
        <Button className={classes.setupCardButton} buttonType={ButtonType.primary}>
          VIEW MORE
        </Button>
      </Link>
    </div>
  );
};

export default Card;

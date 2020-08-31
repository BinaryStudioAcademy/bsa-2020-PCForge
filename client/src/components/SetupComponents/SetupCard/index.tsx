import React from 'react';
import { PCSetup } from 'common/models/setup';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import RatingBox from 'components/BasicComponents/RatingBox';
import styles from './styles.module.scss';
import ZoomImage from 'components/ZoomImage';
import defaultSetupImage from 'assets/images/defaultSetup.jpg';

interface Props {
  setup: PCSetup;
  rate: number;
  onRatingSet: (value: number) => void;
}

const SetupCard: React.FC<Props> = (props): JSX.Element => {
  const { onRatingSet } = props;
  const { title, description, image } = props.setup;
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <ZoomImage src={image} alt={title} rootClassName={styles.setupImage} fallbackImage={defaultSetupImage} />
      </div>
      <div className={styles.cardContentWrapper}>
        <CardHeader title={title} className={styles.contentHeader} />
        <div className={styles.cardContent}>
          <Typography className={styles.cardText}>{description}</Typography>
          <div className={styles.ratingBoxWrapper}>
            <RatingBox name="setup-card" ratingValue={props.rate} disabled={false} onValueSet={onRatingSet} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupCard;

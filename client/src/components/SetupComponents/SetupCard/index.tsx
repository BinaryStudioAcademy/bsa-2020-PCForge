import React from 'react';
import { PCSetup } from 'common/models/setup';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import RatingBox from 'components/RatingBox';
import styles from './styles.module.scss';
import ZoomImage from 'components/ZoomImage';

interface Props {
  setup: PCSetup;
}

const SetupCard: React.FC<Props> = (props): JSX.Element => {
  const { title, description, image, rating } = props.setup;
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <ZoomImage src={image} alt={title} rootClassName={styles.setupImage} />
      </div>
      <div className={styles.cardContentWrapper}>
        <CardHeader title={title} className={styles.contentHeader} />
        <div className={styles.cardContent}>
          <Typography className={styles.cardText}>{description}</Typography>
          <div className={styles.ratingBoxWrapper}>
            <RatingBox ratingValue={rating} disabled={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupCard;

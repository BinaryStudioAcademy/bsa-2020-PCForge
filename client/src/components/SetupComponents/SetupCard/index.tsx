import React from 'react';
import { PCSetup } from 'common/models/setup';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import RatingBox from 'components/RatingBox';
import styles from './styles.module.scss';
import ZoomImage from 'components/ZoomImage';
import { Container, Grid } from '@material-ui/core';

interface Props {
  setup: PCSetup;
}

const SetupCard: React.FC<Props> = (props): JSX.Element => {
  const { title, description, rating, image } = props.setup;
  return (
    <Grid className={styles.card}>
      <Grid item xs={12} container alignItems="center">
        <CardHeader title={title} className={styles.contentHeader} />
        <div className={styles.ratingBox}>
          <RatingBox name="setup-card" ratingValue={rating} disabled={false} />
        </div>
      </Grid>
      <Grid item xs={12} container justify="center" className={styles.imageWrapper}>
        <ZoomImage src={image} alt={title} rootClassName={styles.setupImage} />
      </Grid>
      <Grid item xs={12} container className={styles.cardContent}>
        <Container>
          <Typography className={styles.cardText}>{description}</Typography>
        </Container>
      </Grid>
    </Grid>
  );
};

export default SetupCard;

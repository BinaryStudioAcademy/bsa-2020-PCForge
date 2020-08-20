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
  rate: number;
  onRatingSet: (value: number) => void;
}

const SetupCard: React.FC<Props> = (props): JSX.Element => {
  const { onRatingSet } = props;
  const { title, description, image } = props.setup;
  return (
    <Grid className={styles.card}>
      <Grid item xs={12} container alignItems="center">
        <CardHeader title={title} className={styles.contentHeader} />
        <div className={styles.ratingBox}>
          <RatingBox name="setup-card" ratingValue={props.rate} disabled={false} onValueSet={onRatingSet} />
        </div>
      </Grid>
      <Grid item xs={12} container justify="center" className={styles.imageWrapper}>
        <ZoomImage
          src={
            'https://i.guim.co.uk/img/media/c6f7b43fa821d06fe1ab4311e558686529931492/168_84_1060_636/master/1060.jpg?width=1200&quality=85&auto=format&fit=max&s=5c5b07b8cc96af633881fb903fb14a83'
          }
          alt={title}
          rootClassName={styles.setupImage}
        />
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

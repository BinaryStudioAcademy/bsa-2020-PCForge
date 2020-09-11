import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonAdd from 'components/BuilderPage/ButtonAdd';
import RatingBox from 'components/BasicComponents/RatingBox';
import styles from './styles.module.scss';
import defaultImg from 'assets/images/defaultImgComponent.png';

type PropsType = {
  img?: string;
  title: string;
  rating?: number;
  specifications: JSX.Element;
  onAddComponent: () => void;
  isSelected: boolean;
};

const ListComponentsItem = ({
  img = defaultImg,
  title,
  rating = 0,
  specifications,
  onAddComponent,
  isSelected,
}: PropsType): JSX.Element => {
  const getRating = () => Math.floor(Math.random() * 6);
  return (
    <Paper className={styles.componentItem}>
      <div className={styles.main}>
        <Typography variant="h5" component="h5">
          {title}
        </Typography>
        {specifications}
        <div className={styles.rating}>
          <RatingBox ratingValue={getRating()} disabled={true} name={title} />
        </div>
      </div>
      <ButtonAdd className={styles.btnAdd} isSelected={isSelected} onClick={onAddComponent} />
    </Paper>
  );
};

export default ListComponentsItem;

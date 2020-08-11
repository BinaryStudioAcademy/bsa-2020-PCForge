import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonAdd from '../ButtonAdd';
// import { RatingBox } from '../../RatingBox';
import styles from './styles.module.scss';
import defaultImg from './default.png';

type PropsType = {
  img?: string;
  title: string;
  rating?: number;
  specifications: JSX.Element;
  onAddComponent: () => void;
};

const ListComponentsItem = ({
  img = defaultImg,
  title,
  rating = 0,
  specifications,
  onAddComponent,
}: PropsType): JSX.Element => {
  return (
    <Paper className={styles.componentItem}>
      <img className={styles.img} src={img} alt="Image component" />
      <div className={styles.main}>
        <Typography variant="h5" component="h5">
          {title}
        </Typography>
        {specifications}
        {/*{RatingBox(3, false)}*/}
      </div>
      <ButtonAdd className={styles.btnAdd} onClick={onAddComponent} />
    </Paper>
  );
};

export default ListComponentsItem;
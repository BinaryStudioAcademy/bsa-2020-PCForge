import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import ButtonAdd from 'components/BuilderPage/ButtonAdd';
import AddRemoveButtons from 'components/BuilderPage/AddRemoveButtons';
import RatingBox from 'components/RatingBox';
import styles from './styles.module.scss';
import defaultImg from 'assets/images/defaultImgComponent.png';

type PropsType = {
  img?: string;
  id: number;
  selectedComponentId: number | undefined;
  title: string;
  rating?: number;
  specifications: JSX.Element;
  isRam: boolean;
  onAddComponent: () => void;
  setRamCapacity: (value: number) => void;
  ramCapacity: string;
};

const ListComponentsItem = ({
  id,
  selectedComponentId,
  img = defaultImg,
  isRam,
  title,
  rating = 0,
  specifications,
  onAddComponent,
  setRamCapacity,
  ramCapacity,
}: PropsType): JSX.Element => {
  const isComponentSelected = isRam && id === selectedComponentId;
  return (
    <Paper className={styles.componentItem}>
      <img className={styles.img} src={img} alt="Image component" />
      <div className={styles.main}>
        <Typography variant="h5" component="h5">
          {title}
        </Typography>
        {specifications}
        <div className={styles.rating}>
          <RatingBox ratingValue={3} disabled={false} name={title} />
        </div>
      </div>
      {isComponentSelected ? (
        <AddRemoveButtons count={parseInt(ramCapacity)} setCount={setRamCapacity} />
      ) : (
        <ButtonAdd className={styles.btnAdd} onClick={onAddComponent} />
      )}
    </Paper>
  );
};

export default ListComponentsItem;

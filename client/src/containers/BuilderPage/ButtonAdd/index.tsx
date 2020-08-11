import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import styles from './styles.module.scss';

type PropsType = {
  onClick?: () => void;
  className?: string;
};

const ButtonAdd = ({ onClick, className = '' }: PropsType): JSX.Element => {
  return (
    <IconButton className={className} classes={styles} aria-label="add" onClick={onClick}>
      <AddIcon fontSize="large" />
    </IconButton>
  );
};

export default ButtonAdd;

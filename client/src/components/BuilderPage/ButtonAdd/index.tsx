import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import CheckIcons from '@material-ui/icons/Check';
import styles from './styles.module.scss';

type PropsType = {
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
};

const ButtonAdd = ({ isSelected = false, onClick, className = '' }: PropsType): JSX.Element => {
  return (
    // <IconButton className={className} classes={styles} aria-label="add" onClick={onClick}>
    <IconButton
      className={className}
      classes={{ root: isSelected ? styles.selected : styles.root }}
      disabled={isSelected}
      aria-label="add"
      onClick={onClick}
    >
      {/*<AddIcon fontSize="large" />*/}
      {/*<CheckIcons fontSize="large" />*/}
      {isSelected ? <CheckIcons fontSize="large" /> : <AddIcon fontSize="large" />}
    </IconButton>
  );
};

export default ButtonAdd;

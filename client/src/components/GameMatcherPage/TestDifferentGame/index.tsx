import React from 'react';
import styles from './styles.module.scss';
import Select from 'components/basicComponents/Select';
import Button, { ButtonType } from 'components/basicComponents/Button';

const TestDifferentGame = () => {
  return (
    <aside className={styles.mainContainer}>
      <h3 className={styles.mainHeader}>Test different game</h3>
      <Select inputOptions={[{ title: 'Lorem Ipsum', value: 0 }]} inputLabel="Game's name"></Select>
      <Button buttonType={ButtonType.primary}>Test this game</Button>
    </aside>
  )
}

export default TestDifferentGame;

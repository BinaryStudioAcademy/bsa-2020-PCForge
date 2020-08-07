import React from 'react';
import Select from 'components/basicComponents/Select';
import Button, { ButtonType } from 'components/basicComponents/Button';
import styles from './styles.module.scss';

const TestDifferentSystem = () => {
  return (
    <aside className={styles.mainContainer}>
      <h3 className={styles.mainHeader}>Test different game</h3>
      <div>
        <Select inputOptions={[{ title: 'Lorem Ipsum', value: 0 }]} inputLabel="CPU"></Select>
      </div>
      <div>
        <Select inputOptions={[{ title: 'Lorem Ipsum', value: 0 }]} inputLabel="GPU"></Select>
      </div>
      <Button buttonType={ButtonType.primary}>Test this game</Button>
    </aside>
  );
}


export default TestDifferentSystem;

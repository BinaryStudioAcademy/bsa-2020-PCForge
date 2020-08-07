import React from 'react';
import Select from 'components/BasicComponents/Select';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import styles from './styles.module.scss';

const TestDifferentSystem = () => {
  return (
    <aside className={styles.mainContainer}>
      <h3 className={styles.mainHeader}>Test Different System</h3>
      <Select inputOptions={[{ title: 'Lorem Ipsum', value: 0 }]} inputLabel="CPU" className={styles.select} />
      <Select
        inputOptions={[{ title: 'Lorem Ipsum', value: 0 }]}
        inputLabel="GPU"
        labelClassName={styles.selectLabel}
        className={styles.select}
      ></Select>
      <Button buttonType={ButtonType.primary}>Test this game</Button>
    </aside>
  );
};

export default TestDifferentSystem;

import React from 'react';

import styles from './styles.module.scss';
import Button, { ButtonType } from 'components/basicComponents/Button';
import Select from 'components/basicComponents/Select';

// const mockDataCallback = async () => ([{value: 'example', title: 'example'}]);
const mockData = [{ value: 'example', title: 'example' }];

const GameMatcherPage = (): JSX.Element => {
  return (
    <main className={styles.gameMatcher} role="main">
      <h1 className={styles.pageHeader}>Can You Run It?</h1>
      <div className={styles.mainContainer}>
        <div className={styles.configs}>
          <section>
            <h2 className={styles.sectionHeader}>Choose a Game</h2>
            <div className={styles.selectItem}>
              {/* <label htmlFor="game-select" className={styles['selectItemHeader']}>
                Game's name
              </label> */}
              <Select inputLabel="Game's name" inputOptions={mockData} placeholder="Select a game">
                {' '}
              </Select>
            </div>
          </section>
          <section>
            <h2 className={styles.sectionHeader}>Your Computer Hardware</h2>
            <div className={styles.selectItem}>
              {/* <label htmlFor="processor-select" className={styles['selectItemHeader']}>
                Processor
              </label> */}
              <Select inputLabel="Processor" inputOptions={mockData} placeholder="Select"></Select>
            </div>
            <div className={styles.selectItem}>
              {/* <label htmlFor="cpu-select" className={styles['selectItemHeader']}>
                CPU
              </label> */}
              <Select inputLabel="CPU" inputOptions={mockData} placeholder="Select"></Select>
            </div>
            <div className={styles.selectItem}>
              {/* <label htmlFor="gpu-select" className={styles.selectItemHeader}>
                GPU
              </label> */}
              <Select inputLabel="GPU" inputOptions={mockData} placeholder="Select"></Select>
            </div>
          </section>
          <Button buttonType={ButtonType.primary}>Can I Run It</Button>
        </div>
      </div>
    </main>
  );
};

export default GameMatcherPage;

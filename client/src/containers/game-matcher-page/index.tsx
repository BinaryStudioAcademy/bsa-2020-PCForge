import React from 'react';

import styles from './styles.module.scss';

const GameMatcherPage = () => {
  return (
    <main className={styles['game-matcher']} role="main">
      <h1 className={styles['page-header']}>Can You Run It?</h1>
      <div className={styles['main-container']}>
        <div>
          <section>
            <h2 className={styles['section-header']}>Choose a Game</h2>
            <div className={styles['select-item']}>
              <label htmlFor="game-select" className={styles['select-item-header']}>
                Game's name
              </label>
              <select id="game-select">
                <option selected>example</option>
              </select>
            </div>
          </section>
          <section>
            <h2 className={styles['section-header']}>Your Computer Hardware</h2>
            <div className={styles['select-item']}>
              <label htmlFor="processor-select" className={styles['select-item-header']}>
                Processor
              </label>
              <select id="processor-select">
                <option selected>example</option>
              </select>
            </div>
            <div className={styles['select-item']}>
              <label htmlFor="cpu-select" className={styles['select-item-header']}>
                CPU
              </label>
              <select id="cpu-select">
                <option selected>example</option>
              </select>
            </div>
            <div className={styles['select-item']}>
              <label htmlFor="gpu-select" className={styles['select-item-header']}>
                GPU
              </label>
              <select id="gpu-select">
                <option selected>example</option>
              </select>
            </div>
          </section>
          <button>Can I Run It</button>
        </div>
      </div>
    </main>
  );
};

export default GameMatcherPage;

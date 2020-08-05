import React from 'react';

import styles from './styles.module.scss';

const GameMatcherPage = () => {
  return (
    <div className={styles['game-matcher']}>
      <h2 className={styles['page-header']}>Can You Run It?</h2>
      <div className={styles['main-container']}>
        <div>
          <section>
            <h3 className={styles['section-header']}>Choose a Game</h3>
            <div className={styles['select-item ']}>
              <h4 className={styles['select-item-header']}>Game's name</h4>
              <select>
                <option selected>example</option>
              </select>
            </div>
          </section>
          <section>
            <h3 className={styles['section-header']}>Your Computer Hardware</h3>
            <div className={styles['select-item ']}>
              <h4 className={styles['select-item-header']}>Processor</h4>
              <select>
                <option selected>example</option>
              </select>
            </div>
            <div className={styles['select-item ']}>
              <h4 className={styles['select-item-header']}>CPU</h4>
              <select>
                <option selected>example</option>
              </select>
            </div>
            <div className={styles['select-item ']}>
              <h4 className={styles['select-item-header']}>GPU</h4>
              <select>
                <option selected>example</option>
              </select>
            </div>
          </section>
          <button>Can I Run It</button>
        </div>
      </div>
    </div>
  );
};

export default GameMatcherPage;

import React from 'react';

import styles from './styles.module.scss';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import Select from 'components/BasicComponents/Select';
import TopGames from 'components/ChartComponents/TopGames';
import PageComponent from '../PageComponent';
import { MenuItems } from 'common/enums';
// const mockDataCallback = async () => ([{value: 'example', title: 'example'}]);
const mockData = [{ value: 'example', title: 'example' }];

const GameMatcherPage = (): JSX.Element => {
  return (
    <PageComponent selectedMenuItemNumber={MenuItems.GameMatcher}>
      <main className={styles.gameMatcher} role="main">
        <h1 className={styles.pageHeader}>Can You Run It?</h1>
        <div className={styles.contentWrapper}>
          <div className={styles.mainContainer}>
            <div className={styles.configs}>
              <section>
                <h2 className={styles.sectionHeader}>Choose a Game</h2>
                <div className={styles.selectItem}>
                  <Select
                    inputLabel="Game's name"
                    inputOptions={mockData}
                    placeholder="Select a game"
                    labelClassName={styles.selectItemHeader}
                  >
                    {' '}
                  </Select>
                </div>
              </section>
              <section>
                <h2 className={styles.sectionHeader}>Your Computer Hardware</h2>
                <div className={styles.selectItem}>
                  <Select
                    inputLabel="Processor"
                    inputOptions={mockData}
                    placeholder="Select"
                    labelClassName={styles.selectItemHeader}
                  ></Select>
                </div>
                <div className={styles.selectItem}>
                  <Select
                    inputLabel="CPU"
                    inputOptions={mockData}
                    placeholder="Select"
                    labelClassName={styles.selectItemHeader}
                  ></Select>
                </div>
                <div className={styles.selectItem}>
                  <Select
                    inputLabel="GPU"
                    inputOptions={mockData}
                    placeholder="Select"
                    labelClassName={styles.selectItemHeader}
                  ></Select>
                </div>
              </section>
              <Button
                buttonType={ButtonType.primary}
                className={styles.pageButton}
                classes={{ label: styles.buttonLabel }}
              >
                Can I Run It
              </Button>
            </div>
          </div>
          <TopGames games={[]} />
        </div>
      </main>
    </PageComponent>
  );
};

export default GameMatcherPage;

import React, { useState } from 'react';

import styles from './styles.module.scss';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import TopGames from 'components/ChartComponents/TopGames';
import PageComponent from '../PageComponent';
import { MenuItems } from 'common/enums';
import InputBasedSelect from 'components/BasicComponents/InputBasedSelect';
import * as actions from './actions';
import { RootState } from 'redux/rootReducer';
import { connect } from 'react-redux';
import { GameMatcherProps } from './interfaces';
import { getAllGames } from 'api/services/gamesService';

const GameMatcherPage = (props: GameMatcherProps): JSX.Element => {
  const { setGames, getGames, setCPUS, getCPUS, setGPUS, getGPUS, setRAMS, getRAMS } = props;
  const { gamesErrorMessage, ramsErrorMessage, cpusErrorMessage, gpusErrorMessage } = props.state;

  const [selectedGame, setSelectedGame] = useState<number | null>(null);
  const [selectedRam, setSelectedRam] = useState<number | null>(null);
  const [selectedCpu, setSelectedCpu] = useState<number | null>(null);
  const [selectedGpu, setSelectedGpu] = useState<number | null>(null);

  const gameOptions = props.state.games.map((game) => ({ label: game.name, value: game.id }));
  const ramOptions = props.state.rams.map((ram) => ({ label: ram.name, value: ram.id }));
  const cpuOptions = props.state.cpus.map((cpu) => ({ label: cpu.name, value: cpu.id }));
  const gpuOptions = props.state.gpus.map((gpu) => ({ label: gpu.name, value: gpu.id }));

  const onTestGame = async () => {
    const games = await getAllGames({});
    if (selectedRam && selectedCpu && selectedGpu) {
      console.log('success');
    }
  };

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
                  <InputBasedSelect
                    label="Game's name"
                    placeholder="Choose a game"
                    inputId="game"
                    options={gameOptions}
                    errorMessage={gamesErrorMessage}
                    labelClassName={styles.selectItemHeader}
                    onInputChange={() => setGames([]) && getGames({ count: 20 })}
                    onSelect={(id: number) => setSelectedGame(id)}
                    onSeeMoreClick={({ itemsCount }) => getGames({ count: 20, from: itemsCount })}
                  />
                </div>
              </section>
              <section>
                <h2 className={styles.sectionHeader}>Your Computer Hardware</h2>
                <div className={styles.selectItem}>
                  <InputBasedSelect
                    label="RAM"
                    placeholder="Choose a RAM"
                    inputId="ram"
                    options={ramOptions}
                    errorMessage={ramsErrorMessage}
                    labelClassName={styles.selectItemHeader}
                    onInputChange={() => setRAMS([]) && getRAMS({ count: 20 })}
                    onSelect={(id: number) => setSelectedRam(id)}
                    onSeeMoreClick={({ itemsCount }) => getRAMS({ count: 20, from: itemsCount })}
                  />
                </div>
                <div className={styles.selectItem}>
                  <InputBasedSelect
                    label="CPU"
                    placeholder="Choose a processor"
                    inputId="cpu"
                    options={cpuOptions}
                    errorMessage={cpusErrorMessage}
                    labelClassName={styles.selectItemHeader}
                    onInputChange={() => setCPUS([]) && getCPUS({ count: 20 })}
                    onSelect={(id: number) => setSelectedCpu(id)}
                    onSeeMoreClick={({ itemsCount }) => getCPUS({ count: 20, from: itemsCount })}
                  />
                </div>
                <div className={styles.selectItem}>
                  <InputBasedSelect
                    label="GPU"
                    placeholder="Choose a graphics"
                    inputId="gpu"
                    options={gpuOptions}
                    errorMessage={gpusErrorMessage}
                    labelClassName={styles.selectItemHeader}
                    onInputChange={() => setGPUS([]) && getGPUS({ count: 20 })}
                    onSelect={(id: number) => setSelectedGpu(id)}
                    onSeeMoreClick={({ itemsCount }) => getGPUS({ count: 20, from: itemsCount })}
                  />
                </div>
              </section>
              <Button
                buttonType={ButtonType.primary}
                className={styles.pageButton}
                classes={{ label: styles.buttonLabel }}
                onClick={() => onTestGame()}
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

const mapStateToProps = (state: RootState) => ({
  state: state.matcher,
});

const mapDispatchToProps = {
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameMatcherPage);

import React, { useState } from 'react';

import styles from './styles.module.scss';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import TopGames from 'components/ChartComponents/TopGames';
import PageComponent from '../PageComponent';
import Alert, { AlertType } from 'components/BasicComponents/Alert';
import InputBasedSelect from 'components/BasicComponents/InputBasedSelect';
import { MenuItems } from 'common/enums';
import * as actions from './actions';
import { RootState } from 'redux/rootReducer';
import { connect } from 'react-redux';
import { GameMatcherProps } from './interfaces';

const GameMatcherPage = (props: GameMatcherProps): JSX.Element => {
  const { setAlertValue, setGames, getGames, setCPUS, getCPUS, setGPUS, getGPUS, setRAMS, getRAMS } = props;

  const {
    gamesErrorMessage,
    ramsErrorMessage,
    cpusErrorMessage,
    gpusErrorMessage,
    alertMessage,
    alertMessageType,
  } = props.state;

  const [selectedGame, setSelectedGame] = useState<number | null>(null);
  const [selectedRam, setSelectedRam] = useState<number | null>(null);
  const [selectedCpu, setSelectedCpu] = useState<number | null>(null);
  const [selectedGpu, setSelectedGpu] = useState<number | null>(null);

  const gameOptions = props.state.games.map((game) => ({ label: game.name, value: game.id }));
  const ramOptions = props.state.rams.map((ram) => ({ label: ram.name, value: ram.id }));
  const cpuOptions = props.state.cpus.map((cpu) => ({ label: cpu.name, value: cpu.id }));
  const gpuOptions = props.state.gpus.map((gpu) => ({ label: gpu.name, value: gpu.id }));

  const onTestGame = async () => {
    if (!selectedRam) {
      setAlertValue({ type: AlertType.error, message: 'Error: Please choose a ram' });
      return;
    }
    if (!selectedCpu) {
      setAlertValue({ type: AlertType.error, message: 'Error: Please choose a processor' });
      return;
    }
    if (!selectedGpu) {
      setAlertValue({ type: AlertType.error, message: 'Error: Please choose a graphics' });
      return;
    }
    if (!selectedGame) {
      setAlertValue({ type: AlertType.error, message: 'Error: Please choose a game' });
      return;
    }
    setAlertValue({ type: AlertType.success, message: 'Success' });
  };

  return (
    <PageComponent selectedMenuItemNumber={MenuItems.GameMatcher}>
      <main className={styles.gameMatcher} role="main">
        <h1 className={styles.pageHeader}>Can You Run It?</h1>
        <div className={styles.contentWrapper}>
          <div className={styles.mainContainer}>
            <div className={styles.configs}>
              {alertMessage && <Alert alertType={alertMessageType}>{alertMessage}</Alert>}
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
                    debounceTime={300}
                    onInputChange={(value: string) => setGames([]) && getGames({ count: 20, name: value })}
                    onSelect={(id: number) => setSelectedGame(id)}
                    onSeeMoreClick={({ itemsCount, name }) => getGames({ count: 20, from: itemsCount, name })}
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
                    debounceTime={300}
                    onInputChange={(value: string) => setRAMS([]) && getRAMS({ count: 20, name: value })}
                    onSelect={(id: number) => setSelectedRam(id)}
                    onSeeMoreClick={({ itemsCount, name }) => getRAMS({ count: 20, from: itemsCount, name })}
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
                    debounceTime={300}
                    onInputChange={(value: string) => setCPUS([]) && getCPUS({ count: 20, name: value })}
                    onSelect={(id: number) => setSelectedCpu(id)}
                    onSeeMoreClick={({ itemsCount, name }) => getCPUS({ count: 20, from: itemsCount, name })}
                  />
                </div>
                <div className={styles.selectItem}>
                  <InputBasedSelect
                    label="GPU"
                    placeholder="Choose a graphics"
                    inputId="gpu"
                    options={gpuOptions}
                    errorMessage={gpusErrorMessage}
                    debounceTime={300}
                    labelClassName={styles.selectItemHeader}
                    onInputChange={(value: string) => setGPUS([]) && getGPUS({ count: 20, name: value })}
                    onSelect={(id: number) => setSelectedGpu(id)}
                    onSeeMoreClick={({ itemsCount, name }) => getGPUS({ count: 20, from: itemsCount, name })}
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

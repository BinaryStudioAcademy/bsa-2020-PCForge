import React, { useState } from 'react';

import styles from './styles.module.scss';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import TopGames from 'components/ChartComponents/TopGames';
import PageComponent from '../PageComponent';
import Alert, { AlertType } from 'components/BasicComponents/Alert';
import InputBasedSelect from 'components/BasicComponents/InputBasedSelect';
import { MenuItems, Routes } from 'common/enums';
import * as actions from './actions';
import { setCpu, setGpu, setRam } from '../Chart/actions';
import { RootState } from 'redux/rootReducer';
import { connect } from 'react-redux';
import { GameMatcherProps } from './interfaces';
import { MatcherSettableVariants, MatcherServerActions } from './actionTypes';
import { RouteComponentProps } from 'react-router-dom';

const GameMatcherPage = (props: GameMatcherProps & RouteComponentProps): JSX.Element => {
  const { setAlertValue, getMatcherData } = props;

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
    if (!selectedRam || !selectedCpu || !selectedGpu || !selectedGame) {
      setAlertValue({ type: AlertType.error, message: 'Error: Please choose hardware components' });
      return;
    }
    setAlertValue({ type: AlertType.success, message: 'Success' });
    props.history.push(Routes.CHART);
  };

  const createHardwareGetter = (variant: MatcherSettableVariants, type: string) => {
    return function ({ value, itemsCount = 0 }: { value: string; itemsCount?: number }) {
      getMatcherData({
        offset: itemsCount,
        name: value,
        variant,
        type,
      });
    };
  };

  const selectRam = (id: number) => {
    setSelectedRam(id);
    const ram = props.state.rams.find((ram) => ram.id === id);
    if (ram) props.setRam(ram);
  };

  const selectCpu = (id: number) => {
    setSelectedCpu(id);
    const cpu = props.state.cpus.find((cpu) => cpu.id === id);
    if (cpu) props.setCpu(cpu);
  };

  const selectGpu = (id: number) => {
    setSelectedGpu(id);
    const gpu = props.state.gpus.find((gpu) => gpu.id === id);
    if (gpu) props.setGpu(gpu);
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
                    onSelect={(id: number) => setSelectedGame(id)}
                    onInputChange={createHardwareGetter('games', MatcherServerActions.MATCHER_REPLACE_GAMES)}
                    onSeeMoreClick={createHardwareGetter('games', MatcherServerActions.MATCHER_ADD_GAMES)}
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
                    onSelect={selectRam}
                    onInputChange={createHardwareGetter('rams', MatcherServerActions.MATCHER_REPLACE_RAMS)}
                    onSeeMoreClick={createHardwareGetter('rams', MatcherServerActions.MATCHER_ADD_RAMS)}
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
                    onSelect={selectCpu}
                    onInputChange={createHardwareGetter('cpus', MatcherServerActions.MATCHER_REPLACE_CPUS)}
                    onSeeMoreClick={createHardwareGetter('cpus', MatcherServerActions.MATCHER_ADD_CPUS)}
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
                    onSelect={selectGpu}
                    onInputChange={createHardwareGetter('gpus', MatcherServerActions.MATCHER_REPLACE_GPUS)}
                    onSeeMoreClick={createHardwareGetter('gpus', MatcherServerActions.MATCHER_ADD_GPUS)}
                  />
                </div>
              </section>
              <Button
                buttonType={ButtonType.primary}
                className={styles.pageButton}
                classes={{ label: styles.buttonLabel }}
                onClick={onTestGame}
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
  setCpu,
  setGpu,
  setRam,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameMatcherPage);

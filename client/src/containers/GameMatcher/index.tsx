import React, { useState } from 'react';

import styles from './styles.module.scss';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import Tooltip from '@material-ui/core/Tooltip';
import PageComponent from '../PageComponent';
import Alert, { AlertType } from 'components/BasicComponents/Alert';
import InputBasedSelect from 'components/BasicComponents/InputBasedSelect';
import Link from 'components/BasicComponents/Link';
import { MenuItems, Routes } from 'common/enums';
import * as actions from './actions';
import { setCpu, setGpu, setRamSize, setGame } from '../Chart/actions';
import { RootState } from 'redux/rootReducer';
import { connect } from 'react-redux';
import { GameMatcherProps } from './interfaces';
import { MatcherSettableVariants, MatcherServerActions } from './actionTypes';
import { RouteComponentProps } from 'react-router-dom';
import { Box, createStyles, makeStyles, Slider, Theme } from '@material-ui/core';
import TopGames from 'containers/TopGames';

import ModalAddRequest from 'containers/AddUserRequest';
import { UserRequestedType } from 'common/enums/UserRequestedType';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rail: {
      height: 4,
    },
    track: {
      height: 4,
    },
    thumb: {
      height: 14,
      width: 14,
      marginLeft: 0,
      marginRight: 0,
    },
  })
);

const GameMatcherPage = (props: GameMatcherProps & RouteComponentProps): JSX.Element => {
  const materialStyles = useStyles();
  const { setAlertValue, getMatcherData } = props;

  const { gamesErrorMessage, cpusErrorMessage, gpusErrorMessage, alertMessage, alertMessageType } = props.state;

  const [selectedGame, setSelectedGame] = useState<number | null>(null);
  const [selectedCpu, setSelectedCpu] = useState<number | null>(null);
  const [selectedGpu, setSelectedGpu] = useState<number | null>(null);
  const [ramSize, setRamValue] = useState<number>(1);

  const [displayAddRequestOpen, setDisplayAddRequestOpen] = useState(false);
  const showAddGameModal = () => {
    setDisplayAddRequestOpen(true);
  };
  const hideAddGameModal = () => {
    setDisplayAddRequestOpen(false);
  };
  const handleAddGameWindow = () => {
    displayAddRequestOpen ? hideAddGameModal() : showAddGameModal();
  };

  const gameOptions = props.state.games.map((game) => ({ label: game.name, value: game.id }));
  const cpuOptions = props.state.cpus.map((cpu) => ({ label: cpu.name, value: cpu.id }));
  const gpuOptions = props.state.gpus.map((gpu) => ({ label: gpu.name, value: gpu.id }));

  const onTestGame = async () => {
    props.setRamSize(ramSize);
    if (!selectedCpu || !selectedGpu || !selectedGame) {
      setAlertValue({ type: AlertType.error, message: 'Error: Please choose hardware components' });
      return;
    }
    const game = props.state.games.find((game) => game.id === selectedGame);
    if (!game) {
      setAlertValue({ type: AlertType.error, message: 'Error: Please choose game' });
      return;
    }
    props.setGame(game);
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
          <div>
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
                  <span className={styles.selectItemHeader}>RAM</span>
                  <Slider
                    value={ramSize}
                    min={1}
                    step={1}
                    max={32}
                    color="secondary"
                    onChange={(e, value) => setRamValue(value as number)}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={(value) => value.toString()}
                  />
                </section>
                <section>
                  <h2 className={styles.sectionHeader}>Your Computer Hardware</h2>
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
                  <span className={styles.selectItemHeader}>RAM</span>
                  <Slider
                    value={ramSize}
                    min={1}
                    step={1}
                    max={32 + 1} //with margins on thumb we have 1 point outside rail
                    color="secondary"
                    onChange={(e, value) => setRamValue(Math.min(32, value as number))} //don't allow to select 33 as value
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={(value) => value.toString()}
                    classes={{
                      rail: materialStyles.rail,
                      track: materialStyles.track,
                      thumb: materialStyles.thumb,
                    }}
                  />
                </section>
                <Box className={styles.pageButtonWrapper}>
                  <Button
                    buttonType={ButtonType.primary}
                    className={styles.pageButton}
                    classes={{ label: styles.buttonLabel }}
                    onClick={onTestGame}
                  >
                    Can I Run It
                  </Button>
                </Box>
              </div>
            </div>
            <div>
              {displayAddRequestOpen ? (
                <ModalAddRequest onClose={hideAddGameModal} requestType={UserRequestedType.game} />
              ) : null}
              <div className={styles.addRequestBlock}>
                <p>
                  If you have not found the game you need, you can send a request to the administrator by this{' '}
                  <Link onClick={handleAddGameWindow} className={styles.linkRequest}>
                    link
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
          <div className={styles.asideBlock}>
            <TopGames />
          </div>
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
  setRamSize,
  setGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameMatcherPage);

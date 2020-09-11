import {Button, Container, Icon, Text, View, Spinner} from 'native-base';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {connect, ConnectedProps} from 'react-redux';
import {Game} from 'common/models/game';
import {RootState} from 'redux/rootReducer';
import {
  fetchCpus,
  fetchGpus,
  fetchGames,
  setError,
  fetchSetupPerformance,
  clearStorage,
} from './actions';
import {styles} from './styles';
import {Cpu} from 'common/models/cpu';
import {Gpu} from 'common/models/gpu';
import {RouterItemProps} from 'routing';
import {AutocompleteRouteParams} from 'components/Autocomplete/index';
import {getAllGames} from 'api/services/gameService';
import {getAllCpu} from 'api/services/cpuService';
import {getAllGpu} from 'api/services/gpuService';
import Slider from '@react-native-community/slider';

const GameMatcherPage: React.FC<Props & RouterItemProps> = ({
  cpus,
  gpus,
  games,
  setupPerformance,
  fetchGames,
  fetchCpus,
  fetchGpus,
  fetchSetupPerformance,
  clearStorage,
  navigation,
}): JSX.Element => {
  React.useEffect(() => {
    fetchGames('');
    fetchCpus('');
    fetchGpus('');
  }, []);
  const [game, setGame] = React.useState<Game | undefined>(undefined);
  const [cpu, setCpu] = React.useState<Cpu | undefined>(undefined);
  const [gpu, setGpu] = React.useState<Gpu | undefined>(undefined);
  const [ramSize, setRamSize] = React.useState<number>(1);
  const [isLoading, setLoading] = useState(false);

  if (setupPerformance) {
    setTimeout(() => {
      const params = {
        ...setupPerformance,
        game,
        cpu,
        gpu,
        ramSize,
      };
      navigation.navigate('Chart', params);
      clearStorage();
    });
  }

  const navigateTo = async (type: 'game' | 'cpu' | 'gpu') => {
    const onInputChange = () => {
      switch (type) {
        case 'game':
          return async (newValue: string) => {
            setLoading(true);
            fetchGames(newValue);
            const games = await getAllGames({
              name: newValue,
              from: 0,
              count: 15,
            });
            setLoading(false);
            return games.data;
          };
        case 'cpu':
          return async (newValue: string) => {
            setLoading(true);
            fetchCpus(newValue);
            const cpus = await getAllCpu({name: newValue, from: 0, count: 15});
            setLoading(false);
            return cpus.data;
          };
        case 'gpu':
          return async (newValue: string) => {
            setLoading(true);
            fetchGpus(newValue);
            const gpus = await getAllGpu({name: newValue, from: 0, count: 15});
            setLoading(false);
            return gpus.data;
          };
      }
    };
    const getItems = async () => await onInputChange()('');
    const onItemSelected = () => {
      switch (type) {
        case 'game':
          return (id: number) => {
            const game = games.find((game: any) => game.id === id);
            setGame(game);
          };
        case 'cpu':
          return (id: number) => {
            const cpu = cpus.find((cpu: any) => cpu.id === id);
            setCpu(cpu);
          };
        case 'gpu':
          return (id: number) => {
            const gpu = gpus.find((gpu: any) => gpu.id === id);
            setGpu(gpu);
          };
      }
    };
    const params: AutocompleteRouteParams = {
      subject: type,
      items: await getItems(),
      onInputChange: onInputChange(),
      onItemSelected: onItemSelected(),
    };
    navigation.navigate('Autocomplete', params);
  };

  const canIRunDisabled: boolean = !cpu || !gpu || !game;
  const onSubmit = (): void => {
    fetchSetupPerformance(cpu!.id, gpu!.id, ramSize, game!.id);
  };

  return (
    <Container style={styles.root}>
      {isLoading && <Spinner color="#4972ff" size="large" />}
      {!isLoading && (
        <>
          <View style={styles.content}>
            <ScrollView>
              <Text style={styles.header}>Can You Run It?</Text>
              <Button
                style={styles.selectButton}
                onPress={() => navigateTo('game')}
                iconRight>
                <Text>Select game</Text>
                {game && <Icon name="checkmark" />}
              </Button>
              <Text style={styles.header}>Your Computer Hardware</Text>
              <Button
                style={styles.selectButton}
                onPress={() => navigateTo('cpu')}>
                <Text>Select cpu</Text>
                {cpu && <Icon name="checkmark" />}
              </Button>
              <Button
                style={styles.selectButton}
                onPress={() => navigateTo('gpu')}>
                <Text>Select gpu</Text>
                {gpu && <Icon name="checkmark" />}
              </Button>
              <Text style={styles.selectRam}>Select ram size</Text>
              <Slider
                style={styles.slider}
                minimumValue={1}
                maximumValue={32}
                step={1}
                value={ramSize}
                onValueChange={setRamSize}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#ed2f2f"
                thumbTintColor="#ed2f2f"
              />
              <Text style={styles.selectedRam}>Ram selected: {ramSize} GB</Text>
            </ScrollView>
          </View>
          <View style={styles.footer}>
            <Button
              disabled={canIRunDisabled}
              style={[styles.canRunButton, canIRunDisabled && styles.disabled]}
              onPress={onSubmit}
              primary>
              <Text style={styles.canRunButtonText}>Can i run it</Text>
            </Button>
          </View>
        </>
      )}
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  cpus: state.matcherReducer.cpus,
  setupPerformance: state.matcherReducer.setupPerformance,
  gpus: state.matcherReducer.gpus,
  games: state.matcherReducer.games,
  error: state.matcherReducer.error,
});

const mapDispatchToProps = {
  fetchCpus,
  fetchGpus,
  fetchGames,
  fetchSetupPerformance,
  setError,
  clearStorage,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

export default connector(GameMatcherPage);

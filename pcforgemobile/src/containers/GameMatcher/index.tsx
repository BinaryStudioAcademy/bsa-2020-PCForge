import { Button, Container, Icon, Text, View } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect, ConnectedProps } from 'react-redux';
import { Game } from 'common/models/game';
import AppTitle from 'components/basicComponent/Title';
import { RootState } from 'redux/rootReducer';
import { fetchCpus, fetchGpus, fetchGames, setError, setCpus } from './actions';
import { styles } from './styles';
import { Cpu } from 'common/models/cpu';
import { Gpu } from 'common/models/gpu';
import { RouterItemProps } from 'common/configs/routing';
import { AutocompleteRouteParams } from 'components/Autocomplete/index';
import { getAllGames } from 'api/services/gameService';
import { getAllCpu } from 'api/services/cpuService';
import { getAllGpu } from 'api/services/gpuService';
import Slider from '@react-native-community/slider';
// import Icon from 'react-native-vector-icons/Ionicons';

const GameMatcherPage: React.FC<Props & RouterItemProps> = ({
  cpus,
  gpus,
  games,
  error,
  fetchGames,
  fetchCpus,
  fetchGpus,
  navigation
}): JSX.Element => {
  React.useEffect(() => {
    fetchGames('')
    fetchCpus('')
    fetchGpus('')
  }, [])
  const [game, setGame] = React.useState<Game | undefined>(undefined);
  const [cpu, setCpu] = React.useState<Cpu | undefined>(undefined);
  const [gpu, setGpu] = React.useState<Gpu | undefined>(undefined);
  const [ramSize, setRamSize] = React.useState<number>(1);

  const navigateTo = async (type: 'game' | 'cpu' | 'gpu') => {
    const onInputChange = () => {
      switch (type) {
        case 'game': return async (newValue: string) => {
          fetchGames(newValue);
          const games = await getAllGames({ name: newValue, from: 0, count: 15 })
          return games.data;
        }
        case 'cpu': return async (newValue: string) => {
          fetchCpus(newValue);
          const cpus = await getAllCpu({ name: newValue, from: 0, count: 15 })
          return cpus.data;
        }
        case 'gpu': return async (newValue: string) => {
          fetchGpus(newValue);
          const gpus = await getAllGpu({ name: newValue, from: 0, count: 15 })
          return gpus.data;
        }
      }
    }
    const getItems = async () => await onInputChange()('')
    const onItemSelected = () => {
      switch (type) {
        case 'game': return (id: number) => {
          const game = games.find(game => game.id === id);
          setGame(game);
        };
        case 'cpu': return (id: number) => {
          const cpu = cpus.find(cpu => cpu.id === id);
          setCpu(cpu);
        };
        case 'gpu': return (id: number) => {
          const gpu = gpus.find(gpu => gpu.id === id);
          setGpu(gpu);
        };
      }
    }
    const params: AutocompleteRouteParams = {
      subject: type,
      items: await getItems(),
      onInputChange: onInputChange(),
      onItemSelected: onItemSelected(),
    };
    navigation.navigate('Autocomplete', params)
  }

  return (
    <Container style={styles.root}>
      <AppTitle title="Matcher" />
      <View style={styles.content}>
        <Text style={styles.header}>Can You Run It?</Text>
        <Button style={styles.selectButton} onPress={() => navigateTo('game')} iconRight>
          <Text>Select game</Text>
          {game && <Icon name='checkmark' />}
        </Button>
        <Text style={styles.header}>Your Computer Hardware</Text>
        <Button style={styles.selectButton} onPress={() => navigateTo('cpu')} >
          <Text>Select cpu</Text>
          {cpu && <Icon name='checkmark' />}
        </Button>
        <Button style={styles.selectButton} onPress={() => navigateTo('gpu')} >
          <Text>Select gpu</Text>
          {gpu && <Icon name='checkmark' />}
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
        <Text style={styles.selectedRam}>
          Ram selected: {ramSize} GB
        </Text>
        <Button disabled={!cpu || !gpu || !game} style={[styles.selectButton, styles.canRunButton]}>
          <Text>Can i run it</Text>
        </Button>
      </View>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  cpus: state.matcherReducer.cpus,
  gpus: state.matcherReducer.gpus,
  games: state.matcherReducer.games,
  error: state.matcherReducer.error,
});

const mapDispatchToProps = {
  fetchCpus,
  fetchGpus,
  fetchGames,
  setError,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

export default connector(GameMatcherPage);

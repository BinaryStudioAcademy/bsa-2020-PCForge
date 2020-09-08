import { Container, Text, View } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect, ConnectedProps } from 'react-redux';
import { Game } from 'common/models/game';
import AppTitle from 'components/basicComponent/Title';
import { RootState } from 'redux/rootReducer';
import { fetchCpus, fetchGpus, fetchGames, setError } from './actions';
import { styles } from './styles';
import { Cpu } from '~/common/models/cpu';
import { Gpu } from '~/common/models/gpu';

const GameMatcherPage: React.FC<Props> = ({
  cpus,
  gpus,
  games,
  error,
  fetchGames,
  fetchCpus,
  fetchGpus,
}): JSX.Element => {
  // React.useEffect(() => {
  //   fetchGames('');
  //   fetchCpus('');
  //   fetchGpus('');
  // }, [])

  const onGameNameChange = (name: string) => {
    fetchGames(name);
  }

  const onGameSelect = (game: Game) => {
    console.log('selected game', game);
  }

  const onCpuNameChange = (name: string) => {
    fetchCpus(name);
  }

  const onCpuSelect = (cpu: Cpu) => {
    console.log('selected cpu', cpu);
  }

  const onGpuNameChange = (name: string) => {
    fetchGpus(name);
  }

  const onGpuSelect = (gpu: Gpu) => {
    console.log('selected gpu', gpu);
  }

  return (
    <Container style={styles.root}>
      <AppTitle title="Matcher" />
      <View style={styles.content}>
        <Text style={styles.gameHeader}>Select game</Text>
        <View style={styles.gameContainer}>
          <Autocomplete
            data={games}
            onChangeText={onGameNameChange}
            defaultValue={''}
            renderItem={({ item: game }) => (
              <TouchableOpacity style={styles.itemWrapper} onPress={() => onGameSelect(game)}>
                <Text style={styles.item}>{game.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <Text style={styles.cpuHeader}>cpu</Text>
        <View style={styles.cpuContainer}>
          <Autocomplete
            data={cpus}
            onChangeText={onCpuNameChange}
            defaultValue={''}
            renderItem={({ item: cpu }) => (
              <TouchableOpacity style={styles.itemWrapper} onPress={() => onCpuSelect(cpu)}>
                <Text style={styles.item}>{cpu.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <Text style={styles.gpuHeader}>gpu</Text>
        <View style={styles.gpuContainer}>
          <Autocomplete
            data={gpus}
            onChangeText={onGpuNameChange}
            defaultValue={''}
            renderItem={({ item: gpu }) => (
              <TouchableOpacity style={styles.itemWrapper} onPress={() => onGpuSelect(gpu)}>
                <Text style={styles.item}>{gpu.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
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

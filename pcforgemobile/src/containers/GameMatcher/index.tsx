import { Button, Container, Text, View } from 'native-base';
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
import { Cpu } from 'common/models/cpu';
import { Gpu } from 'common/models/gpu';
import { RouterItemProps } from 'common/configs/routing';
import { AutocompleteRouteParams } from 'components/Autocomplete/index';

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
  const [game, setGame] = React.useState<Game | undefined>(undefined);

  const navigateTo = (type: 'game') => {
    const getItems = () => {
      switch (type) {
        case 'game': return games;
      }
    }
    const onInputChange = () => {
      switch (type) {
        case 'game': return (newValue: string) => { fetchGames(newValue); };
      }
    }
    const onItemSelected = () => {
      switch (type) {
        case 'game': return (id: number) => {
          const game = games.find(game => game.id === id);
          setGame(game);
        };
      }
    }
    const params: AutocompleteRouteParams = {
      title: `Select ${type}`,
      items: getItems(),
      onInputChange: onInputChange(),
      onItemSelected: onItemSelected(),
    };
    navigation.navigate('Autocomplete', params)
  }

  return (
    <Container style={styles.root}>
      <AppTitle title="Matcher" />
      <View style={styles.content}>
        <Button style={styles.gameHeader} onPress={() => navigateTo('game')} >
          <Text>Select game</Text>
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

import { Button, Container, Text, View } from 'native-base';
import React, { useState } from 'react';
import Autocomplete from 'react-native-autocomplete-input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppTitle from 'components/basicComponent/Title';
import { styles } from './styles';
import { RouterItemProps } from 'common/configs/routing';

export interface AutocompleteRouteParams {
  title: string;
  items: {
    id: number;
    name: string;
  }[];
  onInputChange: (newValue: string) => void;
  onItemSelected: (id: number) => void;
}

const MyAutocomplete: React.FC<RouterItemProps<AutocompleteRouteParams>> = ({
  route,
  navigation,
}): JSX.Element => {
  const { title, items, onInputChange, onItemSelected } = route.params;

  const _onItemSelected = (id: number) => {
    onItemSelected(id);
    navigation.goBack();
  }

  return (
    <Container style={styles.root}>
      <AppTitle title={title} />
      <View style={styles.content}>
        <View style={styles.container}>
          <Autocomplete
            data={items}
            onChangeText={onInputChange}
            defaultValue={''}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.itemWrapper} onPress={() => _onItemSelected(item.id)}>
                <Text style={styles.item}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      <Button onPress={() => navigation.goBack()} >
        <Text>Go back</Text>
      </Button>
    </Container>
  );
};

export default MyAutocomplete;

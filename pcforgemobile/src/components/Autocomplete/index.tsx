import { Button, Container, Input, ListItem, Text, View } from 'native-base';
import React, { useState } from 'react';
import Autocomplete from 'react-native-autocomplete-input';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import AppTitle from 'components/basicComponent/Title';
import { styles } from './styles';
import { RouterItemProps } from 'common/configs/routing';
import { LogBox } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Item from 'native-base-theme/components/Item';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

interface IItem {
  id: number;
  name: string;
}

export interface AutocompleteRouteParams {
  subject: string;
  items: IItem[];
  onInputChange: (newValue: string) => Promise<IItem[]>;
  onItemSelected: (id: number) => void;
}

const MyAutocomplete: React.FC<RouterItemProps<AutocompleteRouteParams>> = ({
  route,
  navigation,
}): JSX.Element => {
  const { subject, items: initialItems, onInputChange, onItemSelected } = route.params;
  const [items, setItems] = React.useState<IItem[]>(initialItems);
  const [input, setInput] = React.useState<string>("");
  console.log(items.length, onInputChange)

  const _onItemSelected = (id: number) => {
    onItemSelected(id);
    navigation.goBack();
  }

  const _onInputChange = (newValue: string) => {
    setInput(newValue)
    onInputChange(newValue)
    .then(items => setItems(items))
    .catch(err => console.error(err))
  }

  return (
    <Container style={styles.root}>
      <AppTitle title={`Select ${subject}`} />
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder={`Select ${subject} name`}
          placeholderTextColor="#fff" 
          onChangeText={text => _onInputChange(text)}
          value={input}
        />
        <SafeAreaView style={styles.listContainer}>
          {items.length > 0 ? 
          <FlatList
            data={items}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => _onItemSelected(item.id)}>
                <ListItem noIndent={false}>
                  <Text style={styles.itemText}>{item.name}</Text>
                </ListItem>
              </TouchableOpacity>
            )}
          />
            : <Text style={styles.notFound}>No {subject}s was found</Text>}
        </SafeAreaView>
      </View>
      <Button onPress={() => navigation.goBack()} style={styles.backButton} >
        <Text>Go back</Text>
      </Button>
    </Container>
  );
};

export default MyAutocomplete;

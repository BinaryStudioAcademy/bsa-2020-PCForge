import React, {useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  TextInput,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ContactListItem from '../contact-list-item';
import styles from './styles';
import {Contact} from 'react-native-contacts';
import {AppState} from '../../types/app-state';
import {connect} from 'react-redux';
import {getContacts} from '../../actions';

interface Props {
  navigation: any;
  contacts: Contact[];
  getContacts: () => void;
}

export const ContactList: React.FC<Props> = (props): JSX.Element => {
  const {navigation, contacts} = props;
  const [search, setSearch] = useState<string>('');

  const onSearchInput = (text: string) => {
    setSearch(text);
  };

  const filterMessages = (text: string) => {
    text = text.toLowerCase();
    return contacts.filter((contact) => {
      if (contact.givenName.toLocaleLowerCase().includes(text)) {
        return true;
      }
      if (
        contact.emailAddresses?.some((email) =>
          email.email?.toLocaleLowerCase().includes(text),
        )
      ) {
        return true;
      }
      if (
        contact.phoneNumbers?.some((phoneNumber) =>
          phoneNumber.number?.toLocaleLowerCase().includes(text),
        )
      ) {
        return true;
      }
      return false;
    });
  };

  const filteredMessages = filterMessages(search);

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <View style={styles.searchBarWrapper}>
          <Text>
            <Icon name="search" size={30} color="#aaa" />
          </Text>
          <TextInput
            placeholder="Search"
            value={search}
            onChangeText={onSearchInput}
          />
        </View>
      </View>
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        accessible={false}
        style={styles.contactsContainer}>
        <View>
          <FlatList
            style={styles.contactsList}
            data={filteredMessages}
            renderItem={({item}) => (
              <ContactListItem item={item} navigation={navigation} />
            )}
            keyExtractor={(item) => item.recordID}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const mapStateToProps = (state: AppState) => ({
  contacts: state.contacts,
});

const mapDispatchToProps = {
  getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

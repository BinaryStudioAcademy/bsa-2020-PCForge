import React, {useState} from 'react';
import {
  View,
  Text,
  Keyboard,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import styles from './styles';
import {RouteProp} from '@react-navigation/native';
import {Contact, PhoneNumber} from 'react-native-contacts';
import call from '../../helpers';
import {deleteContact, updateContact} from '../../actions';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextInput} from 'react-native-gesture-handler';

interface Props {
  navigation: any;
  route: RouteProp<Record<'Home', Contact>, 'Home'>;
  deleteContact: (contact: Contact) => void;
  updateContact: (contact: Contact) => void;
}

const ContactView = (props: Props): JSX.Element => {
  const contact: Contact = props.route.params;
  const primaryNumber: string = findPrimaryNumber(contact.phoneNumbers);
  const [phoneNumber, setPhoneNumber] = useState<string>(primaryNumber);
  const [name, setName] = useState<string>(contact.givenName);
  const onButtonPress = () => {
    Keyboard.dismiss();
  };

  const onCall = () => {
    onButtonPress();
    call(phoneNumber);
  };

  const onDelete = () => {
    onButtonPress();
    props.deleteContact(contact);
    props.navigation.navigate('Home');
  };

  const onPhoneNumberInput = (text: string) => {
    const validText = text.replace(/[^+0-9]/g, '');
    setPhoneNumber(validText);

    let newPhoneNumbers: PhoneNumber[] = [];
    if (!contact.phoneNumbers?.length) {
      newPhoneNumbers[0] = {number: validText, label: 'phoneNumber'};
    } else {
      newPhoneNumbers = contact.phoneNumbers.map((phoneNumber, i) =>
        i === 0 ? {...phoneNumber, number: validText} : phoneNumber,
      );
    }
    props.updateContact({...contact, phoneNumbers: newPhoneNumbers});
  };

  const onNameInput = (text: string) => {
    setName(text);
    props.updateContact({...contact, givenName: text});
  };

  function findPrimaryNumber(phoneNumbers?: PhoneNumber[]): string {
    if (!phoneNumbers?.length) {
      return '';
    }
    return phoneNumbers[0].number;
  }

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={
            contact.hasThumbnail
              ? {uri: contact.thumbnailPath}
              : require('../../../assets/default-contact-img.png')
          }
          style={styles.image}
        />
      </View>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            textContentType="name"
            onChangeText={onNameInput}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            textContentType="telephoneNumber"
            keyboardType="phone-pad"
            onChangeText={onPhoneNumberInput}
          />
        </View>
      </View>
      <View style={styles.actions}>
        <TouchableNativeFeedback onPress={onCall}>
          <View style={[styles.button, styles.callButton]}>
            <Icon name="call" size={20} />
            <Text>CALL</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={onDelete}>
          <View style={[styles.button, styles.deleteButton]}>
            <Text>DELETE</Text>
            <Icon name="clear" size={20} />
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const mapDispatchToProps = {
  deleteContact,
  updateContact,
};

export default connect(null, mapDispatchToProps)(ContactView);

import React from 'react';
import {View, Text, TouchableNativeFeedback, Keyboard} from 'react-native';
import styles from './styles';
import {Contact, EmailAddress} from 'react-native-contacts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  item: Contact;
  navigation: any;
}

class ContactListItem extends React.PureComponent<Props> {
  render() {
    const {item, navigation} = this.props;
    const onPress = () => {
      Keyboard.dismiss();
      navigation.navigate('Contact', item);
    };

    const findPrimaryEmail = (emails?: EmailAddress[]): string | null => {
      if (!emails?.length) {
        return null;
      }
      return emails[0].email;
    };

    const primaryEmail: string | null = findPrimaryEmail(item.emailAddresses);
    return (
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('#aaa', false)}>
        <View style={styles.container}>
          <View style={styles.contact}>
            <MIcon name="perm-contact-calendar" size={25} />
            <View style={styles.contactDetail}>
              <Text style={styles.contactName}>{item.givenName}</Text>
              {primaryEmail && (
                <Text style={styles.contactEmail}>{primaryEmail}</Text>
              )}
            </View>
          </View>
          <Icon name="information-outline" size={25} />
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default ContactListItem;

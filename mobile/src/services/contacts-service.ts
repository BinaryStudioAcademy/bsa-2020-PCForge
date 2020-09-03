import Contacts, {Contact} from 'react-native-contacts';
import {PermissionsAndroid} from 'react-native';

export class ContactsService {
  public async getAll(): Promise<Contact[]> {
    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: 'Please accept bare mortal',
      },
    );
    if (status !== 'granted') {
      throw new Error('Permission to get contacts denied');
    }
    return new Promise((resolve, reject) => {
      Contacts.getAll((error, contacts) => {
        if (error) {
          return reject(error);
        }
        return resolve(contacts);
      });
    });
  }

  public async deleteOne(contact: Contact): Promise<void> {
    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
      {
        title: 'Contacts',
        message: 'This app would like to update your contacts.',
        buttonPositive: 'Please accept bare mortal',
      },
    );
    if (status !== 'granted') {
      throw new Error('Permission to update contacts denied');
    }
    return new Promise((resolve, reject) => {
      Contacts.deleteContact(contact, (error) => {
        if (error) {
          return reject();
        }
        return resolve();
      });
    });
  }

  public async updateOne(contact: Contact): Promise<Contact> {
    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
      {
        title: 'Contacts',
        message: 'This app would like to update your contacts.',
        buttonPositive: 'Please accept bare mortal',
      },
    );
    if (status !== 'granted') {
      throw new Error('Permission to update contacts denied');
    }

    return new Promise((resolve, reject) => {
      Contacts.updateContact(contact, (error) => {
        if (error) {
          return reject();
        }
        return resolve(contact);
      });
    });
  }
}

export const contactsService = new ContactsService();

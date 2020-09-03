import {Contact} from 'react-native-contacts';

export class AppState {
  constructor(public contacts: Contact[] = []) {}
}

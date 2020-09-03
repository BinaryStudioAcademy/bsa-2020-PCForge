import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flex: 1,
  },
  contactsContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 5,
  },
  searchBarWrapper: {
    borderBottomWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    marginHorizontal: 30,
    marginTop: 20,
    paddingLeft: 15,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#333',
  },
  contactsList: {
    alignSelf: 'stretch',
  },
});

export default styles;

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignSelf: 'stretch',
    textAlign: 'center',
    justifyContent: 'center',
  },
  input: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    color: '#fff',
  },
  listContainer: {
    marginTop: 60,
    marginBottom: 140,
  },
  notFound: {
    color: '#fff',
    display: 'flex',
    alignItems: 'stretch',
    textAlign: 'center',
  },
  itemText: {
    color: '#fff',
  },
});

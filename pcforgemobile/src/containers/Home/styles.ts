import {StyleSheet, Dimensions} from 'react-native';

const fullWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  newsCard: {
    marginBottom: 20,
  },
  newsImage: {
    // width: 200,
    width: fullWidth - 20,
    height: 300,
  },
  dateText: {
    alignSelf: 'flex-end',
  },
  newsText: {
    color: '#fff',
  },
});

export default styles;

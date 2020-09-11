import {StyleSheet, Dimensions} from 'react-native';

const fullWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  newsCard: {
    marginBottom: 20,
  },
  imageCardItem: {
    paddingTop: 8,
    justifyContent: 'center',
  },
  newsImage: {
    width: fullWidth - 40,
    height: 200,
  },
  dateText: {
    alignSelf: 'flex-end',
    color: '#cbcfd4',
    fontSize: 12,
  },
  newsText: {
    color: '#fff',
  },
});

export default styles;

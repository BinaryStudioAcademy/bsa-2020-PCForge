import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  root: {},
  headerWrapper: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  header: {
    color: '#fff',
  },
  metaContainer: {
    margin: 10,
    padding: 10,
    borderColor: '#4972ff',
    borderWidth: 1,
    borderRadius: 6,
  },
  metaTextWrapper: {
    flexDirection: 'row',
  },
  metaText: {
    color: '#cbcfd4',
  },
  noTransform: {
    textTransform: 'none',
  },
  gameLabel: {
    textTransform: 'uppercase',
    color: '#fff',
  },
  harwaresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  hardwareItemProgressContainer: {
    padding: 20,
    width: Dimensions.get('window').width / 2,
  },
  hardwareMetaContainer: {
    padding: 10,
  },
  hardwareItemLabel: {
    color: '#fff',
    fontSize: 16,
  },
  hardwareItemName: {
    fontSize: 14,
    color: '#cbcfd4',
  },
});

export default styles;

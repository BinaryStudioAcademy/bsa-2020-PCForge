import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginVertical: 7,
    minHeight: 50,
    backgroundColor: '#eee',
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactDetail: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
  },
  contactName: {
    marginLeft: 5,
  },
  contactEmail: {
    color: '#999',
  },
});

export default styles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#424242',
  },
  routeListItem: {
    justifyContent: 'flex-start',
    backgroundColor: '#424242',
  },
  userImage: {
    width: 250,
    height: 250,
    justifyContent: 'flex-end',
  },
  userDataContainer: {
    backgroundColor: 'rgba(60, 68, 70, 0.4)',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  userName: {
    fontWeight: '700',
    fontSize: 18,
    color: '#fff',
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 5,
    color: '#cbcfd4',
  },
  routeText: {
    color: '#fff',
  },
  userEmail: {
    color: '#fff',
    fontSize: 14,
  },
});

export default styles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  innerButton: {
    width: 10,
    height: 10,
    backgroundColor: '#000',
    borderRadius: 100,
  },
  active: {
    backgroundColor: '#eb3d55',
  },
});

export default styles;

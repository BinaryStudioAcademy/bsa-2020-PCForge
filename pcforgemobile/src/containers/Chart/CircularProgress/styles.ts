import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {},
  progressCircleContainer: {
    position: 'relative',
    justifyContent: 'center',
    height: 120,
    width: 120,
  },
  progressCircle: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    alignSelf: 'center',
    position: 'absolute',
    color: '#fff',
  },
});

export default styles;

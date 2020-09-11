import {StyleSheet} from 'react-native';
import color from 'color';

const styles = StyleSheet.create({
  root: {},
  footerTab: {
    backgroundColor: '#3c444d',
  },
  footerTabActive: {
    backgroundColor: color('#3c444d').lighten(0.2).hex(),
  },
  footerTabCentral: {
    borderLeftColor: '#cbcfd4',
    borderLeftWidth: 2,
    borderRightColor: '#cbcfd4',
    borderRightWidth: 2,
  },
});

export default styles;

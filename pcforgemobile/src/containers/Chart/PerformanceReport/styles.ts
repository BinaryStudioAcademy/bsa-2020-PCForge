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
  chartContainer: {
    flexDirection: 'row',
    height: 200,
  },
  chart: {
    flex: 1,
  },
  bottomLabels: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  bottomLabelText: {
    color: '#cbcfd4',
    fontSize: 14,
  },
  requirementsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  requirementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    width: Dimensions.get('window').width - 20,
  },
  requirementItemText: {
    marginLeft: 8,
    color: '#fff',
  },
});

export default styles;

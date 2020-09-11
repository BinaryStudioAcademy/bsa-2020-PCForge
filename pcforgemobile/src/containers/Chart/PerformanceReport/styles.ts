import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  root: {},
  headerWrapper: {
    paddingHorizontal: 10,
    paddingTop: 10,
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

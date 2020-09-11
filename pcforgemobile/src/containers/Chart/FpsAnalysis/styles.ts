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
    position: 'relative',
    flexDirection: 'row',
    height: 200,
    paddingTop: 8,
    paddingBottom: 4,
  },
  resolutionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  resolutionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    width: Dimensions.get('window').width / 2 - 10,
  },
  resolutionItemTextWrapper: {
    marginLeft: 10,
  },
  resolutionItemText: {
    marginLeft: 8,
    color: '#fff',
  },
  chart: {
    marginHorizontal: 50,
    width: Dimensions.get('window').width - 100,
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 50,
  },
  labelContainer: {
    width: Dimensions.get('window').width / 4 - 25,
    alignItems: 'center',
  },
  label: {
    color: '#cbcfd4',
    fontSize: 14,
  },
  optimalFpsLine: {
    flexDirection: 'row',
    flex: 1,
    height: 1,
    width: Dimensions.get('window').width - 20,
    marginLeft: 10,
    backgroundColor: '#eb3d55',
  },
  optimalFpsLineText: {
    fontSize: 10,
    marginLeft: 10,
    color: '#cbcfd4',
  },
  optimalFpsLineContainer: {
    paddingVertical: 4,
    position: 'absolute',
    zIndex: -1,
    flexDirection: 'row',
    flex: 1,
  },
  optimalFpsLineSubcontainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
});

export default styles;
